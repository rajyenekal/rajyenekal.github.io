// scripts.js

// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Simple lightbox functionality
document.querySelectorAll('.lightbox').forEach(item => {
    item.addEventListener('click', event => {
        const imgSrc = item.getAttribute('src');
        const lightbox = document.createElement('div');
        lightbox.classList.add('lightbox-overlay');
        lightbox.innerHTML = `<img src="${imgSrc}" class="lightbox-img" onclick="this.parentElement.remove()">`;
        document.body.appendChild(lightbox);
    });
});

// Add a class when an element is in the viewport
document.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    const viewportHeight = window.innerHeight;

    elements.forEach(element => {
        const { top } = element.getBoundingClientRect();
        if (top < viewportHeight - 100) {
            element.classList.add('visible');
        }
    });
});

// Example form validation (if you have a form)
// document.querySelector('form').addEventListener('submit', function(event) {
//     const name = document.querySelector('#name').value;
//     const email = document.querySelector('#email').value;
    
//     if (name === '' || email === '') {
//         alert('Please fill out all fields.');
//         event.preventDefault(); // Prevent form submission
//     }
// });
