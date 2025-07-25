<?php
$host = "localhost";      // or your DB host
$dbname = "pizzalab";     // your DB name
$username = "root";       // your DB username
$password = "";           // your DB password

// Connect to the database
$conn = new mysqli($host, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// Get data from form
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$date = $_POST['date'];
$time = $_POST['time'];
$message = $_POST['message'];

// Insert into database
$sql = "INSERT INTO reservations (name, email, phone, date, time, message)
        VALUES ('$name', '$email', '$phone', '$date', '$time', '$message')";

if ($conn->query($sql) === TRUE) {
  echo "Reservation submitted successfully!";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
