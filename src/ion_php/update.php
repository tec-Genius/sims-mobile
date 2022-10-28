<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: PUT");
include "connect.php";
$data = json_decode(file_get_contents("php://input"));
$fname=$data->firstname;
$lname=$data->lastname;
$phone=$data->phone;
$email=$data->email;
$id=$data->id;
if($fname !="" || $phone !="" || $email !="")
{
$stm ="UPDATE myuser SET firstname='$fname',lastname='$lname',phone='$phone', email='$email' WHERE id='$id'";
mysqli_query($conn,$stm) or die(mysqli_error($conn));
}
echo $fname;
?>