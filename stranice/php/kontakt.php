<?php
$servername = "localhost";
$username = "root";      
$password = "";          
$dbname = "sajt";

$conn = new mysqli($servername, $username, $password, $dbname);


if ($conn->connect_error) {
    die("Greška u konekciji: " . $conn->connect_error);
}


$ime = $_POST['firstName'];
$prezime = $_POST['lastName'];
$broj = $_POST['number'];
$poruka = $_POST['freeform'];
$tip = $_POST['Nokti'];
$newsletter = $_POST['newsletter_email'];


$sql = "INSERT INTO poruke (ime, prezime, broj, poruka, tip_noktiju, newsletter_email)
        VALUES ('$ime', '$prezime', '$broj', '$poruka', '$tip', '$newsletter')";

if ($conn->query($sql) === TRUE) {
    echo "Uspešno poslato!";
} else {
    echo "Greška: " . $conn->error;
}

$conn->close();
?>