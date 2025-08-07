document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Mobile menu toggle logic
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    mobileMenuBtn.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
    });

    // Form submission handler (for demonstration)
    const form = document.getElementById('reservation-form');
    const formMessage = document.getElementById('form-message');

        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            formMessage.classList.add('hidden');
                
            // Show a temporary loading or success message
            formMessage.textContent = 'Submitting your reservation...';
            formMessage.classList.remove('text-red-500', 'hidden');
            formMessage.classList.add('text-gray-600', 'block');

            // Simulate an API call delay
            await new Promise(resolve => setTimeout(resolve, 1500));

            // Get form data and log to console
            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());
            console.log('Reservation Data:', data);
                
            // Display success message
            formMessage.textContent = 'Thank you! Your reservation request has been sent.';
            formMessage.classList.remove('text-gray-600');
            formMessage.classList.add('text-green-600');
                
            // Reset the form
            form.reset();
        });
});