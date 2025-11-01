<?php
// Start the session to access user data
session_start();

// Check if the user is NOT logged in.
// The 'loggedin' session variable is set to true in login-cwf.php upon successful login.
if (!isset($_SESSION['loggedin']) || $_SESSION['loggedin'] !== true) {
    // If the user is not logged in, redirect them back to the login page.
    header("location: login.html");
    exit;
}

// If the user IS logged in, we can safely display the content.
// We use the 'first_name' stored in the session for personalization.
$welcome_name = htmlspecialchars($_SESSION['first_name'] ?? 'User');
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to the Dashboard</title>
    <!-- Simple, clean CSS for the dashboard -->
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f9;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            flex-direction: column;
        }
        .container {
            background-color: #ffffff;
            padding: 40px;
            border-radius: 12px;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
            text-align: center;
            width: 90%;
            max-width: 500px;
        }
        h1 {
            color: #333;
            margin-bottom: 20px;
            font-size: 2em;
        }
        p {
            color: #666;
            font-size: 1.1em;
            margin-bottom: 30px;
        }
        .logout-btn {
            display: inline-block;
            padding: 10px 20px;
            background-color: #d9534f; /* Red color for logout */
            color: white;
            text-decoration: none;
            border-radius: 8px;
            transition: background-color 0.3s ease;
            font-weight: bold;
        }
        .logout-btn:hover {
            background-color: #c9302c;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Welcome, <?php echo $welcome_name; ?>!</h1>
        <p>You have successfully logged into the Code With Fahim application. This is your private dashboard.</p>
        
        <!-- Link to log out -->
        <a href="logout.php" class="logout-btn">Log Out</a>
    </div>
</body>
</html>
