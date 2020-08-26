var registerStep=document.getElementsByClassName("register-step")[0]
var registerTitle=document.getElementsByClassName("register-title")[0]
var personalInfo=document.getElementsByClassName("cd")[0]
var successInfo=document.getElementsByClassName("success-info")[0]
var formItem=document.getElementsByClassName("ab")[0]
var personRegisteragreement=document.getElementById("person_register_agreement")
formItem.children[0].children[1].onclick=function(){//第一页的下一步按钮
    if(personRegisteragreement.checked){
        formItem.children[0].style.display="none"
        formItem.children[1].style.display="inline-block"
        registerTitle.style.display="none"
        personalInfo.style.display="block"
        registerStep.children[1].children[1].className="active"
        registerStep.children[1].children[0].className=""
    }else{
        alert("请同意 <<西域商城服务协议>> !")
    }
}
formItem.children[1].children[0].onclick=function(){//第二页的上一步按钮
    formItem.children[0].style.display="inline-block"
    formItem.children[1].style.display="none"
    registerTitle.style.display="block"
    personalInfo.style.display="none"
    registerStep.children[1].children[0].className="active"
    registerStep.children[1].children[1].className=""
}
registerTitle.children[0].onclick=function(){//第一页的我是企业
    registerTitle.children[0].className="company-mode js-register-tab active"
    registerTitle.children[1].className="personal-mode js-register-tab "
    registerStep.children[0].style.display="block"
    registerStep.children[1].style.display="none"
}
registerTitle.children[1].onclick=function(){//第一页的我是个人
    registerTitle.children[0].className="company-mode js-register-tab "
    registerTitle.children[1].className="personal-mode js-register-tab active"
    registerStep.children[0].style.display="none"
    registerStep.children[1].style.display="block"
}
var userPhoneperson=document.getElementsByName("user_phone_person")[0]//第二页的请输入手机号码框
var smsVerifycodeperson=document.getElementsByName("sms_verify_code_person")[0]//第二页的请输入验证码框
    userPhoneperson.onclick=function(){
    userPhoneperson.parentNode.nextElementSibling.style.display="none"
    userPhoneperson.parentNode.className="form-content "
    userPhoneperson.focus();
    userPhoneperson.onblur=function(){
        var reg=/^1[35678]\d{9}$/
        if(reg.test(userPhoneperson.value)){
            userPhoneperson.parentNode.nextElementSibling.style.display="none"
            userPhoneperson.parentNode.className="form-content "
        }else{
            userPhoneperson.parentNode.nextElementSibling.style.display="block"
            userPhoneperson.parentNode.className="form-content red1"
        }
    }
}
    smsVerifycodeperson.oninput=function(){//内容输入
     formItem.children[1].children[1].className="submitPersonForm" //下一步变成绿色
     if(smsVerifycodeperson.value==""){//当验证码框的值为空时
        formItem.children[1].children[1].className="submitPersonForm disabled" //下一步变成灰色,无法点击
     }   
}

    smsVerifycodeperson.onclick=function(){//点击验证码框,也可以删除错误标志
        smsVerifycodeperson.parentNode.children[0].style.display="none"
        smsVerifycodeperson.parentNode.className="form-content "
}

var hm=document.getElementsByClassName("hm")[0] 
formItem.children[1].children[1].onclick=function(){//第二页的下一步按钮
    ajax({
        url:'../php/zhuze.php',
        data:`unsername=${userPhoneperson.value}&password=${smsVerifycodeperson.value}`,
        chenggong:function(res){
            var res = JSON.parse(res)
            if(res.code==0){
                alert(res.msg)
                    
            }if(res.code==1){
                var reg=/^\d{6}$/
                var reg1=/^1[35678]\d{9}$/
                if(reg.test(smsVerifycodeperson.value)&&reg1.test(userPhoneperson.value)){//当两个的内容都满足正则时
                    smsVerifycodeperson.parentNode.children[0].style.display="none"//把错误取消
                    smsVerifycodeperson.parentNode.className="form-content "
                    registerStep.children[1].style.display="none"//上面的---同时进行注册成功的显示
                    personalInfo.style.display="none"
                    hm.style.display="block"
                    formItem.children[1].style.display="none"
                    formItem.children[2].style.display="inline-block"
                }
                if(!reg.test(smsVerifycodeperson.value)){//当验证码为不满足正则时,才出现错误
                    smsVerifycodeperson.parentNode.children[0].style.display="block"
                    smsVerifycodeperson.parentNode.className="form-content red1"
                } 
               
            } 
        }
    })
    console.log(userPhoneperson.value)
    console.log(smsVerifycodeperson.value)      
}
formItem.children[1].children[2].onclick=function(){//第二页的重置
    smsVerifycodeperson.value=''//验证码框的值为空
    userPhoneperson.value=''//手机号码框的值为空
    formItem.children[1].children[1].className="submitPersonForm disabled"//下一步变成灰色,无法点击
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
    },500,'linear')
}
window.onscroll=function(){
    var scrollTop = getScroll().top;
    if(scrollTop<=200){
        ehsySidebarfooter.style.display="none"
    }else{
        ehsySidebarfooter.style.display="block"
    }
}