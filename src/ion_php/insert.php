<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
include "connect.php";
$data = json_decode(file_get_contents("php://input"));
$fname=$data->fname;
$lname=$data->lname;
$phone=$data->phone;
$email=$data->email;
if($phone !="" || $age !="" || $phone !="")
{
$stm ="insert into myuser(firstname,lastname,phone,email) values('$fname','$lname','$phone','$email')";
$insert=mysqli_query($conn,$stm) or die(mysqli_error($conn));
if($insert)
echo "Done";
else
echo json_encode("EWrror occoured");
}
?>
