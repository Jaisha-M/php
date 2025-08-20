<?php
/**
 * Database Configuration
 * 
 * IMPORTANT: Update these credentials when deploying to your cPanel hosting
 * 
 * In cPanel:
 * 1. Go to MySQL Databases
 * 2. Create a new database (e.g., 'your_username_bruwrite')
 * 3. Create a MySQL user and password
 * 4. Add the user to the database with ALL PRIVILEGES
 * 5. Update the constants below with your actual credentials
 */

// Database Configuration - UPDATE THESE FOR YOUR HOSTING
define('DB_HOST', 'localhost');                    // Usually 'localhost' for cPanel
define('DB_NAME', 'bruwrite_db');                 // Your database name (e.g., 'your_username_bruwrite')
define('DB_USER', 'root');                        // Your MySQL username
define('DB_PASS', '');                            // Your MySQL password
define('DB_CHARSET', 'utf8mb4');

// Email Configuration for Contact Forms
define('SMTP_HOST', 'mail.yourdomain.com');       // Your cPanel mail server
define('SMTP_PORT', 587);                         // Usually 587 for TLS or 465 for SSL
define('SMTP_USERNAME', 'hello@yourdomain.com');  // Your email address
define('SMTP_PASSWORD', 'your_email_password');   // Your email password
define('ADMIN_EMAIL', 'hello@bruwrite.com');      // Where form submissions should be sent

// Site Configuration
define('SITE_URL', 'https://yourdomain.com');     // Your website URL
define('SITE_NAME', 'Bruwrite');

/**
 * Get Database Connection
 * 
 * @return PDO|null Database connection or null on failure
 */
function getDBConnection() {
    try {
        $dsn = "mysql:host=" . DB_HOST . ";dbname=" . DB_NAME . ";charset=" . DB_CHARSET;
        
        $options = [
            PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            PDO::ATTR_EMULATE_PREPARES   => false,
        ];
        
        $pdo = new PDO($dsn, DB_USER, DB_PASS, $options);
        
        return $pdo;
        
    } catch (PDOException $e) {
        error_log("Database connection failed: " . $e->getMessage());
        
        // In production, don't show database errors to users
        if (defined('DEBUG') && DEBUG) {
            die("Database connection failed: " . $e->getMessage());
        } else {
            die("Website temporarily unavailable. Please try again later.");
        }
    }
}

/**
 * Initialize Database Tables
 * Run this once after setting up your database credentials
 */
function initializeDatabaseTables() {
    $db = getDBConnection();
    
    if (!$db) {
        return false;
    }
    
    try {
        // Contact submissions table
        $contactTable = "
        CREATE TABLE IF NOT EXISTS contact_submissions (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL,
            subject VARCHAR(500),
            message TEXT NOT NULL,
            ip_address VARCHAR(45),
            user_agent TEXT,
            submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            status ENUM('new', 'read', 'replied') DEFAULT 'new',
            INDEX idx_email (email),
            INDEX idx_submitted_at (submitted_at),
            INDEX idx_status (status)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci";
        
        $db->exec($contactTable);
        
        // Consultation bookings table
        $consultationTable = "
        CREATE TABLE IF NOT EXISTS consultation_bookings (
            id INT AUTO_INCREMENT PRIMARY KEY,
            full_name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL,
            phone VARCHAR(50) NOT NULL,
            current_position VARCHAR(255),
            years_experience VARCHAR(50),
            target_role VARCHAR(255),
            biggest_challenge TEXT,
            preferred_time VARCHAR(50),
            selected_plan VARCHAR(100),
            ip_address VARCHAR(45),
            user_agent TEXT,
            submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            status ENUM('new', 'contacted', 'scheduled', 'completed', 'cancelled') DEFAULT 'new',
            notes TEXT,
            INDEX idx_email (email),
            INDEX idx_phone (phone),
            INDEX idx_submitted_at (submitted_at),
            INDEX idx_status (status)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci";
        
        $db->exec($consultationTable);
        
        // Admin users table (for admin panel access)
        $adminTable = "
        CREATE TABLE IF NOT EXISTS admin_users (
            id INT AUTO_INCREMENT PRIMARY KEY,
            username VARCHAR(100) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password_hash VARCHAR(255) NOT NULL,
            full_name VARCHAR(255),
            last_login TIMESTAMP NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            is_active BOOLEAN DEFAULT TRUE,
            INDEX idx_username (username),
            INDEX idx_email (email)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci";
        
        $db->exec($adminTable);
        
        // Create default admin user (username: admin, password: admin123)
        // IMPORTANT: Change this password immediately after setup!
        $defaultAdmin = "
        INSERT IGNORE INTO admin_users (username, email, password_hash, full_name) 
        VALUES ('admin', 'admin@bruwrite.com', ?, 'Administrator')";
        
        $stmt = $db->prepare($defaultAdmin);
        $stmt->execute([password_hash('admin123', PASSWORD_DEFAULT)]);
        
        return true;
        
    } catch (PDOException $e) {
        error_log("Database initialization failed: " . $e->getMessage());
        return false;
    }
}

// Uncomment the line below and run this file once to initialize your database tables
// initializeDatabaseTables();
?>