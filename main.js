import './style.css'

console.log('Shilly Pharma App Loaded');

/* =========================================
   1. THEME TOGGLE
   ========================================= */
const themeToggleBtn = document.getElementById('theme-toggle');
const rootElement = document.documentElement;

// Initialize Theme
const savedTheme = localStorage.getItem('theme');
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (savedTheme) {
  rootElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);
} else if (systemPrefersDark) {
  // Optional: Auto-set to dark if system prefers, otherwise default is light (no attr)
  // rootElement.setAttribute('data-theme', 'dark'); 
  // updateThemeIcon('dark');
}

if (themeToggleBtn) {
  themeToggleBtn.addEventListener('click', () => {
    const currentTheme = rootElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    rootElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
  });
}

function updateThemeIcon(theme) {
  if (!themeToggleBtn) return;
  
  const sun = themeToggleBtn.querySelector('.sun-icon');
  const moon = themeToggleBtn.querySelector('.moon-icon');
  
  if (theme === 'dark') {
      sun.style.display = 'block';
      moon.style.display = 'none';
  } else {
      sun.style.display = 'none';
      moon.style.display = 'block';
  }
}

/* =========================================
   2. MOBILE MENU
   ========================================= */
const menuToggle = document.getElementById('menu-toggle');
const navLinksContainer = document.querySelector('.nav-links'); // Using class query

if (menuToggle && navLinksContainer) {
  menuToggle.addEventListener('click', () => {
    navLinksContainer.classList.toggle('active');
    
    // Toggle Icon
    const isOpen = navLinksContainer.classList.contains('active');
    updateMenuIcon(isOpen);
  });
}

// Close menu when clicking items
const navItems = document.querySelectorAll('.nav-links a');
navItems.forEach(link => {
    link.addEventListener('click', () => {
        if (navLinksContainer) {
            navLinksContainer.classList.remove('active');
            updateMenuIcon(false);
        }
    });
});

function updateMenuIcon(isOpen) {
    if (!menuToggle) return;
    menuToggle.innerHTML = isOpen
      ? '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>'
      : '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>';
}


/* =========================================
   3. PRODUCT FILTERING (Catalog)
   ========================================= */
const filterPills = document.querySelectorAll('.filter-pill');
const productSections = document.querySelectorAll('.product-section');
const productCards = document.querySelectorAll('.product-card');
const searchInput = document.getElementById('product-search');

if (filterPills.length > 0) {
    
    // Filter by Category
    filterPills.forEach(pill => {
        pill.addEventListener('click', () => {
            // Remove active from all
            filterPills.forEach(p => p.classList.remove('active'));
            // Add active to clicked
            pill.classList.add('active');
            
            const filterValue = pill.getAttribute('data-filter');
            
            // If "All Products" is clicked, reset search too?
            // "Add 'Clear' state or All Products resets." behavior
            if (filterValue === 'all' && searchInput) {
                searchInput.value = '';
                applyFilters('all', '');
            } else {
                applyFilters(filterValue, searchInput ? searchInput.value.toLowerCase() : '');
            }
        });
    });

    // Search Filter
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const searchValue = e.target.value.toLowerCase();
            const activePill = document.querySelector('.filter-pill.active');
            const activeFilter = activePill ? activePill.getAttribute('data-filter') : 'all';
            
            applyFilters(activeFilter, searchValue);
        });
    }
}

function applyFilters(category, searchText) {
    // Logic:
    // 1. If Category == 'all', show all sections, but filter cards inside them by search
    // 2. If Category != 'all', hide other sections, show target section, filter cards by search
    
    productSections.forEach(section => {
        const sectionId = section.id;
        
        // Determine Visibility based on Category
        let isSectionVisible = (category === 'all' || category === sectionId);
        
        if (isSectionVisible) {
            section.style.display = 'block';
            
            // Now filter cards within this visible section
            const cards = section.querySelectorAll('.product-card');
            let hasVisibleCards = false;
            
            cards.forEach(card => {
                const title = card.querySelector('h3')?.innerText.toLowerCase() || '';
                const desc = card.querySelector('p')?.innerText.toLowerCase() || '';
                const isMatch = title.includes(searchText) || desc.includes(searchText);
                
                if (isMatch) {
                    card.parentElement.style.display = 'block'; // Ensure grid item is visible? (Card is the grid item usually)
                    card.style.display = 'flex'; // Card display
                    hasVisibleCards = true;
                } else {
                    card.style.display = 'none';
                }
            });
            
            // If Text Search hides all cards in a section, should we hide the section title?
            // Optional Polish: Hide section if no cards match search
             if (!hasVisibleCards && searchText.length > 0) {
                 section.style.display = 'none';
             }
             
        } else {
            section.style.display = 'none';
        }
    });
}
