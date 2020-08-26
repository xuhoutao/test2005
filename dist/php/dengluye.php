<?php
include "./base.php";
//连接数据库
$link=mysqli_connect('localhost','root','root','test');
 //设置编码
mysqli_set_charset($link,'utf8'); 
//获取参数信息
$u=$_GET['unsername'];
$p=$_GET['password']; 
//SQL
$sql="SELECT * FROM `unser` where `unsername`='$u' AND `password`='$p'";
//执行SQL
$res=mysqli_query($link,$sql);
/* print_r(mysqli_fetch_assoc($res)); */
//判断结果集中是否存在数据
 if(mysqli_fetch_assoc($res)){
    $arr = array('code'=>1,'data'=>array('unsername'=>$u));
 }else{
    $arr = array('code'=>0,'msg'=>'用户名或密码错误');
 } 
 //6 返回json格式的数据
echo json_encode($arr);
?>