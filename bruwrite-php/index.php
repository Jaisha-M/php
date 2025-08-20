<?php
session_start();

// Include configuration
require_once 'config/database.php';
require_once 'includes/functions.php';

// Get database connection
$db = getDBConnection();

// Handle form submissions
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_POST['action'])) {
        switch ($_POST['action']) {
            case 'contact':
                handleContactForm($db, $_POST);
                break;
            case 'consultation':
                handleConsultationBooking($db, $_POST);
                break;
        }
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bruwrite - Professional Resume Writing Service | ATS-Optimized Resumes</title>
    <meta name="description" content="Professional resume writing service for mid-to-senior professionals. ATS-optimized resumes that get interview calls. 80%+ success rate guaranteed.">
    <meta name="keywords" content="professional resume writing, ATS optimized CV, resume service UAE, resume writing Philippines, New Zealand resume, US resume service, Canada CV writing">
    
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    
    <!-- CSS -->
    <link rel="stylesheet" href="assets/css/style.css">
    <link rel="stylesheet" href="assets/css/responsive.css">
    
    <!-- Favicon -->
    <link rel="icon" type="image/x-icon" href="assets/images/favicon.ico">
</head>
<body>
    <!-- Header -->
    <?php include 'includes/header.php'; ?>

    <!-- Main Content -->
    <main>
        <!-- Hero Section -->
        <section id="hero" class="hero-section">
            <div class="hero-bg"></div>
            <div class="hero-decorations">
                <div class="decoration decoration-1"></div>
                <div class="decoration decoration-2"></div>
            </div>
            
            <div class="container">
                <div class="hero-content">
                    <!-- Trust Indicators -->
                    <div class="trust-indicators">
                        <div class="trust-item">
                            <span class="icon">✓</span>
                            <span>ATS-Optimized</span>
                        </div>
                        <div class="trust-item">
                            <span class="icon">⭐</span>
                            <span>5-Star Rated</span>
                        </div>
                        <div class="trust-item">
                            <span class="icon">✓</span>
                            <span>Interview Guarantee</span>
                        </div>
                    </div>

                    <!-- Main Headline -->
                    <div class="hero-text">
                        <h1 class="hero-title">
                            Land Your Dream Job With a
                            <span class="highlight">Resume That Actually Works</span>
                        </h1>
                        
                        <p class="hero-subtitle">
                            Stop getting rejected by robots. Our human writers craft resumes that beat ATS systems AND impress hiring managers. No templates. No AI. Just results.
                        </p>
                    </div>

                    <!-- CTA Buttons -->
                    <div class="hero-buttons">
                        <button class="btn btn-primary" onclick="scrollToSection('pricing')">
                            Get My Resume Rewritten
                            <span class="arrow">→</span>
                        </button>
                        <button class="btn btn-secondary" onclick="scrollToSection('portfolio')">
                            See Our Work
                        </button>
                    </div>

                    <!-- Social Proof -->
                    <div class="social-proof">
                        <p class="social-text">Trusted by professionals at</p>
                        <div class="company-logos">
                            <span>Mahindra</span>
                            <span>NESR Energy</span>
                            <span>Centryply</span>
                            <span>Amirthanjan</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Pain Points Section -->
        <section id="pain" class="pain-section">
            <div class="section-bg"></div>
            <div class="container">
                <div class="section-header">
                    <h2 class="section-title">
                        Here's the brutal truth about
                        <span class="text-red">job hunting today</span>
                    </h2>
                    <p class="section-subtitle">
                        Most people don't even know their resume is the problem.
                    </p>
                </div>

                <div class="pain-grid">
                    <div class="pain-card">
                        <div class="pain-icon">📄</div>
                        <h3>AI Templates Are Career Suicide</h3>
                        <p>Hiring managers see the same ChatGPT-generated resumes hundreds of times per day. Yours needs to stand out, not blend in with the robot crowd.</p>
                    </div>
                    <div class="pain-card">
                        <div class="pain-icon">⚠️</div>
                        <h3>ATS Systems Are Resume Graveyards</h3>
                        <p>75% of resumes never reach human eyes because they're not optimized for the robots that screen them first. Are you making the cut?</p>
                    </div>
                    <div class="pain-card">
                        <div class="pain-icon">❌</div>
                        <h3>You're Underselling Your Wins</h3>
                        <p>Most professionals don't know how to translate their day-to-day work into compelling achievements that make hiring managers think 'I need this person on my team.'</p>
                    </div>
                </div>

                <div class="warning-banner">
                    <span class="warning-icon">⚠️</span>
                    <span>Your dream job is slipping away while you wait</span>
                </div>
            </div>
        </section>

        <!-- Portfolio Section -->
        <section id="portfolio" class="portfolio-section">
            <div class="section-bg"></div>
            <div class="container">
                <div class="section-header">
                    <h2 class="section-title">
                        See What Professional<br>
                        Resume Writing Looks Like
                    </h2>
                    <p class="section-subtitle">
                        Real resumes we've created for real professionals. Each one landing interviews within weeks.
                    </p>
                </div>

                <div class="portfolio-carousel">
                    <div class="portfolio-card active">
                        <div class="portfolio-content">
                            <div class="resume-preview">
                                <div class="resume-frame">
                                    <iframe src="https://customer-assets.emergentagent.com/job_resumepro-1/artifacts/6rsyilq6_new%20%283%29_senior%20level.pdf#toolbar=0" class="resume-pdf"></iframe>
                                </div>
                                <div class="resume-badge">Senior</div>
                            </div>
                            <div class="portfolio-info">
                                <h3>Senior Level Resume</h3>
                                <p>Executive resume for 7+ years experience</p>
                                <ul class="features-list">
                                    <li>✓ ATS-Optimized Format</li>
                                    <li>✓ Industry-Specific Keywords</li>
                                    <li>✓ Achievement-Focused Content</li>
                                </ul>
                                <div class="portfolio-buttons">
                                    <a href="https://customer-assets.emergentagent.com/job_resumepro-1/artifacts/6rsyilq6_new%20%283%29_senior%20level.pdf" target="_blank" class="btn btn-primary">
                                        📥 View Full Resume
                                    </a>
                                    <button class="btn btn-secondary" onclick="scrollToSection('pricing')">
                                        Get One Like This
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Solutions Section -->
        <section id="services" class="solutions-section">
            <div class="section-bg"></div>
            <div class="container">
                <div class="section-header">
                    <h2 class="section-title">
                        Why We're Different From<br>
                        Every Other Resume Service
                    </h2>
                    <p class="section-subtitle">
                        We don't just reformat your resume. We completely reimagine how your story gets told.
                    </p>
                </div>

                <div class="solutions-grid">
                    <div class="solution-card">
                        <div class="solution-icon">👥</div>
                        <h3>Human Writers Who Get It</h3>
                        <p>Our certified writers understand your industry AND know exactly what ATS systems are looking for. It's the perfect marriage of human insight and technical know-how.</p>
                    </div>
                    <div class="solution-card">
                        <div class="solution-icon">🔍</div>
                        <h3>Keywords That Actually Work</h3>
                        <p>We don't just sprinkle in buzzwords. We research your target companies and roles to find the exact phrases that'll get your resume flagged for 'definitely interview.'</p>
                    </div>
                    <div class="solution-card">
                        <div class="solution-icon">🎯</div>
                        <h3>Results You Can Bank On</h3>
                        <p>80% of our clients land interviews within two weeks. The other 20%? They get their money back or a complete rewrite. Your success is literally our reputation.</p>
                    </div>
                </div>

                <div class="section-cta">
                    <button class="btn btn-primary" onclick="scrollToSection('process')">
                        See How We Do It
                        <span class="arrow">→</span>
                    </button>
                </div>
            </div>
        </section>

        <!-- Process Section -->
        <section id="process" class="process-section">
            <div class="section-bg"></div>
            <div class="container">
                <div class="section-header">
                    <h2 class="section-title">
                        How We Transform Your Career Story
                    </h2>
                    <p class="section-subtitle">
                        Our proven 5-step process turns your work history into interview gold.
                    </p>
                </div>

                <div class="process-timeline">
                    <div class="process-line"></div>
                    
                    <div class="process-step">
                        <div class="step-number">1</div>
                        <div class="step-content">
                            <div class="step-icon">📞</div>
                            <h3>We Talk, You Share</h3>
                            <p>Hop on a 30-minute call with your dedicated writer. Share your goals, achievements, and dream role.</p>
                            <span class="step-duration">30 min</span>
                        </div>
                    </div>

                    <div class="process-step reverse">
                        <div class="step-number">2</div>
                        <div class="step-content">
                            <div class="step-icon">✏️</div>
                            <h3>We Write, You Relax</h3>
                            <p>Our expert crafts your story using industry keywords and ATS-beating strategies. No templates here!</p>
                            <span class="step-duration">1-2 days</span>
                        </div>
                    </div>

                    <div class="process-step">
                        <div class="step-number">3</div>
                        <div class="step-content">
                            <div class="step-icon">🔄</div>
                            <h3>You Review, We Perfect</h3>
                            <p>Not happy with something? We'll revise it. Again and again. Until you're 100% satisfied.</p>
                            <span class="step-duration">Up to 7 days</span>
                        </div>
                    </div>

                    <div class="process-step reverse">
                        <div class="step-number">4</div>
                        <div class="step-content">
                            <div class="step-icon">📥</div>
                            <h3>You Download, You Apply</h3>
                            <p>Get your polished resume in multiple formats. Ready to impress both robots and humans.</p>
                            <span class="step-duration">Same day</span>
                        </div>
                    </div>

                    <div class="process-step">
                        <div class="step-number">5</div>
                        <div class="step-content">
                            <div class="step-icon">🏆</div>
                            <h3>You Interview, You Win</h3>
                            <p>Watch the interview invitations roll in. Your phone won't stop ringing!</p>
                            <span class="step-duration">Within weeks</span>
                        </div>
                    </div>
                </div>

                <div class="success-stat">
                    <span class="stat-icon">🏆</span>
                    <span>Most clients get their first interview call within 8 days</span>
                </div>
            </div>
        </section>

        <!-- Testimonials Section -->
        <section id="testimonials" class="testimonials-section">
            <div class="section-bg"></div>
            <div class="container">
                <div class="section-header">
                    <h2 class="section-title">
                        Real People,<br>
                        <span class="text-white">Real Results</span>
                    </h2>
                    <p class="section-subtitle">
                        Don't just take our word for it. Here's what happens when we rewrite your story.
                    </p>
                </div>

                <div class="testimonial-carousel">
                    <div class="testimonial-card active">
                        <div class="quote-icon">"</div>
                        <blockquote class="testimonial-text">
                            I was skeptical about hiring someone to rewrite my resume, but wow! Within 10 days of submitting my new resume, I had three interview invitations. The difference was incredible - they made my experience sound so much more impressive without lying or exaggerating.
                        </blockquote>
                        <div class="testimonial-author">
                            <div class="author-avatar">R.K.</div>
                            <div class="author-info">
                                <h4>Rajesh Kumar</h4>
                                <p>Supply Chain Manager</p>
                                <span>Mahindra Group</span>
                            </div>
                            <div class="testimonial-result">
                                <div class="rating">⭐⭐⭐⭐⭐</div>
                                <span class="result-text">Senior Manager role with 40% salary increase</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Stats -->
                <div class="stats-grid">
                    <div class="stat-item">
                        <div class="stat-number">80%+</div>
                        <p>Interview calls within 2 weeks</p>
                    </div>
                    <div class="stat-item">
                        <div class="stat-number">500+</div>
                        <p>Career transformations</p>
                    </div>
                    <div class="stat-item">
                        <div class="stat-number">48hrs</div>
                        <p>Average turnaround time</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Pricing Section -->
        <section id="pricing" class="pricing-section">
            <div class="section-bg"></div>
            <div class="container">
                <div class="section-header">
                    <h2 class="section-title">
                        Choose Your<br>
                        Career Transformation
                    </h2>
                    <p class="section-subtitle">
                        Honest pricing. Real results. Pick the package that fits where you are in your career journey.
                    </p>
                </div>

                <div class="pricing-grid">
                    <!-- Basic Plan -->
                    <div class="pricing-card">
                        <div class="plan-header">
                            <h3 class="plan-name">Fresh Start</h3>
                            <p class="plan-level">0–3 years (New to workforce)</p>
                            <div class="plan-price">
                                <span class="price">$19</span>
                                <span class="currency">USD</span>
                            </div>
                        </div>
                        <ul class="plan-features">
                            <li>✓ One killer ATS-optimised Resume</li>
                            <li>✓ Heart-to-heart call with your writer</li>
                            <li>✓ Unlimited tweaks for 7 days</li>
                            <li>✓ 80%+ ATS Score Promise</li>
                            <li>✓ Ready in 2–4 days</li>
                            <li>✓ Entry-level positioning expertise</li>
                        </ul>
                        <button class="btn btn-plan" onclick="openConsultationModal('fresh-start')">
                            Start with Fresh Start →
                        </button>
                    </div>

                    <!-- Premium Plan -->
                    <div class="pricing-card popular">
                        <div class="popular-badge">⭐ Most Popular Choice</div>
                        <div class="plan-header">
                            <h3 class="plan-name">Career Booster</h3>
                            <p class="plan-level">3–7 years (Rising professional)</p>
                            <div class="plan-price">
                                <span class="price">$29</span>
                                <span class="currency">USD</span>
                            </div>
                        </div>
                        <ul class="plan-features">
                            <li>✓ One powerful ATS-optimised Resume</li>
                            <li>✓ Strategy call with senior writer</li>
                            <li>✓ Unlimited revisions for 7 days</li>
                            <li>✓ 80%+ ATS Score Promise</li>
                            <li>✓ Rush delivery in 2–4 days</li>
                            <li>✓ LinkedIn headline optimization</li>
                            <li>✓ Achievement quantification focus</li>
                        </ul>
                        <button class="btn btn-plan btn-popular" onclick="openConsultationModal('career-booster')">
                            Start with Career Booster →
                        </button>
                    </div>

                    <!-- Executive Plan -->
                    <div class="pricing-card">
                        <div class="plan-header">
                            <h3 class="plan-name">Executive Edge</h3>
                            <p class="plan-level">7+ years (Senior leader)</p>
                            <div class="plan-price">
                                <span class="price">$35</span>
                                <span class="currency">USD</span>
                            </div>
                        </div>
                        <ul class="plan-features">
                            <li>✓ One premium ATS-optimised Resume</li>
                            <li>✓ VIP consultation with expert writer</li>
                            <li>✓ Unlimited perfecting for 7 days</li>
                            <li>✓ 80%+ ATS Score Promise</li>
                            <li>✓ Priority delivery in 2–4 days</li>
                            <li>✓ Executive summary mastery</li>
                            <li>✓ Leadership story crafting</li>
                            <li>✓ C-suite positioning strategy</li>
                        </ul>
                        <button class="btn btn-plan" onclick="openConsultationModal('executive-edge')">
                            Start with Executive Edge →
                        </button>
                    </div>
                </div>

                <!-- Guarantee -->
                <div class="guarantee-banner">
                    <h3>Our No-BS Guarantee</h3>
                    <p>No interview calls within 30 days? We'll rewrite it for free or give you every penny back.</p>
                    <div class="guarantee-features">
                        <span>✓ 100% Satisfaction Promise</span>
                        <span>✓ 30-Day Money-Back</span>
                        <span>✓ Free Do-Overs</span>
                    </div>
                </div>
            </div>
        </section>

        <!-- Final CTA Section -->
        <section id="contact" class="final-cta-section">
            <div class="section-bg"></div>
            <div class="cta-decorations">
                <div class="decoration decoration-1"></div>
                <div class="decoration decoration-2"></div>
            </div>
            
            <div class="container">
                <div class="cta-content">
                    <h2 class="cta-title">
                        Your Next Role<br>
                        <span>is Waiting</span>
                    </h2>
                    
                    <p class="cta-subtitle">
                        Stop letting generic resumes hold you back. Join hundreds of professionals who've transformed their careers with Bruwrite.
                    </p>

                    <!-- Trust Indicators -->
                    <div class="cta-trust">
                        <div class="trust-item">
                            <span class="icon">🕐</span>
                            <span>2-4 Day Delivery</span>
                        </div>
                        <div class="trust-item">
                            <span class="icon">🛡️</span>
                            <span>Interview Guarantee</span>
                        </div>
                        <div class="trust-item">
                            <span class="icon">🏆</span>
                            <span>80%+ Success Rate</span>
                        </div>
                    </div>

                    <!-- CTA Buttons -->
                    <div class="cta-buttons">
                        <button class="btn btn-primary" onclick="openConsultationModal()">
                            Book My Consultation
                            <span class="arrow">→</span>
                        </button>
                        <button class="btn btn-secondary" onclick="scrollToSection('testimonials')">
                            Read More Reviews
                        </button>
                    </div>

                    <!-- Contact Info -->
                    <div class="contact-info">
                        <h3>Ready to Get Started?</h3>
                        <p>Schedule your consultation call today and take the first step toward landing your dream job.</p>
                        <div class="contact-details">
                            <span>📧 hello@bruwrite.com</span>
                            <span>📞 Available 9 AM - 6 PM GMT</span>
                            <span>🌍 Serving professionals globally</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <!-- Footer -->
    <?php include 'includes/footer.php'; ?>

    <!-- Consultation Modal -->
    <div id="consultationModal" class="modal">
        <div class="modal-content">
            <span class="close">&times;</span>
            <h2>Book Your Consultation Call</h2>
            <p>Ready to transform your career? Fill out the form below and we'll contact you within 24 hours.</p>
            
            <form id="consultationForm" method="POST">
                <input type="hidden" name="action" value="consultation">
                <input type="hidden" name="selected_plan" id="selectedPlan">
                
                <div class="form-group">
                    <label for="full_name">Full Name *</label>
                    <input type="text" id="full_name" name="full_name" required>
                </div>
                
                <div class="form-row">
                    <div class="form-group">
                        <label for="email">Email Address *</label>
                        <input type="email" id="email" name="email" required>
                    </div>
                    <div class="form-group">
                        <label for="phone">Phone Number *</label>
                        <input type="tel" id="phone" name="phone" required>
                    </div>
                </div>
                
                <div class="form-row">
                    <div class="form-group">
                        <label for="current_position">Current Position</label>
                        <input type="text" id="current_position" name="current_position" placeholder="e.g., Marketing Manager">
                    </div>
                    <div class="form-group">
                        <label for="years_experience">Years of Experience</label>
                        <select id="years_experience" name="years_experience">
                            <option value="">Select...</option>
                            <option value="0-1">0-1 years</option>
                            <option value="2-3">2-3 years</option>
                            <option value="4-7">4-7 years</option>
                            <option value="8-15">8-15 years</option>
                            <option value="15+">15+ years</option>
                        </select>
                    </div>
                </div>
                
                <div class="form-group">
                    <label for="target_role">Target Role/Industry</label>
                    <input type="text" id="target_role" name="target_role" placeholder="What role are you targeting?">
                </div>
                
                <div class="form-group">
                    <label for="biggest_challenge">Biggest Job Search Challenge</label>
                    <textarea id="biggest_challenge" name="biggest_challenge" rows="3" placeholder="What's your biggest frustration with job hunting right now?"></textarea>
                </div>
                
                <div class="form-group">
                    <label for="preferred_time">Preferred Call Time</label>
                    <select id="preferred_time" name="preferred_time">
                        <option value="">Select preferred time...</option>
                        <option value="morning">Morning (9 AM - 12 PM GMT)</option>
                        <option value="afternoon">Afternoon (12 PM - 5 PM GMT)</option>
                        <option value="evening">Evening (5 PM - 8 PM GMT)</option>
                    </select>
                </div>
                
                <button type="submit" class="btn btn-primary">
                    Schedule My Call
                    <span class="arrow">→</span>
                </button>
            </form>
        </div>
    </div>

    <!-- Contact Modal -->
    <div id="contactModal" class="modal">
        <div class="modal-content">
            <span class="close">&times;</span>
            <h2>Get In Touch</h2>
            <p>Have questions? Send us a message and we'll get back to you within 24 hours.</p>
            
            <form id="contactForm" method="POST">
                <input type="hidden" name="action" value="contact">
                
                <div class="form-row">
                    <div class="form-group">
                        <label for="contact_name">Name *</label>
                        <input type="text" id="contact_name" name="name" required>
                    </div>
                    <div class="form-group">
                        <label for="contact_email">Email *</label>
                        <input type="email" id="contact_email" name="email" required>
                    </div>
                </div>
                
                <div class="form-group">
                    <label for="contact_subject">Subject</label>
                    <input type="text" id="contact_subject" name="subject" placeholder="How can we help you?">
                </div>
                
                <div class="form-group">
                    <label for="contact_message">Message *</label>
                    <textarea id="contact_message" name="message" rows="4" required placeholder="Tell us more about what you need..."></textarea>
                </div>
                
                <button type="submit" class="btn btn-primary">
                    Send Message
                    <span class="arrow">→</span>
                </button>
            </form>
        </div>
    </div>

    <!-- Success/Error Messages -->
    <?php if (isset($_SESSION['success'])): ?>
        <div class="alert alert-success">
            <?php echo $_SESSION['success']; unset($_SESSION['success']); ?>
        </div>
    <?php endif; ?>

    <?php if (isset($_SESSION['error'])): ?>
        <div class="alert alert-error">
            <?php echo $_SESSION['error']; unset($_SESSION['error']); ?>
        </div>
    <?php endif; ?>

    <!-- JavaScript -->
    <script src="assets/js/main.js"></script>
</body>
</html>