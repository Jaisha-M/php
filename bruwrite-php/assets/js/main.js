/**
 * Bruwrite Website JavaScript
 * Modern ES6+ code for interactive functionality
 */

// =====================
// UTILITY FUNCTIONS
// =====================

/**
 * Debounce function to limit function calls
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Smooth scroll to element
 */
function scrollToSection(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        const headerHeight = document.querySelector('.main-header').offsetHeight;
        const elementPosition = element.offsetTop - headerHeight;
        
        window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
        });
    }
}

/**
 * Check if element is in viewport
 */
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// =====================
// HEADER FUNCTIONALITY
// =====================

class HeaderManager {
    constructor() {
        this.header = document.querySelector('.main-header');
        this.scrollThreshold = 50;
        this.init();
    }

    init() {
        this.handleScroll();
        window.addEventListener('scroll', debounce(() => this.handleScroll(), 10));
    }

    handleScroll() {
        if (window.scrollY > this.scrollThreshold) {
            this.header.classList.add('scrolled');
        } else {
            this.header.classList.remove('scrolled');
        }
    }
}

// =====================
// MOBILE MENU
// =====================

class MobileMenu {
    constructor() {
        this.mobileNav = document.getElementById('mobileNav');
        this.hamburger = document.querySelector('.hamburger');
        this.isOpen = false;
        this.init();
    }

    init() {
        // Add click listeners to mobile nav links
        const mobileLinks = document.querySelectorAll('.mobile-nav-link');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => this.close());
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (this.isOpen && !e.target.closest('.mobile-menu-toggle') && !e.target.closest('.mobile-nav')) {
                this.close();
            }
        });

        // Close menu on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isOpen) {
                this.close();
            }
        });
    }

    toggle() {
        this.isOpen ? this.close() : this.open();
    }

    open() {
        this.mobileNav.classList.add('active');
        this.hamburger.classList.add('active');
        this.isOpen = true;
        document.body.style.overflow = 'hidden';
    }

    close() {
        this.mobileNav.classList.remove('active');
        this.hamburger.classList.remove('active');
        this.isOpen = false;
        document.body.style.overflow = '';
    }
}

// =====================
// MODAL FUNCTIONALITY
// =====================

class ModalManager {
    constructor() {
        this.modals = {
            consultation: document.getElementById('consultationModal'),
            contact: document.getElementById('contactModal')
        };
        this.init();
    }

    init() {
        // Close modal when clicking close button or outside modal
        Object.values(this.modals).forEach(modal => {
            if (!modal) return;

            const closeBtn = modal.querySelector('.close');
            if (closeBtn) {
                closeBtn.addEventListener('click', () => this.close(modal));
            }

            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    this.close(modal);
                }
            });
        });

        // Close modal on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeAll();
            }
        });

        // Form submissions
        this.initForms();
    }

    open(modalType, selectedPlan = '') {
        const modal = this.modals[modalType];
        if (!modal) return;

        // Set selected plan if opening consultation modal
        if (modalType === 'consultation' && selectedPlan) {
            const planInput = modal.querySelector('#selectedPlan');
            if (planInput) {
                planInput.value = selectedPlan;
            }
        }

        modal.classList.add('active');
        document.body.style.overflow = 'hidden';

        // Focus first input
        setTimeout(() => {
            const firstInput = modal.querySelector('input, textarea');
            if (firstInput) {
                firstInput.focus();
            }
        }, 100);
    }

    close(modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }

    closeAll() {
        Object.values(this.modals).forEach(modal => {
            if (modal && modal.classList.contains('active')) {
                this.close(modal);
            }
        });
    }

    initForms() {
        // Form validation and submission handling
        const forms = document.querySelectorAll('#consultationForm, #contactForm');
        
        forms.forEach(form => {
            form.addEventListener('submit', (e) => {
                if (!this.validateForm(form)) {
                    e.preventDefault();
                    return false;
                }
                
                // Show loading state
                const submitBtn = form.querySelector('button[type="submit"]');
                const originalText = submitBtn.innerHTML;
                submitBtn.innerHTML = 'Sending...';
                submitBtn.disabled = true;

                // Reset after form submission (let PHP handle the actual submission)
                setTimeout(() => {
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                }, 2000);
            });

            // Real-time validation
            const inputs = form.querySelectorAll('input, textarea, select');
            inputs.forEach(input => {
                input.addEventListener('blur', () => this.validateField(input));
                input.addEventListener('input', () => this.clearFieldError(input));
            });
        });
    }

    validateForm(form) {
        let isValid = true;
        const requiredFields = form.querySelectorAll('[required]');

        requiredFields.forEach(field => {
            if (!this.validateField(field)) {
                isValid = false;
            }
        });

        return isValid;
    }

    validateField(field) {
        const value = field.value.trim();
        let isValid = true;
        let message = '';

        // Check if required field is empty
        if (field.hasAttribute('required') && !value) {
            isValid = false;
            message = 'This field is required';
        }
        // Email validation
        else if (field.type === 'email' && value && !this.isValidEmail(value)) {
            isValid = false;
            message = 'Please enter a valid email address';
        }
        // Phone validation (basic)
        else if (field.type === 'tel' && value && value.length < 10) {
            isValid = false;
            message = 'Please enter a valid phone number';
        }

        this.showFieldError(field, message);
        return isValid;
    }

    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    showFieldError(field, message) {
        this.clearFieldError(field);

        if (message) {
            field.classList.add('error');
            const errorDiv = document.createElement('div');
            errorDiv.className = 'field-error';
            errorDiv.textContent = message;
            field.parentNode.appendChild(errorDiv);
        }
    }

    clearFieldError(field) {
        field.classList.remove('error');
        const existingError = field.parentNode.querySelector('.field-error');
        if (existingError) {
            existingError.remove();
        }
    }
}

