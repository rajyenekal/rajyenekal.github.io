document.addEventListener('DOMContentLoaded', function() {
    // Handle sidebar navigation
    const links = document.querySelectorAll('.sidebar a');
    const sections = document.querySelectorAll('.content .section');

    function changeSection(event) {
        event.preventDefault();
        links.forEach(link => link.classList.remove('active'));
        sections.forEach(section => section.style.display = 'none');

        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).style.display = 'block';
        this.classList.add('active');
    }

    links.forEach(link => {
        link.addEventListener('click', changeSection);
    });

    // Default to About Me section
    document.querySelector('.sidebar a').click();
});
