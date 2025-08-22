CREATE DATABASE car_rental;

USE car_rental;

CREATE TABLE bookings (
    id INT AUTO_INCREMENT PRIMARY KEY,
    carType VARCHAR(50),
    color VARCHAR(50),
    days INT
);
