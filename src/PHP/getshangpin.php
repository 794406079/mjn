<?php
include("content.php");
$sql = "select * from product";

$res = $mysqli->query($sql);

$arr = array();

while($row = $res->fetch_assoc()){
    array_push($arr,$row);
}

$json = json_encode($arr);//转成JSON字符串
// json_decode()  字符串转成对象
echo $json;

$mysqli->close();

?>
