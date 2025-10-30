<?php

// Line 1: Start with a check to see if the form has been submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // --- Start of POST Data Handling ---
    // Safe assignment of POST variables using the null coalescing operator (??)
    // This prevents "Undefined array key" warnings if a field is missing.
    $firstname  = $_POST['first_name'] ?? '';
    $lastname   = $_POST['last_name'] ?? '';
    $email      = $_POST['email'] ?? '';
    $password   = $_POST['password'] ?? '';
    $cpassword  = $_POST['cpassword'] ?? '';
    $gender     = $_POST['gender'] ?? '';
    $nationality = $_POST['nationality'] ?? '';
    $dateofbirth = $_POST['dateofbirth'] ?? '';
    // --- End of POST Data Handling ---

    // Database Connection (Line 12 - This is where the Fatal Error occurs)
    $conn = new mysqli('localhost', 'root', '', 'cwf-registration');

    if ($conn->connect_error) {
        die("Connection Failed : " . $conn->connect_error);
    } else {
        // Prepare SQL statement (Line 15)
        $stmt = $conn->prepare("INSERT INTO cwf_registration (FirstName, LastName, Email, Password, Confirm Password, Gender, Nationality, DateOfBirth) VALUES (?, ?, ?, ?, ?, ?, ?, ?)");
        
        // Bind parameters (Line 17)
        // Ensure the types 'ssssssss' are correct (8 's' for 8 string/varchar parameters)
        $stmt->bind_param("ssssssss", $firstname, $lastname, $email, $password, $cpassword, $gender, $nationality, $dateofbirth);
        
        // Execute and Close (Line 20)
        $stmt->execute();
        echo "Registration Successful.";
        $stmt->close();
        $conn->close();
    }
}
// If the script is loaded without a POST request, it will do nothing and show no errors.

?>