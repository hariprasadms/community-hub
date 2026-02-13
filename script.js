// DOM Elements
const searchInput = document.getElementById('searchInput');
const searchClear = document.getElementById('searchClear');
const searchResultsInfo = document.getElementById('searchResultsInfo');
const categoriesContainer = document.getElementById('categoriesContainer');
const noResults = document.getElementById('noResults');
const searchTermDisplay = document.getElementById('searchTermDisplay');

// Search state
let searchTimeout;
let isSearching = false;

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    // Auto-expand first category on load
    const firstCategory = document.querySelector('.category-header');
    if (firstCategory) {
        toggleCategory(firstCategory);
    }
    
    // Focus search on '/' key press
    document.addEventListener('keydown', function(e) {
        if (e.key === '/' && document.activeElement !== searchInput) {
            e.preventDefault();
            searchInput.focus();
        }
        
        // Clear search on Escape
        if (e.key === 'Escape' && document.activeElement === searchInput) {
            clearSearch();
        }
    });
});

// Search functionality with debouncing
searchInput.addEventListener('input', function(e) {
    const searchTerm = e.target.value.trim();
    
    // Show/hide clear button
    if (searchTerm.length > 0) {
        searchClear.classList.add('visible');
    } else {
        searchClear.classList.remove('visible');
        clearSearch();
        return;
    }
    
    // Debounce search
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
        performSearch(searchTerm);
    }, 300);
});

// Clear button functionality
searchClear.addEventListener('click', function() {
    clearSearch();
    searchInput.focus();
});

// Perform search
function performSearch(searchTerm) {
    const lowerSearchTerm = searchTerm.toLowerCase();
    const categoryCards = document.querySelectorAll('.category-card');
    let visibleCount = 0;
    let totalMatches = 0;
    
    categoryCards.forEach(card => {
        const categoryText = card.textContent.toLowerCase();
        const resourceItems = card.querySelectorAll('.resource-item');
        let categoryHasMatch = false;
        let categoryMatchCount = 0;
        
        // Check each resource item
        resourceItems.forEach(item => {
            const itemText = item.textContent.toLowerCase();
            if (itemText.includes(lowerSearchTerm)) {
                item.style.display = 'block';
                categoryHasMatch = true;
                categoryMatchCount++;
                totalMatches++;
                
                // Highlight matching text (optional visual enhancement)
                highlightMatch(item, searchTerm);
            } else {
                item.style.display = 'none';
            }
        });
        
        // Show/hide category based on matches
        if (categoryHasMatch) {
            card.style.display = 'block';
            visibleCount++;
            
            // Auto-expand matching categories
            const resourcesList = card.querySelector('.resources-list');
            const toggleIcon = card.querySelector('.toggle-icon');
            resourcesList.classList.add('expanded');
            toggleIcon.classList.add('rotated');
        } else {
            card.style.display = 'none';
        }
    });
    
    // Update UI based on results
    if (visibleCount > 0) {
        categoriesContainer.style.display = 'grid';
        noResults.classList.remove('visible');
        
        // Show results info
        const resultsText = `Found ${totalMatches} ${totalMatches === 1 ? 'result' : 'results'} in ${visibleCount} ${visibleCount === 1 ? 'category' : 'categories'}`;
        searchResultsInfo.textContent = resultsText;
        searchResultsInfo.classList.add('visible');
    } else {
        categoriesContainer.style.display = 'none';
        noResults.classList.add('visible');
        searchTermDisplay.textContent = searchTerm;
        searchResultsInfo.classList.remove('visible');
    }
}

// Highlight matching text in search results
function highlightMatch(element, searchTerm) {
    // Remove previous highlights
    const highlighted = element.querySelectorAll('.search-highlight');
    highlighted.forEach(el => {
        const parent = el.parentNode;
        parent.replaceChild(document.createTextNode(el.textContent), el);
        parent.normalize();
    });
}

// Clear search
function clearSearch() {
    searchInput.value = '';
    searchClear.classList.remove('visible');
    searchResultsInfo.classList.remove('visible');
    searchResultsInfo.textContent = '';
    
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach(card => {
        card.style.display = 'block';
        
        const resourceItems = card.querySelectorAll('.resource-item');
        resourceItems.forEach(item => {
            item.style.display = 'block';
        });
        
        // Reset highlights
        const highlighted = card.querySelectorAll('.search-highlight');
        highlighted.forEach(el => {
            const parent = el.parentNode;
            parent.replaceChild(document.createTextNode(el.textContent), el);
            parent.normalize();
        });
    });
    
    categoriesContainer.style.display = 'grid';
    noResults.classList.remove('visible');
    
    // Collapse all categories except first
    const categoryHeaders = document.querySelectorAll('.category-header');
    categoryHeaders.forEach((header, index) => {
        const resourcesList = header.nextElementSibling;
        const toggleIcon = header.querySelector('.toggle-icon');
        
        if (index === 0) {
            resourcesList.classList.add('expanded');
            toggleIcon.classList.add('rotated');
        } else {
            resourcesList.classList.remove('expanded');
            toggleIcon.classList.remove('rotated');
        }
    });
}

// Quick search function for suggestion chips
function searchFor(term) {
    searchInput.value = term;
    searchInput.focus();
    performSearch(term);
    searchClear.classList.add('visible');
}

// Toggle category expansion
function toggleCategory(headerElement) {
    const resourcesList = headerElement.nextElementSibling;
    const toggleIcon = headerElement.querySelector('.toggle-icon');
    
    resourcesList.classList.toggle('expanded');
    toggleIcon.classList.toggle('rotated');
}

// Scroll to category
function scrollToCategory(categoryName) {
    const categoryCard = document.querySelector(`[data-category="${categoryName}"]`);
    if (categoryCard) {
        categoryCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        // Auto-expand the category
        const resourcesList = categoryCard.querySelector('.resources-list');
        const toggleIcon = categoryCard.querySelector('.toggle-icon');
        resourcesList.classList.add('expanded');
        toggleIcon.classList.add('rotated');
        
        // Highlight effect
        const originalShadow = categoryCard.style.boxShadow;
        categoryCard.style.boxShadow = '0 0 30px rgba(102, 126, 234, 0.5)';
        setTimeout(() => {
            categoryCard.style.boxShadow = originalShadow || '0 10px 30px rgba(0,0,0,0.2)';
        }, 2000);
    }
}

// Track resource clicks (optional analytics)
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('resource-link')) {
        console.log('Resource clicked:', e.target.textContent);
        // Add your analytics tracking here
    }
});

// Auto-save search preferences (optional)
const SEARCH_HISTORY_KEY = 'community_hub_searches';
function saveSearchHistory(term) {
    if (term.length < 3) return;
    
    let history = JSON.parse(localStorage.getItem(SEARCH_HISTORY_KEY) || '[]');
    
    // Add to beginning, remove duplicates
    history = [term, ...history.filter(t => t !== term)].slice(0, 5);
    
    localStorage.setItem(SEARCH_HISTORY_KEY, JSON.stringify(history));
}
