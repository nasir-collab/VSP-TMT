document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // FAQ Accordion logic
    document.querySelectorAll('.faq-question').forEach(item => {
        item.addEventListener('click', () => {
            const faqItem = item.parentElement;

            // Optional: Close other open FAQ items
            // document.querySelectorAll('.faq-item').forEach(otherItem => {
            //     if (otherItem !== faqItem) otherItem.classList.remove('active');
            // });

            faqItem.classList.toggle('active');

            // Animation handling for toggle icons
            const toggle = item.querySelector('.faq-toggle');
            if (toggle) {
                toggle.textContent = faqItem.classList.contains('active') ? '-' : '+';
            }
        });
    });

    // Product Slider Logic
    let currentSlide = 0;
    const productSlider = document.getElementById('productSlider');

    window.moveSlider = (direction) => {
        if (!productSlider) return;

        const totalSlides = productSlider.children.length;
        currentSlide = (currentSlide + direction + totalSlides) % totalSlides;

        Array.from(productSlider.children).forEach((child, index) => {
            const card = child.querySelector('.product-card');
            if (card) {
                card.classList.toggle('active', index === currentSlide);
                if (index === currentSlide) {
                    child.scrollIntoView({
                        behavior: 'smooth',
                        block: 'nearest',
                        inline: 'center'
                    });
                }
            }
        });
    };

    // Mobile Menu Toggle
    const mobileMenu = document.getElementById('mobile-menu');
    const nav = document.querySelector('.nav');

    if (mobileMenu && nav) {
        mobileMenu.addEventListener('click', () => {
            nav.classList.toggle('active');
            mobileMenu.classList.toggle('active');
        });

        // Close menu when a link is clicked
        nav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('active');
                mobileMenu.classList.remove('active');
            });
        });
    }

    // Scroll Header Effect
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.padding = '10px 0';
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
        } else {
            header.style.padding = '15px 0';
            header.style.backgroundColor = '#ffffff';
        }
    });
});
