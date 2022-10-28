<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: PUT");
include "connect.php";
$id=$_GET['id'];
$sql="SELECT * FROM myuser WHERE id='$id'" ;
$result=mysqli_query($conn,$sql) or die(mysqli_error($conn));
for($i=0;$i< mysqli_num_rows($result); $i++){
echo($i>0?',':'').json_encode(mysqli_fetch_object($result));
}
?>