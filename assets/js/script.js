'use strict';

// Simple Navigation System
document.addEventListener('DOMContentLoaded', function() {
    console.log('Script loaded!');
    
    // Mobile menu functionality
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }
    
    // Get all navigation buttons
    const navButtons = document.querySelectorAll('[data-nav]');
    
    // Get all the pages
    const resumePage = document.querySelector('[data-page="resume"]');
    const projectsPage = document.querySelector('[data-page="projects"]');
    const achievementsPage = document.querySelector('[data-page="achievements"]');
    const leadershipPage = document.querySelector('[data-page="leadership"]');
    const contactPage = document.querySelector('[data-page="contact"]');
    
    // Function to hide all pages
    function hideAllPages() {
        if (resumePage) resumePage.style.display = 'none';
        if (projectsPage) projectsPage.style.display = 'none';
        if (achievementsPage) achievementsPage.style.display = 'none';
        if (leadershipPage) leadershipPage.style.display = 'none';
        if (contactPage) contactPage.style.display = 'none';
    }
    
    // Function to reset all button colors
    function resetButtonColors() {
        navButtons.forEach(btn => {
            btn.classList.remove('text-orange-yellow');
            btn.classList.add('text-gray-300');
        });
    }
    
    // Function to show a page
    function showPage(page) {
        hideAllPages();
        if (page) page.style.display = 'block';
    }
    
    // Function to handle navigation
    function handleNavigation(navType) {
        console.log(navType + ' clicked');
        resetButtonColors();
        
        // Highlight all buttons of this type
        const activeButtons = document.querySelectorAll(`[data-nav="${navType}"]`);
        activeButtons.forEach(btn => {
            btn.classList.remove('text-gray-300');
            btn.classList.add('text-orange-yellow');
        });
        
        // Show appropriate page
        switch(navType) {
            case 'resume':
                showPage(resumePage);
                break;
            case 'projects':
                showPage(projectsPage);
                break;
            case 'achievements':
                showPage(achievementsPage);
                break;
            case 'leadership':
                showPage(leadershipPage); // Leadership shows leadership page
                break;
            case 'contact':
                showPage(contactPage);
                break;
        }
        
        // Close mobile menu
        if (mobileMenu) mobileMenu.classList.add('hidden');
        
        // Scroll to top
        window.scrollTo(0, 0);
    }
    
    // Add event listeners to all navigation buttons
    navButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const navType = this.getAttribute('data-nav');
            handleNavigation(navType);
        });
    });
    
    // Set initial state - show resume page and highlight resume button
    if (resumePage) {
        hideAllPages();
        showPage(resumePage);
        resetButtonColors();
        
        // Highlight resume buttons
        const resumeButtons = document.querySelectorAll('[data-nav="resume"]');
        resumeButtons.forEach(btn => {
            btn.classList.remove('text-gray-300');
            btn.classList.add('text-orange-yellow');
        });
    }
    
    console.log('Navigation setup complete!');
});

