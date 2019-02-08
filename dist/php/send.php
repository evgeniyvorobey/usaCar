<?php
// https://api.telegram.org/bot"token"getUpdates 
$name = $_POST['firstname'];
$phone = $_POST['phone'];
$token = "766670270:AAGUv26QJrS7dtJuPXXaYDacuMrnPk2UAyY";
$chat_id = "-318114205";
$arr = array(
    'Имя: ' => $name,
    'Телефон: ' => $phone,
);
 echo $_POST;

// echo json_encode($_GET);
foreach($arr as $key => $value) {
    $txt .= "<b>".$key."</b> ".$value."%0A";
};
// print_r($txt);
$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

// if ($sendToTelegram) {
//     header ('Location: ../congratulation.html');
// } else {
//     echo 'Error';
// }

// записываем значения в базу данных


$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "usaCar_db";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "INSERT INTO contacts
VALUES (null, '$name', '$phone', null)";
if ($conn->query($sql) === TRUE) {
 echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();