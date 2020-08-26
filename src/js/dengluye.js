//切换
var loginUpbtn=document.getElementsByClassName("login-up-btn")[0]
var loginPhonebtn=document.getElementsByClassName("login-phone-btn")[0]
var fromLogin=document.getElementById("form_login")
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
    //获取地址栏中的参数信息
//var pathName=location.search
     ajax({
        url:'../php/dengluye.php',
        data:`unsername=${loginMessagename.value}&password=${pwd.value}`,
        chenggong:function(res){
            var res = JSON.parse(res)
            console.log(res)
            if(res.code==1){
                localStorage.setItem('un',res.data.unsername)
                location.href='./shouye.html'
                /*if(pathName){
                    //获取跳转地址
                    var newUrl=pathName.split('=')[1]
                    //创建cookie
                    setCookie('login1',loginMessagename.value,3600)  
                    location.href=newUrl 
                }else{
                    //创建cookie
                    localStorage.setItem('un',res.data.username)
                    location.href='./gouwuche.html'
                }*/   
              }else{
                 alert("账号或密码错误，请从新登录")
              }
         }
    })
    
    var reg=/^1[35678]\d{9}$/
    console.log(loginMessagename.value)
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
    var pathName=location.search
     ajax({
        url:'../php/dengluye.php',
        data:`unsername=${loginMessagename1.value}&password=${loginMessagecode.value}`,
        chenggong:function(res){
            console.log(res)
            if(res==1){
                if(pathName){
                    //获取跳转地址
                    var newUrl=pathName.split('=')[1]
                    //创建cookie
                    setCookie('login1',loginMessagename1.value,3600)  
                    location.href=newUrl
                }else{
                    //创建cookie
                    setCookie('login1',loginMessagename1.value,3600)  
                    location.href='./gouwuche.html'
                }
                 
              }else{
                 alert("账号或密码错误，请从新登录")
              }
         }
        })
        console.log(loginMessagename1.value)
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
//右边下面的隐藏
var ehsySidebarfooter=document.getElementsByClassName("ehsy-sidebar-footer")[0]
var span1=ehsySidebarfooter.children[1]
var i1=ehsySidebarfooter.children[0]
 
ehsySidebarfooter.onmouseenter=function(){
    i1.style.display="none"
    span1.style.display="block"
}
ehsySidebarfooter.onmouseleave=function(){
    i1.style.display="block"
    span1.style.display="none"
}
ehsySidebarfooter.onclick=function(){
    //document.documentElement.scrollTop=0
    $('html').animate({
        scrollTop:0
    },200,'linear')
}
window.onscroll=function(){
    var scrollTop = getScroll().top;
    if(scrollTop<=200){
        ehsySidebarfooter.style.display="none"
    }else{
        ehsySidebarfooter.style.display="block"
    }
}

