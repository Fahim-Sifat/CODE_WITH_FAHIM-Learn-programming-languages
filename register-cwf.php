<?php
$firstname = $_POST['first_name'];
$lastname = $_POST['last_name'];
$email = $_POST['email'];
$password = $_POST['password'];
$cpassword = $_POST['cpassword'];
$gender = $_POST['gender'];
$nationality = $_POST['nationality'];
$dateofbirth = $_POST['dateofbirth'];

//Database Connection
$conn = new mysqli('localhost','root','','cwf-registration');
if($conn->connect_error){
    die('Connection Failed : '.$conn->connect_error);
}else{
    $stmt = $conn->prepare("insert into cwf registration(First Name,Last Name,Email,Password,Confirm Password,Gender,Nationality,Date of birth) values(?,?,?,?,?,?,?,?)");
    $stmt->bind_param("sssssssi",$firstname,$lastname,$email,$password,$cpassword,$gender,$nationality,$dateofbirth);
    $stmt->execute();
    echo "Registration Successful.";
    $stmt->close();
    $conn->close();
}



?>