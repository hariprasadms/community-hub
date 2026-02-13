// Search functionality
const searchInput = document.getElementById('searchInput');
const categoriesContainer = document.getElementById('categoriesContainer');
const noResults = document.getElementById('noResults');

searchInput.addEventListener('input', function(e) {
    const searchTerm = e.target.value.toLowerCase();
    const categoryCards = document.querySelectorAll('.category-card');
    let hasVisibleResults = false;

    categoryCards.forEach(card => {
        const categoryText = card.textContent.toLowerCase();
        if (categoryText.includes(searchTerm)) {
            card.style.display = 'block';
            hasVisibleResults = true;
            
            // Auto-expand matching categories
            if (searchTerm.length > 2) {
                const resourcesList = card.querySelector('.resources-list');
                resourcesList.classList.add('expanded');
                const toggleIcon = card.querySelector('.toggle-icon');
                toggleIcon.classList.add('rotated');
            }
        } else {
            card.style.display = 'none';
        }
    });

    // Show/hide no results message
    if (hasVisibleResults) {
        categoriesContainer.style.display = 'grid';
        noResults.style.display = 'none';
    } else {
        categoriesContainer.style.display = 'none';
        noResults.style.display = 'block';
    }
});

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
        categoryCard.style.boxShadow = '0 0 30px rgba(102, 126, 234, 0.5)';
        setTimeout(() => {
            categoryCard.style.boxShadow = '0 10px 30px rgba(0,0,0,0.2)';
        }, 2000);
    }
}

// Auto-expand first category on load
window.addEventListener('load', function() {
    const firstCategory = document.querySelector('.category-header');
    if (firstCategory) {
        toggleCategory(firstCategory);
    }
});

// Track analytics (optional - you can add Google Analytics or similar)
document.querySelectorAll('.resource-link').forEach(link => {
    link.addEventListener('click', function() {
        // Optional: Track which resources are most clicked
        console.log('Resource clicked:', this.textContent);
    });
});
