<?php
include('content.php');
$username=$_REQUEST['username'];

$password=$_REQUEST['password'];

$sql="select * from  my_list where phone='$username' and pasword='$password'";

$result=$mysqli->query($sql);
if($result->num_rows>0){

    echo "<script src='../cookie.js'></script>";
    echo "<script>cookie.set('isLogin','true',1);cookie.set('username','$username',1);</script>";
 
    echo "<script>alert('登陆成功,点击跳转');location.href='../xianyuzhuye/zhuye.html';</script>";
}else{
    echo "<script>alert('登陆失败');location.href='../xianyudenglu/denglu.html';</script>";
}

?>