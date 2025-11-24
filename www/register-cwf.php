<?php

// =======================================================================
// 1. DATABASE CONNECTION SETUP
// =======================================================================

// Define constants for database connection 
// *** IMPORTANT: Replace 'your_db_password' with your actual MySQL root password ***
define('DB_SERVER', 'sql100.infinityfree.com');
define('DB_USERNAME', 'if0_40307453');
define('DB_PASSWORD', 'FSSIFAT02112004'); // <-- CHANGE THIS!
define('DB_NAME', 'if0_40307453_cwf_db');  // Match the database name you created

// Attempt to connect to MySQL database
$conn = new mysqli(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_NAME);

// Check connection
if ($conn->connect_error) {
    // Stop execution and show a generic error message
    die("Registration failed. Could not connect to the database.");
}

// =======================================================================
// 2. DATA COLLECTION AND INITIAL VALIDATION
// =======================================================================

// Check if the form was submitted (the 'submit' button's name)
if (isset($_POST['submit'])) {
    
    // Collect and sanitize data by trimming whitespace
    $first_name  = trim($_POST['first_name']);
    $last_name   = trim($_POST['last_name']);
    $email       = trim($_POST['email']);
    $password    = $_POST['password']; 
    $cpassword   = $_POST['cpassword'];
    
    // NOTE: This assumes you fixed your register.html to give all gender radios the name="gender"
    $gender      = isset($_POST['gender']) ? trim($_POST['gender']) : 'Not specified'; 
    $nationality = trim($_POST['nationality']);
    
    // Array to hold validation errors
    $errors = [];

    // --- Validation Checks ---
    if (empty($first_name) || empty($email) || empty($password) || empty($cpassword) || empty($nationality)) {
        $errors[] = "Please fill in all required fields.";
    }

    if ($password !== $cpassword) {
        $errors[] = "Passwords do not match.";
    }
    
    if (strlen($password) < 8) {
        $errors[] = "Password must be at least 8 characters long.";
    }
    
    // Additional: Basic email format validation
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = "Invalid email format.";
    }

    // --- Check for Existing Email in Database ---
    if (empty($errors)) {
        $sql_check = "SELECT id FROM users WHERE email = ?";
        if ($stmt_check = $conn->prepare($sql_check)) {
            $stmt_check->bind_param("s", $param_email_check);
            $param_email_check = $email;
            
            if ($stmt_check->execute()) {
                $stmt_check->store_result();
                if ($stmt_check->num_rows > 0) {
                    $errors[] = "This email address is already registered.";
                }
            } else {
                 $errors[] = "Database check error. Please try again.";
            }
            $stmt_check->close();
        }
    }
    
    // =======================================================================
    // 3. SECURE PASSWORD HASHING AND INSERTION
    // =======================================================================

    if (empty($errors)) {
        
        // Securely hash the password. password_hash() uses bcrypt by default, 
        // and automatically handles salting, making it safe for storage.
        $hashed_password = password_hash($password, PASSWORD_DEFAULT);

        // SQL Prepared Statement for data insertion (Crucial for preventing SQL Injection)
        $sql_insert = "INSERT INTO users (first_name, last_name, email, password, gender, nationality) VALUES (?, ?, ?, ?, ?, ?)";
        
        // Prepare the SQL statement
        if ($stmt_insert = $conn->prepare($sql_insert)) {
            
            // Bind parameters: 's' for string (6 strings in total)
            $stmt_insert->bind_param("ssssss", $param_fn, $param_ln, $param_email, $param_hash, $param_gender, $param_nationality);
            
            // Set parameter values
            $param_fn          = $first_name;
            $param_ln          = $last_name;
            $param_email       = $email;
            $param_hash        = $hashed_password;
            $param_gender      = $gender;
            $param_nationality = $nationality;
            
            // Attempt to execute the prepared statement
            if ($stmt_insert->execute()) {
                
                // Success message and redirection
                echo "<h2>Registration Successful!</h2>";
                echo "<p>Welcome, " . htmlspecialchars($first_name) . "! Your account has been created.</p>";
                echo "<p><a href='login.html'>Click here to login</a></p>";
                // In a real application, use header() for redirection:
                // header("location: login.html");
                
            } else {
                // Failed insertion
                echo "<h2>Registration Failed!</h2>";
                echo "<p>Error: Could not complete registration. Please contact support.</p>";
            }

            // Close the insertion statement
            $stmt_insert->close();
        } else {
            echo "Error preparing insertion statement: " . $conn->error;
        }
    } else {
        // Output all collected validation errors
        echo "<h2>Registration Errors:</h2>";
        echo "<ul>";
        foreach ($errors as $error) {
            echo "<li>" . $error . "</li>";
        }
        echo "</ul>";
        echo "<p><a href='register.html'>Go back and fix the errors</a></p>";
    }
} else {
    // If someone tries to access this page directly without POST data
    echo "Access Denied: Please use the registration form.";
}

// Close connection
$conn->close();

?>
