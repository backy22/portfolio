<?php
$connect = mysqli_connect(
    "localhost",
    "root",
    "root",
    "ayatsuba_mmdd");

if (!$connect)
{
    echo "Error: Unable to connect to MySQL." . PHP_EOL;
    echo "Debugging errno: " . mysqli_connect_errno() . PHP_EOL;
    exit;
}

