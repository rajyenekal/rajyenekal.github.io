document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.content-section');

    // Function to handle navigation clicks
    const handleNavigation = (event) => {
        event.preventDefault();

        // Remove active class from all links and sections
        navLinks.forEach(link => link.classList.remove('active'));
        sections.forEach(section => section.classList.remove('active'));

        // Add active class to the clicked link and corresponding section
        const targetSection = document.querySelector(event.target.getAttribute('href'));
        event.target.classList.add('active');
        targetSection.classList.add('active');
    };

    // Add click event listener to each navigation link
    navLinks.forEach(link => link.addEventListener('click', handleNavigation));

    // Set default active section
    const defaultLink = document.querySelector('.nav-link.active');
    if (defaultLink) {
        defaultLink.click();
    }
});
