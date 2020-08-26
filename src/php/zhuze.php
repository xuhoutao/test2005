<?php
include "./base.php";

//第一步:获取前端通过POST方式传递的数据
$u= $_GET['unsername'];
$p = $_GET['password'];

//第二步:向数据库中,插入数据
    //连接数据库
    $conn = mysqli_connect('localhost','root','root','test');
     
//3 书写SQL语句
$sql = "SELECT * FROM `unser` WHERE `unsername`='$u'";

//4 执行SQL语句
$result = mysqli_query($conn,$sql);

//5 解析查询结果
$data = mysqli_fetch_assoc($result);

if($data){
    // 如果查询到,说明该用户已经存在于数据库,无法注册了
    $arr = array('code'=>0,'msg'=>'用户名已被注册');
}else{
    // 如果没查询到,可以注册
    // 书写插入的sql语句
    $sql = "INSERT INTO `unser` (`unsername`,`password`) VALUES ('$u','$p')";
    // 执行插入语句
    $result = mysqli_query($conn,$sql);
    // 不需要解析,因为结果是布尔值
    if($result){
        $arr = array('code'=>1,'data'=>array('unsername'=>$u));
    }else{
        $arr = array('code'=>0,'msg'=>'后端出错了');
    }

}
//6 给前端返回json数据
echo json_encode($arr);

?>