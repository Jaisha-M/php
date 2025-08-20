<?php
/**
 * Core Functions for Bruwrite Website
 */

/**
 * Sanitize input data
 */
function sanitizeInput($data) {
    return htmlspecialchars(strip_tags(trim($data)));
}

/**
 * Validate email address
 */
function validateEmail($email) {
    return filter_var($email, FILTER_VALIDATE_EMAIL);
}

/**
 * Get client IP address
 */
function getClientIP() {
    if (!empty($_SERVER['HTTP_CLIENT_IP'])) {
        return $_SERVER['HTTP_CLIENT_IP'];
    } elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
        return $_SERVER['HTTP_X_FORWARDED_FOR'];
    } else {
        return $_SERVER['REMOTE_ADDR'];
    }
}

/**
 * Send email notification
 */
function sendEmailNotification($to, $subject, $message, $headers = '') {
    if (empty($headers)) {
        $headers = "From: " . SMTP_USERNAME . "\r\n";
        $headers .= "Reply-To: " . SMTP_USERNAME . "\r\n";
        $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
        $headers .= "X-Mailer: PHP/" . phpversion();
    }
    
    return mail($to, $subject, $message, $headers);
}

/**
 * Handle Contact Form Submission
 */
function handleContactForm($db, $data) {
    try {
        // Sanitize inputs
        $name = sanitizeInput($data['name']);
        $email = sanitizeInput($data['email']);
        $subject = sanitizeInput($data['subject'] ?? '');
        $message = sanitizeInput($data['message']);
        
        // Validate required fields
        if (empty($name) || empty($email) || empty($message)) {
            $_SESSION['error'] = "Please fill in all required fields.";
            return false;
        }
        
        // Validate email
        if (!validateEmail($email)) {
            $_SESSION['error'] = "Please enter a valid email address.";
            return false;
        }
        
        // Insert into database
        $sql = "INSERT INTO contact_submissions (name, email, subject, message, ip_address, user_agent) 
                VALUES (?, ?, ?, ?, ?, ?)";
        
        $stmt = $db->prepare($sql);
        $result = $stmt->execute([
            $name,
            $email,
            $subject,
            $message,
            getClientIP(),
            $_SERVER['HTTP_USER_AGENT'] ?? ''
        ]);
        
        if ($result) {
            // Send email notification to admin
            $emailSubject = "New Contact Form Submission from " . $name;
            $emailMessage = "
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> {$name}</p>
            <p><strong>Email:</strong> {$email}</p>
            <p><strong>Subject:</strong> {$subject}</p>
            <p><strong>Message:</strong></p>
            <p>{$message}</p>
            <p><strong>Submitted:</strong> " . date('Y-m-d H:i:s') . "</p>
            <p><strong>IP Address:</strong> " . getClientIP() . "</p>
            ";
            
            sendEmailNotification(ADMIN_EMAIL, $emailSubject, $emailMessage);
            
            // Send auto-reply to user
            $replySubject = "Thank you for contacting Bruwrite";
            $replyMessage = "
            <h2>Thank you for contacting us!</h2>
            <p>Hi {$name},</p>
            <p>We've received your message and will get back to you within 24 hours.</p>
            <p>Our team is excited to help you transform your career!</p>
            <br>
            <p>Best regards,<br>The Bruwrite Team</p>
            ";
            
            sendEmailNotification($email, $replySubject, $replyMessage);
            
            $_SESSION['success'] = "Thank you for your message! We'll get back to you within 24 hours.";
            return true;
        } else {
            $_SESSION['error'] = "Sorry, there was an error sending your message. Please try again.";
            return false;
        }
        
    } catch (Exception $e) {
        error_log("Contact form error: " . $e->getMessage());
        $_SESSION['error'] = "Sorry, there was an error processing your request. Please try again.";
        return false;
    }
}

/**
 * Handle Consultation Booking Form
 */
