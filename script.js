document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        });
    });

    // Form submission
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        const name = formData.get('nombre');
        const email = formData.get('email');
        const message = formData.get('mensaje');

        // Simulate form submission (you can replace this with actual form submission code)
        alert(`Nombre: ${name}\nEmail: ${email}\nMensaje: ${message}`);

        // Reset form
        form.reset();
    });

    // Image gallery hover effect
    const galleryImages = document.querySelectorAll('.memory-gallery img');
    galleryImages.forEach(image => {
        image.addEventListener('mouseenter', () => {
            image.style.transform = 'scale(1.05)';
        });
        image.addEventListener('mouseleave', () => {
            image.style.transform = 'scale(1)';
        });
    });
});
