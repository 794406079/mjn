<?php
  
    include('content.php');

    $username = $_REQUEST['username'];
    $password = $_REQUEST['password'];
  

    $sql = "select * from my_list where  phone='$username'";

    $result = $mysqli->query($sql);

    if($result->num_rows>0){
        die('用户名已存在');
    }

    $insertSql = "insert into my_list(phone,pasword)values('$username','$password')";

    $res = $mysqli->query($insertSql);

    if($res){
        echo '<script>alert("注册成功");location.href="../xianyudenglu/denglu.html";</script>';
    }

    $mysqli->close();  
?>