function handleConsultationBooking($db, $data) {
    try {
        // Sanitize inputs
        $fullName = sanitizeInput($data['full_name']);
        $email = sanitizeInput($data['email']);
        $phone = sanitizeInput($data['phone']);
        $currentPosition = sanitizeInput($data['current_position'] ?? '');
        $yearsExperience = sanitizeInput($data['years_experience'] ?? '');
        $targetRole = sanitizeInput($data['target_role'] ?? '');
        $biggestChallenge = sanitizeInput($data['biggest_challenge'] ?? '');
        $preferredTime = sanitizeInput($data['preferred_time'] ?? '');
        $selectedPlan = sanitizeInput($data['selected_plan'] ?? '');
        
        // Validate required fields
        if (empty($fullName) || empty($email) || empty($phone)) {
            $_SESSION['error'] = "Please fill in all required fields.";
            return false;
        }
        
        // Validate email
        if (!validateEmail($email)) {
            $_SESSION['error'] = "Please enter a valid email address.";
            return false;
        }
        
        // Insert into database
        $sql = "INSERT INTO consultation_bookings 
                (full_name, email, phone, current_position, years_experience, target_role, 
                 biggest_challenge, preferred_time, selected_plan, ip_address, user_agent) 
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        
        $stmt = $db->prepare($sql);
        $result = $stmt->execute([
            $fullName,
            $email,
            $phone,
            $currentPosition,
            $yearsExperience,
            $targetRole,
            $biggestChallenge,
            $preferredTime,
            $selectedPlan,
            getClientIP(),
            $_SERVER['HTTP_USER_AGENT'] ?? ''
        ]);
        
        if ($result) {
            // Send email notification to admin
            $emailSubject = "New Consultation Booking from " . $fullName;
            $emailMessage = "
            <h2>New Consultation Booking</h2>
            <p><strong>Name:</strong> {$fullName}</p>
            <p><strong>Email:</strong> {$email}</p>
            <p><strong>Phone:</strong> {$phone}</p>
            <p><strong>Current Position:</strong> {$currentPosition}</p>
            <p><strong>Years of Experience:</strong> {$yearsExperience}</p>
            <p><strong>Target Role:</strong> {$targetRole}</p>
            <p><strong>Selected Plan:</strong> {$selectedPlan}</p>
            <p><strong>Preferred Call Time:</strong> {$preferredTime}</p>
            <p><strong>Biggest Challenge:</strong></p>
            <p>{$biggestChallenge}</p>
            <p><strong>Submitted:</strong> " . date('Y-m-d H:i:s') . "</p>
            <p><strong>IP Address:</strong> " . getClientIP() . "</p>
            ";
            
            sendEmailNotification(ADMIN_EMAIL, $emailSubject, $emailMessage);
            
            // Send confirmation to user
            $replySubject = "Your Consultation Call is Booked!";
            $replyMessage = "
            <h2>Congratulations on taking the first step!</h2>
            <p>Hi {$fullName},</p>
            <p>We've received your consultation request and our team is already preparing for your call.</p>
            
            <h3>What happens next?</h3>
            <ul>
                <li>Our senior resume writer will contact you within 24 hours</li>
                <li>We'll schedule your 30-minute strategy call at your preferred time</li>
                <li>Come prepared to discuss your career goals and achievements</li>
                <li>We'll create a custom plan for your resume transformation</li>
            </ul>
            
            <p><strong>Your Details:</strong></p>
            <p>Selected Plan: {$selectedPlan}<br>
            Preferred Time: {$preferredTime}<br>
            Phone: {$phone}</p>
            
            <p>Get ready to transform your career!</p>
            <br>
            <p>Best regards,<br>The Bruwrite Team</p>
            ";
            
            sendEmailNotification($email, $replySubject, $replyMessage);
            
            $_SESSION['success'] = "Perfect! Your consultation is booked. We'll contact you within 24 hours to schedule your call.";
            return true;
        } else {
            $_SESSION['error'] = "Sorry, there was an error booking your consultation. Please try again.";
            return false;
        }
        
    } catch (Exception $e) {
        error_log("Consultation booking error: " . $e->getMessage());
        $_SESSION['error'] = "Sorry, there was an error processing your request. Please try again.";
        return false;
    }
}

/**
 * Get recent contact submissions for admin dashboard
 */
function getRecentContacts($db, $limit = 10) {
    try {
        $sql = "SELECT * FROM contact_submissions ORDER BY submitted_at DESC LIMIT ?";
        $stmt = $db->prepare($sql);
        $stmt->execute([$limit]);
        return $stmt->fetchAll();
    } catch (Exception $e) {
        error_log("Error fetching contacts: " . $e->getMessage());
        return [];
    }
}

/**
 * Get recent consultation bookings for admin dashboard
 */
function getRecentConsultations($db, $limit = 10) {
    try {
        $sql = "SELECT * FROM consultation_bookings ORDER BY submitted_at DESC LIMIT ?";
        $stmt = $db->prepare($sql);
        $stmt->execute([$limit]);
        return $stmt->fetchAll();
    } catch (Exception $e) {
        error_log("Error fetching consultations: " . $e->getMessage());
        return [];
    }
}

/**
 * Update submission status
 */
function updateSubmissionStatus($db, $table, $id, $status) {
    try {
        $sql = "UPDATE {$table} SET status = ? WHERE id = ?";
        $stmt = $db->prepare($sql);
        return $stmt->execute([$status, $id]);
    } catch (Exception $e) {
        error_log("Error updating status: " . $e->getMessage());
        return false;
    }
}

/**
 * Get statistics for admin dashboard
 */
function getDashboardStats($db) {
    try {
        $stats = [];
        
        // Total contacts
        $stmt = $db->query("SELECT COUNT(*) as total FROM contact_submissions");
        $stats['total_contacts'] = $stmt->fetch()['total'];
        
        // Total consultations
        $stmt = $db->query("SELECT COUNT(*) as total FROM consultation_bookings");
        $stats['total_consultations'] = $stmt->fetch()['total'];
        
        // New contacts today
        $stmt = $db->query("SELECT COUNT(*) as total FROM contact_submissions WHERE DATE(submitted_at) = CURDATE()");
        $stats['contacts_today'] = $stmt->fetch()['total'];
        
        // New consultations today
        $stmt = $db->query("SELECT COUNT(*) as total FROM consultation_bookings WHERE DATE(submitted_at) = CURDATE()");
        $stats['consultations_today'] = $stmt->fetch()['total'];
        
        return $stats;
        
    } catch (Exception $e) {
        error_log("Error fetching stats: " . $e->getMessage());
        return [
            'total_contacts' => 0,
            'total_consultations' => 0,
            'contacts_today' => 0,
            'consultations_today' => 0
        ];
    }
}
?>