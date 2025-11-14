<span
	class="rating"
	role="img"
	aria-label="Rating: 4 out of 5 stars"
>
	<span aria-hidden="true" class="icon-star">⭐</span>
	<span aria-hidden="true" class="icon-star">⭐</span>
	<span aria-hidden="true" class="icon-star">⭐</span>
	<span aria-hidden="true" class="icon-star-empty">⭐</span>
	<span aria-hidden="true" class="icon-star-empty">☆</span>
</span>

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