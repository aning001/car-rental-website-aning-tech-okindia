/* OK India Car Rentals - Global Interactivity */

document.addEventListener('DOMContentLoaded', () => {
    // Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    if (navbar) {
        const isAlwaysScrolled = navbar.hasAttribute('data-no-transparent');
        
        const handleScroll = () => {
            if (window.scrollY > 20 || isAlwaysScrolled) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check
    }

    // Mobile Menu Toggle
    const toggleMenu = (show) => {
        const mobileMenu = document.getElementById('mobile-menu');
        if (!mobileMenu) return;
        
        if (show) {
            mobileMenu.classList.add('active');
            document.body.style.overflow = 'hidden';
        } else {
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    };

    // Use event delegation for menu triggers to be more robust
    document.addEventListener('click', (e) => {
        const target = e.target.closest('#menu-btn, .menu-btn-trigger');
        if (target) {
            e.preventDefault();
            toggleMenu(true);
        }

        const closeTarget = e.target.closest('#close-menu');
        if (closeTarget) {
            e.preventDefault();
            toggleMenu(false);
        }
    });

    // Close menu when clicking a link
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu) {
        const menuLinks = mobileMenu.querySelectorAll('a');
        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                toggleMenu(false);
            });
        });
    }

    // FAQ Accordion
    const faqBtns = document.querySelectorAll('.faq-btn');
    faqBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const item = btn.parentElement;
            const isActive = item.classList.contains('active');
            
            // Close all items
            document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
            
            // Open clicked item if it wasn't active
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });

    // Fleet Filtering
    const filterBtns = document.querySelectorAll('.filter-btn');
    const carCards = document.querySelectorAll('.car-card');

    if (filterBtns.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Update active button state
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const category = btn.getAttribute('data-category');

                carCards.forEach(card => {
                    if (category === 'All' || card.getAttribute('data-category') === category) {
                        card.style.display = 'flex';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }
});
