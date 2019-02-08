<h2>Contact list</h2>
<?php
$password = 'password';

$getPassword = (isset($_GET['password'])) ? trim($_GET['password']) : 0;

if($password === $getPassword) {
        // выводим страницу
    $servername = "localhost";
    $username = "root";
    $password = "root";
    $dbname = "usaCar_db";

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);

    $result = $conn->query("SELECT * FROM `contacts`");


    if ($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
            echo '<p style="color: gray;"> ID_'. $row["id"]." - Name: " .'<span style="color: black; font-weight:bold;">' .$row["name"] .'</span>'. " Phone " .'<span style="color: black; font-weight:bold;">'.  $row["phone"]. '</span>' ." date ". $row["datetime"]. "</p>". "<br>";
        }
    } else {
        echo "0 results";
    }
} else {
    ?>
    <form action="" type="GET">
        <input type="text" name="password">
    </form>
    <?php
}
