<?php
// Start the session at the very top of the script
session_start();

// =======================================================================
// 1. DATABASE CONNECTION SETUP (Confirmed InfinityFree Credentials)
// =======================================================================

// Hostname confirmed from your InfinityFree panel
define('DB_SERVER', 'sql100.infinityfree.com'); 
// Username confirmed from your InfinityFree panel
define('DB_USERNAME', 'if0_30307453');         
// DB_PASSWORD: The password you set for your database user
define('DB_PASSWORD', 'FSSIFAT02112004'); // <-- REPLACE THIS WITH YOUR ACTUAL PASSWORD!
// Database Name confirmed from your InfinityFree panel
define('DB_NAME', 'if0_30307453_cwf_db');       

// Attempt to connect to MySQL database
$conn = new mysqli(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_NAME);

// Check connection
if ($conn->connect_error) {
    // Fatal error if connection fails (likely a password/host issue)
    die("ERROR: Could not connect to the database. Check your DB credentials. " . $conn->connect_error);
}

// =======================================================================
// 2. LOGIN LOGIC
// =======================================================================

$errors = [];

// Check if the form was submitted (based on the 'login_submit' name in login.html)
if (isset($_POST['login_submit'])) {
    
    // Collect and sanitize data
    $email = trim($_POST['email']);
    $password = $_POST['password']; 

    if (empty($email) || empty($password)) {
        $errors[] = "Please fill in both email and password.";
    }

    if (empty($errors)) {
        
        // Prepare a SELECT statement using Prepared Statements for security
        $sql = "SELECT id, first_name, password FROM users WHERE email = ?";
        
        if ($stmt = $conn->prepare($sql)) {
            
            $stmt->bind_param("s", $param_email);
            $param_email = $email;
            
            if ($stmt->execute()) {
                $stmt->store_result();
                
                // Check if email exists
                if ($stmt->num_rows == 1) {
                    
                    // Bind the result variables
                    $stmt->bind_result($id, $first_name, $hashed_password);
                    
                    if ($stmt->fetch()) {
                        
                        // Verify the password against the stored hash securely
                        if (password_verify($password, $hashed_password)) {
                            
                            // Password is correct, start a new secure session
                            session_regenerate_id(true); 
                            $_SESSION['loggedin'] = true;
                            $_SESSION['id'] = $id;
                            $_SESSION['first_name'] = $first_name;
                            
                            // Success: Redirect to the secure dashboard page
                            header("location: index.html");
                            exit;
                            
                        } else {
                            // Incorrect password
                            $errors[] = "The password you entered is not valid.";
                        }
                    }
                } else {
                    // Email not found
                    $errors[] = "No account found with that email address.";
                }
            } else {
                 $errors[] = "Database query failed. Please try again.";
            }

            $stmt->close();
        } else {
            $errors[] = "Error preparing statement: " . $conn->error;
        }
    }
} else {
    // Prevent direct access to the script
    $errors[] = "Access Denied: Please use the login form.";
}

$conn->close();

// Display any accumulated errors to the user
if (!empty($errors)) {
    echo "<h2>Login Failed!</h2>";
    echo "<ul>";
    foreach ($errors as $error) {
        echo "<li>" . htmlspecialchars($error) . "</li>";
    }
    echo "</ul>";
    echo "<p><a href='login.html'>Go back to login</a></p>";
}

?>
