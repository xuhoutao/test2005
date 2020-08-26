//切换
var loginUpbtn=document.getElementsByClassName("login-up-btn")[0]
var loginPhonebtn=document.getElementsByClassName("login-phone-btn")[0]
console.log(loginPhonebtn)
var fromLogin=document.getElementById("form_login")
console.log(fromLogin)
var fromLoginphone=document.getElementById("form_login_phone")
var loginSwitch=document.getElementsByClassName("login-switch")[0]
loginUpbtn.onclick=function(){
        loginUpbtn.className="login-up-btn active";
        loginPhonebtn.className="login-phone-btn"
        fromLogin.style.display="block"
        fromLoginphone.style.display="none"
} 
loginPhonebtn.onclick=function(){
    loginUpbtn.className="login-up-btn ";
    loginPhonebtn.className="login-phone-btn active"
    fromLogin.style.display="none"
    fromLoginphone.style.display="block"
}

//关闭
var close1=document.getElementsByClassName("close")[0]
var modal=document.getElementsByClassName("modal")[0]
var bg=document.getElementsByClassName("bg")[0]
close1.onclick=function(){
    modal.style.display="none"
    bg.style.display="none"
}

//对于手机号和正则的判断
var loginMessagename=document.getElementsByClassName("login_messageName")[0]//账户密码中的手机input
var loginMessagename1=document.getElementsByClassName("login_messageName")[1]//手机验证码的手机input
var pwd=document.getElementsByClassName("pwd")[0]//账户密码中的密码input
var loginMessagecode=document.getElementsByClassName("login_messageCode")[1]//手机验证码的验证码
var error=fromLogin.children[2].children[0]//错误的显示
var error1=fromLoginphone.children[2].children[0]//第二个错误的显示
var denglu=fromLogin.children[7]//登录按钮
var denglu1=fromLoginphone.children[5]//第二个登录按钮
console.log(denglu)
console.log(denglu1)
denglu.onclick=function(){//第一个登录   
    var reg=/^1[35678]\d{9}$/
    if(reg.test(loginMessagename.value)){//当手机符合正则时
         error.style.display="none"
    }else{
        error.children[1].innerHTML="账号不存在"
        error.style.display="block"
    }
    if(((loginMessagename.value=='')||(pwd.value==''))){//当其中有一个为空时
        error.children[1].innerHTML="账户或密码不可为空"
        error.style.display="block"
    }
  }
 denglu1.onclick=function(){//第二个登录
    var reg=/^1[35678]\d{9}$/
    if(reg.test(loginMessagename1.value)){//当手机号码符合正则时
        error1.style.display="none"
        if(loginMessagecode.value==''){//同时验证码为空
            error1.children[1].innerHTML="请输入短信验证码"
            error1.style.display="block"
        }
    }else{//手机号码不符合正则时
        error1.children[1].innerHTML="请输入正确的手机号"
        error1.style.display="block"
    }
   
} 