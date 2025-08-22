<?php
// Connect to database
$conn = new mysqli('localhost', 'root', '', 'car_rental');

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get form data
$carType = $_POST['carType'];
$color = $_POST['color'];
$days = $_POST['days'];

// Save to database
$sql = "INSERT INTO bookings (carType, color, days) VALUES ('$carType', '$color', '$days')";

if ($conn->query($sql) === TRUE) {
    echo "Booking successful! <a href='../index.html'>Go back</a>";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
