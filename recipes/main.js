import recipes from './recipes.mjs';

const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const results = document.getElementById('results');
const resultsText = document.getElementById('resultsText');

function performSearch(e) {
    e.preventDefault();
    const query = searchInput.value.trim();
    
    if (query) {
        results.classList.add('show');
        resultsText.textContent = `You searched for: "${query}". In a real website, this would display results matching your query.`;
    }
}

searchButton.addEventListener('click', performSearch);

searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        performSearch(e);
    }
});


function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - Math.ceil(rating);
    
    let starsHTML = '';

    for (let i = 0; i < fullStars; i++) {
        starsHTML += '<span aria-hidden="true" class="icon-star">⭐</span>';
    }
   
    if (hasHalfStar) {
        starsHTML += '<span aria-hidden="true" class="icon-star">⭐</span>';
    }

    for (let i = 0; i < emptyStars; i++) {
        starsHTML += '<span aria-hidden="true" class="icon-star-empty">☆</span>';
    }
    
    return starsHTML;
}


function displayRecipe(recipe) {
    document.getElementById('recipeName').textContent = recipe.name;

    const tagElement = document.getElementById('recipeTag');
    if (recipe.tags && recipe.tags.length > 0) {
        tagElement.textContent = recipe.tags[0].toLowerCase();
    }

    const ratingElement = document.getElementById('recipeRating');
    ratingElement.setAttribute('aria-label', `Rating: ${recipe.rating} out of 5 stars`);
    ratingElement.innerHTML = generateStars(recipe.rating);

    const recipeImage = document.getElementById('recipeImage');
    recipeImage.src = recipe.image;
    recipeImage.alt = recipe.name;
    

    document.getElementById('recipeDescription').textContent = recipe.description;
}
const appleCrispRecipe = recipes.find(recipe => recipe.name === 'Apple Crisp');
if (appleCrispRecipe) {
    displayRecipe(appleCrispRecipe);
}