const searchBar = document.getElementById('search-bar');
const searchBarInput = searchBar.getElementsByClassName('search-bar-input')[0];
const searchBarResults = searchBar.getElementsByClassName("search-bar-results")[0];

// Prevent losing search-bar focus when clicking on search-results.
searchBarResults.addEventListener(
	"mousedown", 
	event => {
		event.preventDefault(); 
		event.stopPropagation()
	}
);

function onSearchBarLoseFocus() {
	searchBarResults.innerHTML = '';
	searchBarResults.style.visibility = 'hidden';
}

function searchTitles(inputSearchTerm, maxResults) {
	const searchTerms = inputSearchTerm.toLowerCase().split(' ');
	var searchResults = searchData;
	for (const searchTerm of searchTerms) {
		searchResults = searchResults.filter(x => x.title.toLowerCase().includes(searchTerm));
	}
	if (searchResults.length > maxResults) {
		searchResults = searchResults.slice(0, maxResults);
	}
	return searchResults;
}

function onSearchBarUpdate() {
	const searchResults = searchTitles(searchBarInput.value, 100)
	
	var itemHtml = '';
	for (const entry of searchResults) {
		itemHtml += `<li><a href = ${entry.url}>${entry.title}</a></li>`;
	}
	
	if (itemHtml == '') {
		itemHtml = '<li>No matches</li>';
	}
	
	var html = '';
	html += '<div class="learn-more">';
	html += '<ol>'
	html += itemHtml;
	html += '</ol>';
	html += '</div>';
	searchBarResults.innerHTML = html;
	searchBarResults.style.visibility = 'visible';
}

