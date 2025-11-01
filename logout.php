<?php
// Start the session to ensure we can access the session data
session_start();

// Unset all session variables associated with the current session
$_SESSION = array();

// If it's desired to kill the session, also delete the session cookie.
// Note: This effectively ends the session on the client's browser.
if (ini_get("session.use_cookies")) {
    $params = session_get_cookie_params();
    setcookie(session_name(), '', time() - 42000,
        $params["path"], $params["domain"],
        $params["secure"], $params["httponly"]
    );
}

// Finally, destroy the session on the server
session_destroy();

// Redirect the user back to the login page (or any public page)
header("location: login.html");
exit;
?>
