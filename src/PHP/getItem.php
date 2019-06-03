<?php
    include('content.php');

    $id = $_REQUEST['id'];

    $sql = "select * from product where id = $id";

    $res = $mysqli->query($sql);

    $row = $res->fetch_assoc();//遍历
    

    $json = json_encode($row);//转字符串

    echo $json;

    $mysqli->close();
?>