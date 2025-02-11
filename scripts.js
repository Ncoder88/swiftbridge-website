// scripts.js
window.addEventListener('scroll', function() {
    const servicesSection = document.getElementById('services');
    const projectsSection = document.getElementById('projects');

    // Add fade-in effect when scrolled into view
    if (isInViewport(servicesSection)) {
        servicesSection.classList.add('fade-in');
    }

    if (isInViewport(projectsSection)) {
        projectsSection.classList.add('fade-in');
    }
});

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
