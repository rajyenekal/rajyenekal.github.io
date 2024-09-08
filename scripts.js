document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.sidebar a');
    const sections = document.querySelectorAll('.content-section');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            // Remove active class from all links
            links.forEach(link => link.classList.remove('active'));
            // Add active class to clicked link
            link.classList.add('active');

            // Get the data-section attribute to find the corresponding section
            const sectionToShow = link.getAttribute('data-section');

            // Hide all sections
            sections.forEach(section => section.classList.remove('active'));
            // Show the correct section
            document.getElementById(sectionToShow).classList.add('active');
        });
    });
});
