document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.sidebar ul li a');
    const sections = document.querySelectorAll('.content-section');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            // Remove active class from all links and sections
            links.forEach(l => l.classList.remove('active'));
            sections.forEach(section => section.classList.remove('active'));

            // Add active class to clicked link and corresponding section
            const sectionId = link.getAttribute('data-section');
            document.getElementById(sectionId).classList.add('active');
            link.classList.add('active');
        });
    });
});
