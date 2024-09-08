document.addEventListener('DOMContentLoaded', () => {
    // Function to show the selected section and highlight the active menu item
    function showSection(sectionId) {
        // Hide all sections
        const sections = document.querySelectorAll('.content-section');
        sections.forEach(section => {
            section.classList.remove('active');
        });

        // Remove active class from all menu links
        const menuLinks = document.querySelectorAll('.sidebar ul li a');
        menuLinks.forEach(link => {
            link.classList.remove('active');
        });

        // Show the selected section
        const selectedSection = document.getElementById(sectionId);
        if (selectedSection) {
            selectedSection.classList.add('active');
        }

        // Highlight the selected menu item
        const activeLink = document.querySelector(`.sidebar ul li a[data-section="${sectionId}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
    }

    // Add click event listeners to sidebar links
    const links = document.querySelectorAll('.sidebar ul li a');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default anchor behavior
            const sectionId = link.getAttribute('data-section');
            showSection(sectionId);
        });
    });

    // Show the default section on page load
    showSection('about-me');
});