// =====================
// CAROUSEL FUNCTIONALITY
// =====================

class CarouselManager {
    constructor() {
        this.currentSlide = 0;
        this.autoPlayInterval = null;
        this.autoPlayDelay = 6000;
        this.init();
    }

    init() {
        // Portfolio carousel (if needed)
        this.initPortfolioCarousel();
        
        // Testimonial carousel
        this.initTestimonialCarousel();
    }

    initPortfolioCarousel() {
        // Portfolio carousel logic here
        const portfolioCards = document.querySelectorAll('.portfolio-card');
        if (portfolioCards.length > 1) {
            // Add carousel controls if multiple portfolio items
            this.addCarouselControls('portfolio');
        }
    }

    initTestimonialCarousel() {
        const testimonialCards = document.querySelectorAll('.testimonial-card');
        if (testimonialCards.length > 1) {
            this.addCarouselControls('testimonial');
            this.startAutoPlay();
        }
    }

    addCarouselControls(type) {
        // Add navigation dots and controls
        const container = document.querySelector(`.${type}-carousel`);
        if (!container) return;

        const controlsHTML = `
            <div class="carousel-controls">
                <button class="carousel-btn prev" onclick="carousel.previousSlide('${type}')">
                    <span>←</span>
                </button>
                <div class="carousel-dots">
                    ${this.generateDots(type)}
                </div>
                <button class="carousel-btn next" onclick="carousel.nextSlide('${type}')">
                    <span>→</span>
                </button>
            </div>
        `;

        container.insertAdjacentHTML('afterend', controlsHTML);
    }

    generateDots(type) {
        const items = document.querySelectorAll(`.${type}-card`);
        let dotsHTML = '';
        
        items.forEach((_, index) => {
            dotsHTML += `
                <button class="carousel-dot ${index === 0 ? 'active' : ''}" 
                        onclick="carousel.goToSlide('${type}', ${index})">
                </button>
            `;
        });

        return dotsHTML;
    }

    nextSlide(type) {
        const items = document.querySelectorAll(`.${type}-card`);
        this.currentSlide = (this.currentSlide + 1) % items.length;
        this.updateSlide(type);
    }

    previousSlide(type) {
        const items = document.querySelectorAll(`.${type}-card`);
        this.currentSlide = (this.currentSlide - 1 + items.length) % items.length;
        this.updateSlide(type);
    }

    goToSlide(type, index) {
        this.currentSlide = index;
        this.updateSlide(type);
    }

    updateSlide(type) {
        const items = document.querySelectorAll(`.${type}-card`);
        const dots = document.querySelectorAll('.carousel-dot');

        items.forEach((item, index) => {
            item.classList.toggle('active', index === this.currentSlide);
        });

        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === this.currentSlide);
        });
    }

    startAutoPlay() {
        this.autoPlayInterval = setInterval(() => {
            this.nextSlide('testimonial');
        }, this.autoPlayDelay);
    }

    stopAutoPlay() {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
        }
    }
}

// =====================
// SCROLL ANIMATIONS
// =====================

class ScrollAnimations {
    constructor() {
        this.animatedElements = new Set();
        this.init();
    }

