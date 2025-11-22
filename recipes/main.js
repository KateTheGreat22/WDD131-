import recipes from './recipes.mjs';

const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const results = document.getElementById('results');
const resultsText = document.getElementById('resultsText');

function random(num) {
    return Math.floor(Math.random() * num);
}

function getRandomListEntry(list) {
    const randomNum = random(list.length);
    return list[randomNum];
}
function tagsTemplate(tags) {
    return tags.map(tag => `<li>${tag.toLowerCase()}</li>`).join('');
}

function ratingTemplate(rating) {
    let html = `<span class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">`;

    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            html += '<span aria-hidden="true" class="icon-star">⭐</span>';
        } else {
            html += '<span aria-hidden="true" class="icon-star-empty">☆</span>';
        }
    }
    
    html += '</span>';
    return html;
}

function recipeTemplate(recipe) {
    return `<div class="recipe-card">
        <img src="${recipe.image}" alt="${recipe.name}" class="recipe-image">
        
        <div class="recipe-info">
            <ul class="recipe__tags">
                ${tagsTemplate(recipe.tags)}
            </ul>
            
            <h2>${recipe.name}</h2>
            
            ${ratingTemplate(recipe.rating)}
            
            <p class="recipe-description">
                ${recipe.description}
            </p>
        </div>
    </div>`;
}

function renderRecipes(recipeList) {
    const recipeContainer = document.getElementById('recipeContainer');
    const html = recipeList.map(recipe => recipeTemplate(recipe)).join('');
    recipeContainer.innerHTML = html;
}
function init() {
    const recipe = getRandomListEntry(recipes);
    renderRecipes([recipe]);
}
function filterRecipes(query) {
    const filtered = recipes.filter(recipe => {
        const nameMatch = recipe.name.toLowerCase().includes(query);
        const descriptionMatch = recipe.description.toLowerCase().includes(query);
        
        const tagMatch = recipe.tags.find(tag => tag.toLowerCase().includes(query));
        const ingredientMatch = recipe.recipeIngredient.find(ingredient => 
        ingredient.toLowerCase().includes(query)
        );
        return nameMatch || descriptionMatch || tagMatch || ingredientMatch;
    });
    

    const sorted = filtered.sort((a, b) => {
        return a.name.localeCompare(b.name);
    });
    
    return sorted;
}

function searchHandler(e) {
    e.preventDefault();
    
    const query = searchInput.value.toLowerCase().trim();
    
    if (query) {

        const filteredRecipes = filterRecipes(query);
        
        renderRecipes(filteredRecipes);
        
        results.classList.add('show');
        resultsText.textContent = `Found ${filteredRecipes.length} recipe(s) matching "${query}".`;
    } else {
        init();
        results.classList.remove('show');
    }
}

searchButton.addEventListener('click', searchHandler);

searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        searchHandler(e);
    }
});

init();