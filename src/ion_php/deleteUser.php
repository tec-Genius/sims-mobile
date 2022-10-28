<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: DELETE");
include "connect.php";
$data= json_decode(file_get_contents("php://input"));
$id= $data->id;
$sql="DELETE FROM myuser WHERE id='$id'";
mysqli_query($conn,$sql);
?>