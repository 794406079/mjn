<?php
  
    include('content.php');//连接服务器

    $username = $_REQUEST['username'];//获取username的属性
    $password = $_REQUEST['password'];//获取password的属性
  

    $sql = "select * from my_list where  phone='$username'";//选择到my_list表格 phone的属性值等于username

    $result = $mysqli->query($sql);//执行sql，并把属性赋给result

    if($result->num_rows>0){//如果检查出的结果大于0，说明用户名已存在，停止运行。
        die('用户名已存在');
    }

    $insertSql = "insert into my_list(phone,pasword)values('$username','$password')";//用户名还不存在  在服务器中创建这个用户

    $res = $mysqli->query($insertSql);//执行

    if($res){
        echo '<script>alert("注册成功");location.href="../xianyudenglu/denglu.html";</script>';
    }//弹窗注册成功 并且跳转到登录页面

    $mysqli->close();  //关闭服务器连接
?>
