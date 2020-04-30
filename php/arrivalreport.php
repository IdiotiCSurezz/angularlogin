<?php

header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Credentials: true');
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Content-Type: application/json; charset=UTF-8");

$db_host = 'localhost';
$db_username = 'krishyalogistics';
$db_password = 'krishya@123';
$db_name = 'Krishyaweb';

$connect = new mysqli($db_host, $db_username, $db_password,$db_name);

if ($mysqli->connect_error) {
die('Error : ('. $connect->connect_errno .') '. $connect->connect_error);
}

$sql = "Select * from kl_arrival";
$result=mysqli_query($connect,$sql);
$json_array=array();
while($row = mysqli_fetch_assoc($result))
{
    $json_array[]=$row;
}

echo json_encode($json_array);

// echo '<pre>';
// print_r($json_array);
// echo '</pre>';

?>