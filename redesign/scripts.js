/**
 * HELIOTROPE IMAGINAL - MAIN JAVASCRIPT
 * Handles modal interactions, mobile navigation, and smooth scrolling
 */

// ===================================
// MODAL FUNCTIONALITY
// ===================================

const modal = document.getElementById('waitlistModal');
const modalOverlay = document.getElementById('modalOverlay');
const modalClose = document.getElementById('modalClose');

// All buttons that should open the modal
const modalTriggers = [
    document.getElementById('headerWaitlistBtn'),
    document.getElementById('heroWaitlistBtn'),
    document.getElementById('finalWaitlistBtn'),
    ...document.querySelectorAll('.workshop-cta'),
    ...document.querySelectorAll('.pricing-cta[class*="btn-primary"]'),
    ...document.querySelectorAll('.waitlist-link')
];

// Function to open modal
function openModal() {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

// Function to close modal
function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = ''; // Restore scrolling
}

// Add click event to all trigger buttons
modalTriggers.forEach(trigger => {
    if (trigger) {
        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            openModal();
        });
    }
});

// Close modal when clicking the X button
if (modalClose) {
    modalClose.addEventListener('click', closeModal);
}

// Close modal when clicking the overlay
if (modalOverlay) {
    modalOverlay.addEventListener('click', closeModal);
}

// Close modal when pressing ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});

// ===================================
// MOBILE NAVIGATION
// ===================================

const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const mainNav = document.getElementById('mainNav');

if (mobileMenuToggle && mainNav) {
    mobileMenuToggle.addEventListener('click', () => {
        mainNav.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');

        // Animate hamburger icon
        const spans = mobileMenuToggle.querySelectorAll('span');
        if (mobileMenuToggle.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            spans[0].style.transform = '';
            spans[1].style.opacity = '1';
            spans[2].style.transform = '';
        }
    });

    // Close mobile menu when clicking a nav link
    const navLinks = mainNav.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                mainNav.classList.remove('active');
                mobileMenuToggle.classList.remove('active');

                // Reset hamburger icon
                const spans = mobileMenuToggle.querySelectorAll('span');
                spans[0].style.transform = '';
                spans[1].style.opacity = '1';
                spans[2].style.transform = '';
            }
        });
    });
}

// ===================================
// SMOOTH SCROLLING FOR ANCHOR LINKS
// ===================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');

        // Skip if it's just "#" (used for modal triggers)
        if (href === '#') {
            return;
        }

        e.preventDefault();
        const target = document.querySelector(href);

        if (target) {
            const headerOffset = 80; // Height of fixed header
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===================================
// STICKY HEADER ON SCROLL
// ===================================

const header = document.querySelector('.header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    // Add shadow when scrolled
    if (currentScroll > 10) {
        header.style.boxShadow = '0 4px 8px rgba(0,0,0,0.12)';
    } else {
        header.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
    }

    lastScroll = currentScroll;
});

// ===================================
// FORM VALIDATION (if needed later)
// ===================================

// This section is reserved for any form validation logic
// that might be needed for contact forms, etc.

// ===================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ===================================

// Fade in elements as they come into view
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements that should animate in
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.feature-card, .workshop-card, .testimonial-card, .pricing-card');

    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// ===================================
// UTILITY FUNCTIONS
// ===================================

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (mainNav && mobileMenuToggle) {
        const isClickInsideNav = mainNav.contains(e.target);
        const isClickOnToggle = mobileMenuToggle.contains(e.target);

        if (!isClickInsideNav && !isClickOnToggle && mainNav.classList.contains('active')) {
            mainNav.classList.remove('active');
            mobileMenuToggle.classList.remove('active');

            // Reset hamburger icon
            const spans = mobileMenuToggle.querySelectorAll('span');
            spans[0].style.transform = '';
            spans[1].style.opacity = '1';
            spans[2].style.transform = '';
        }
    }
});

// ===================================
// CONSOLE MESSAGE
// ===================================

console.log('🌻 Heliotrope Imaginal - Website loaded successfully');
console.log('Empowering Human Capabilities for the AI Era');
