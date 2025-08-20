<header id="main-header" class="main-header">
    <nav class="navbar">
        <div class="container">
            <div class="navbar-content">
                <!-- Logo -->
                <div class="navbar-brand">
                    <a href="<?php echo SITE_URL; ?>">
                        <img src="https://customer-assets.emergentagent.com/job_dc024922-a41d-4ef4-98f5-941e7821bf50/artifacts/dg6ixgbu_Bruwrite%20Logo%201-25.png" 
                             alt="Bruwrite Logo" 
                             class="logo">
                    </a>
                </div>

                <!-- Desktop Navigation -->
                <div class="navbar-nav desktop-nav">
                    <a href="#services" class="nav-link" onclick="scrollToSection('services')">Services</a>
                    <a href="#portfolio" class="nav-link" onclick="scrollToSection('portfolio')">Portfolio</a>
                    <a href="#testimonials" class="nav-link" onclick="scrollToSection('testimonials')">Reviews</a>
                    <a href="#pricing" class="nav-link" onclick="scrollToSection('pricing')">Pricing</a>
                    <button class="btn btn-primary btn-sm" onclick="openConsultationModal()">
                        Get Started
                    </button>
                </div>

                <!-- Mobile Menu Toggle -->
                <div class="mobile-menu-toggle">
                    <button class="btn btn-ghost" onclick="toggleMobileMenu()">
                        <span class="hamburger">
                            <span></span>
                            <span></span>
                            <span></span>
                        </span>
                    </button>
                </div>
            </div>

            <!-- Mobile Navigation -->
            <div class="mobile-nav" id="mobileNav">
                <div class="mobile-nav-content">
                    <a href="#services" class="mobile-nav-link" onclick="scrollToSection('services'); closeMobileMenu();">Services</a>
                    <a href="#portfolio" class="mobile-nav-link" onclick="scrollToSection('portfolio'); closeMobileMenu();">Portfolio</a>
                    <a href="#testimonials" class="mobile-nav-link" onclick="scrollToSection('testimonials'); closeMobileMenu();">Reviews</a>
                    <a href="#pricing" class="mobile-nav-link" onclick="scrollToSection('pricing'); closeMobileMenu();">Pricing</a>
                    <button class="btn btn-primary" onclick="openConsultationModal(); closeMobileMenu();">
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    </nav>
</header>