    init() {
        this.observeElements();
        window.addEventListener('scroll', debounce(() => this.checkVisibleElements(), 100));
    }

    observeElements() {
        const elements = document.querySelectorAll(`
            .pain-card,
            .solution-card,
            .process-step,
            .testimonial-card,
            .pricing-card,
            .stat-item
        `);

        elements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        });

        this.checkVisibleElements();
    }

    checkVisibleElements() {
        const elements = document.querySelectorAll(`
            .pain-card,
            .solution-card,
            .process-step,
            .testimonial-card,
            .pricing-card,
            .stat-item
        `);

        elements.forEach((el, index) => {
            if (this.animatedElements.has(el)) return;

            if (isInViewport(el) || this.isPartiallyVisible(el)) {
                setTimeout(() => {
                    el.style.opacity = '1';
                    el.style.transform = 'translateY(0)';
                    this.animatedElements.add(el);
                }, index * 100);
            }
        });
    }

    isPartiallyVisible(el) {
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        return rect.top < windowHeight && rect.bottom > 0;
    }
}

// =====================
// PERFORMANCE OPTIMIZATIONS
// =====================

class PerformanceManager {
    constructor() {
        this.init();
    }

    init() {
        // Lazy load images
        this.lazyLoadImages();
        
        // Preload critical resources
        this.preloadResources();
        
        // Optimize scroll events
        this.optimizeScrollEvents();
    }

    lazyLoadImages() {
        const images = document.querySelectorAll('img[data-src]');
        
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                        imageObserver.unobserve(img);
                    }
                });
            });

            images.forEach(img => imageObserver.observe(img));
        } else {
            // Fallback for older browsers
            images.forEach(img => {
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
            });
        }
    }

    preloadResources() {
        // Preload important fonts
        const fontLinks = [
            'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@300;400;500;600;700&display=swap',
            'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap'
        ];

        fontLinks.forEach(href => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.as = 'style';
            link.href = href;
            document.head.appendChild(link);
        });
    }

    optimizeScrollEvents() {
        // Use passive event listeners for better performance
        window.addEventListener('scroll', debounce(() => {
            // Consolidated scroll handling
        }, 16), { passive: true });
    }
}

// =====================
// GLOBAL FUNCTIONS (for inline onclick handlers)
// =====================

window.scrollToSection = scrollToSection;

window.toggleMobileMenu = function() {
    mobileMenu.toggle();
};

window.closeMobileMenu = function() {
    mobileMenu.close();
};

window.openConsultationModal = function(selectedPlan = '') {
    modalManager.open('consultation', selectedPlan);
};

window.openContactModal = function() {
    modalManager.open('contact');
};

// =====================
// INITIALIZATION
// =====================

// Global instances
let headerManager, mobileMenu, modalManager, carousel, scrollAnimations, performanceManager;

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Bruwrite website loaded successfully!');
    
    // Initialize managers
    headerManager = new HeaderManager();
    mobileMenu = new MobileMenu();
    modalManager = new ModalManager();
    carousel = new CarouselManager();
    scrollAnimations = new ScrollAnimations();
    performanceManager = new PerformanceManager();

    // Remove loading states
    document.body.classList.remove('loading');
    
    // Auto-dismiss alerts after 5 seconds
    setTimeout(() => {
        const alerts = document.querySelectorAll('.alert');
        alerts.forEach(alert => {
            alert.style.animation = 'slideOutRight 0.3s ease forwards';
            setTimeout(() => alert.remove(), 300);
        });
    }, 5000);

    // Google Analytics (if needed)
    if (typeof gtag !== 'undefined') {
        gtag('config', 'GA_MEASUREMENT_ID', {
            page_title: 'Bruwrite - Professional Resume Writing',
            page_location: window.location.href
        });
    }
});

// Handle page visibility changes
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        carousel?.stopAutoPlay();
    } else {
        carousel?.startAutoPlay();
    }
});

// Handle online/offline states
window.addEventListener('online', function() {
    console.log('✅ Connection restored');
});

window.addEventListener('offline', function() {
    console.log('⚠️ Connection lost');
});

// Add CSS for field errors
const style = document.createElement('style');
style.textContent = `
    .form-group input.error,
    .form-group textarea.error,
    .form-group select.error {
        border-color: #ef4444;
        box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
    }
    
    .field-error {
        color: #ef4444;
        font-size: 0.875rem;
        margin-top: 0.25rem;
        display: block;
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);