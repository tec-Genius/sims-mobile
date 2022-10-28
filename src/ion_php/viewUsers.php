<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
include "connect.php";
$sql="SELECT * FROM myuser";
$result=mysqli_query($conn,$sql) or die(mysqli_error($conn));
echo '[';
for($i=0;$i< mysqli_num_rows($result); $i++){
echo($i>0?',':'').json_encode(mysqli_fetch_object($result));
}
echo ']';
?>