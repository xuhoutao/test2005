//购物车移入移出
var headerGou=document.getElementsByClassName("header-gou")[0]
//点击它,从商品详情页跳转到购物车页面
headerGou.onclick=function(){
    location.href="./gouwuche.html"
}
var cartWrap=headerGou.children[0]
var headerGou1=headerGou.children[1]
cartWrap.onmouseenter=function(){
    headerGou1.style.display="block"
}
cartWrap.onmouseleave=function(){
    headerGou1.style.display="none"
}
//倒计时
 function tabImg(arr) {
    for (var i = 0; i < imglist.length; i++) {
      imglist[i].src = '../images/' + arr[i] + '.png';
     } 
}
var timer1 = document.getElementById("timer")
imglist = document.getElementById('timer').children      
function fn1(){
    var dt1=new Date();
    var dt2=new Date("2020,08,29,24:00:00")//如果用字符串写为"2020,07,04,24:00:00"
    var time1=parseInt((dt2-dt1)/1000);//单位为秒钟
    var h=parseInt(time1/3600)
    var m=parseInt((time1-h*3600)/60)
    var s=time1-h*3600-m*60;
    var arr = [parseInt(h / 10), h % 10, parseInt(m / 10), m% 10, parseInt(s / 10), s % 10]
    tabImg(arr)
   }
setInterval(fn1,1000)
//绿色目录
var menuContentbox=document.getElementsByClassName("menu-content-box")[0]
var ul=menuContentbox.children[0]
var lis=ul.children
var categoryName=document.getElementsByClassName("category-name")
//导航移入移出
 var jsMousehovershow=document.getElementsByClassName("js-mouse-hover-show")
var li1=jsMousehovershow[0]
var li2=jsMousehovershow[1]
var dd1=li1.children[1]
var dd2=li2.children[1]
li1.onmouseenter=function(){
    dd1.style.display="block"
}
li1.onmouseleave=function(){
    dd1.style.display="none"
}
li2.onmouseenter=function(){
    dd2.style.display="block"
}
li2.onmouseleave=function(){
    dd2.style.display="none"
} 
//相机的移入移出
var iconCamera=document.getElementsByClassName("icon-camera")[0]
var tooltiptext=document.getElementsByClassName("tooltiptext")[0]
iconCamera.onmouseenter=function(){
    tooltiptext.style.display="block"
}
iconCamera.onmouseleave=function(){
    tooltiptext.style.display="none"
}
//置顶
function getScroll(){
    return {
        left:document.body.scrollLeft||document.documentElement.scrollLeft,
        top:document.body.scrollTop||document.documentElement.scrollTop
    }
}
var ehsyNavleft=document.getElementsByClassName("ehsy-nav-left")[0]
var shang=ehsyNavleft.children[0].children[8]
var xia=ehsyNavleft.children[0].children[9]
var ul5=ehsyNavleft.children[0]
ul5.children[0].onclick=function(){
    $('html').animate({
        scrollTop:895
    },1000,'linear')
    ul5.children[0].style.background="rgb(58, 189, 89)"
    ul5.children[0].style.color="#fff"
    ul5.children[1].style.background="#fff"
    ul5.children[1].style.color="#333"
    ul5.children[2].style.background="#fff"
    ul5.children[2].style.color="#333"
    ul5.children[3].style.background="#fff"
    ul5.children[3].style.color="#333"
    ul5.children[4].style.background="#fff"
    ul5.children[4].style.color="#333"
    ul5.children[5].style.background="#fff"
    ul5.children[5].style.color="#333"
    ul5.children[6].style.background="#fff"
    ul5.children[6].style.color="#333"
    ul5.children[7].style.background="#fff"
    ul5.children[7].style.color="#333"
}
ul5.children[1].onclick=function(){
    $('html').animate({
        scrollTop:1491
    },1000,'linear')
    ul5.children[1].style.background="rgb(93, 162, 236)"
    ul5.children[1].style.color="#fff"
    ul5.children[0].style.background="#fff"
    ul5.children[0].style.color="#333"
    ul5.children[2].style.background="#fff"
    ul5.children[2].style.color="#333"
    ul5.children[3].style.background="#fff"
    ul5.children[3].style.color="#333"
    ul5.children[4].style.background="#fff"
    ul5.children[4].style.color="#333"
    ul5.children[5].style.background="#fff"
    ul5.children[5].style.color="#333"
    ul5.children[6].style.background="#fff"
    ul5.children[6].style.color="#333"
    ul5.children[7].style.background="#fff"
    ul5.children[7].style.color="#333"
}
ul5.children[2].onclick=function(){
    $('html').animate({
        scrollTop:2087
    },1000,'linear')
    ul5.children[0].style.background="#fff"
    ul5.children[0].style.color="#333"
    ul5.children[1].style.background="#fff"
    ul5.children[1].style.color="#333"
    ul5.children[2].style.background="rgb(13, 173, 199)"
    ul5.children[2].style.color="#fff"
    ul5.children[3].style.background="#fff"
    ul5.children[3].style.color="#333"
    ul5.children[4].style.background="#fff"
    ul5.children[4].style.color="#333"
    ul5.children[5].style.background="#fff"
    ul5.children[5].style.color="#333"
    ul5.children[6].style.background="#fff"
    ul5.children[6].style.color="#333"
    ul5.children[7].style.background="#fff"
    ul5.children[7].style.color="#333"
}
ul5.children[3].onclick=function(){
    $('html').animate({
        scrollTop:2683
    },1000,'linear')
    ul5.children[0].style.background="#fff"
    ul5.children[0].style.color="#333"
    ul5.children[1].style.background="#fff"
    ul5.children[1].style.color="#333"
    ul5.children[2].style.background="#fff"
    ul5.children[2].style.color="#333"
    ul5.children[3].style.background="rgb(38, 192, 166)"
    ul5.children[3].style.color="#fff"
    ul5.children[4].style.background="#fff"
    ul5.children[4].style.color="#333"
    ul5.children[5].style.background="#fff"
    ul5.children[5].style.color="#333"
    ul5.children[6].style.background="#fff"
    ul5.children[6].style.color="#333"
    ul5.children[7].style.background="#fff"
    ul5.children[7].style.color="#333"
}
ul5.children[4].onclick=function(){
    $('html').animate({
        scrollTop:3279
    },1000,'linear')
    ul5.children[0].style.background="#fff"
    ul5.children[0].style.color="#333"
    ul5.children[1].style.background="#fff"
    ul5.children[1].style.color="#333"
    ul5.children[2].style.background="#fff"
    ul5.children[2].style.color="#333"
    ul5.children[3].style.background="#fff"
    ul5.children[3].style.color="#333"
    ul5.children[4].style.background="rgb(108, 150, 198)"
    ul5.children[4].style.color="#fff"
    ul5.children[5].style.background="#fff"
    ul5.children[5].style.color="#333"
    ul5.children[6].style.background="#fff"
    ul5.children[6].style.color="#333"
    ul5.children[7].style.background="#fff"
    ul5.children[7].style.color="#333"
}
ul5.children[5].onclick=function(){
    $('html').animate({
        scrollTop:3875
    },1000,'linear')
    ul5.children[0].style.background="#fff"
    ul5.children[0].style.color="#333"
    ul5.children[1].style.background="#fff"
    ul5.children[1].style.color="#333"
    ul5.children[2].style.background="#fff"
    ul5.children[2].style.color="#333"
    ul5.children[3].style.background="#fff"
    ul5.children[3].style.color="#333"
    ul5.children[4].style.background="#fff"
    ul5.children[4].style.color="#333"
    ul5.children[5].style.background="rgb(180, 158, 128)"
    ul5.children[5].style.color="#fff"
    ul5.children[6].style.background="#fff"
    ul5.children[6].style.color="#333"
    ul5.children[7].style.background="#fff"
    ul5.children[7].style.color="#333"
}
ul5.children[6].onclick=function(){
    $('html').animate({
        scrollTop:4471
    },1000,'linear')
    ul5.children[0].style.background="#fff"
    ul5.children[0].style.color="#333"
    ul5.children[1].style.background="#fff"
    ul5.children[1].style.color="#333"
    ul5.children[2].style.background="#fff"
    ul5.children[2].style.color="#333"
    ul5.children[3].style.background="#fff"
    ul5.children[3].style.color="#333"
    ul5.children[4].style.background="#fff"
    ul5.children[4].style.color="#333"
    ul5.children[5].style.background="#fff"
    ul5.children[5].style.color="#333"
    ul5.children[6].style.background="rgb(58, 135, 170)"
    ul5.children[6].style.color="#fff"
    ul5.children[7].style.background="#fff"
    ul5.children[7].style.color="#333"
}
ul5.children[7].onclick=function(){
    $('html').animate({
        scrollTop:5067
    },1000,'linear')
    ul5.children[0].style.background="#fff"
    ul5.children[0].style.color="#333"
    ul5.children[1].style.background="#fff"
    ul5.children[1].style.color="#333"
    ul5.children[2].style.background="#fff"
    ul5.children[2].style.color="#333"
    ul5.children[3].style.background="#fff"
    ul5.children[3].style.color="#333"
    ul5.children[4].style.background="#fff"
    ul5.children[4].style.color="#333"
    ul5.children[5].style.background="#fff"
    ul5.children[5].style.color="#333"
    ul5.children[6].style.background="#fff"
    ul5.children[6].style.color="#333"
    ul5.children[7].style.background="rgb(212, 157, 123)"
    ul5.children[7].style.color="#fff"
}
shang.onclick=function(){
    $('html').animate({
        scrollTop:0
    },1000,'linear')
} 
xia.onclick=function(){
    $('html').animate({
        scrollTop:6282
    },1000,'linear')
} 
//顶部隐藏
var jsTopfixbar=document.getElementById("js-top-fix-bar")
 window.onscroll=function(){
    var scrollTop = getScroll().top;
    console.log(scrollTop)
    if(scrollTop<=200){
        ehsySidebarfooter.style.display="none"
        jsTopfixbar.style.display="none"
        ehsyNavleft.style.display="none"
    }
     if(600>scrollTop>200){
        ehsySidebarfooter.style.display="block"
     }
      if(scrollTop>=600){
        ehsySidebarfooter.style.display="block"
        jsTopfixbar.style.display="block"
    }
        if(scrollTop<=600){
        ehsySidebarfooter.style.display="block"
        jsTopfixbar.style.display="none"
        ehsyNavleft.style.display="none"
    }   
     if(scrollTop>=895){
        ehsyNavleft.style.display="block"
    }
} 
//点击更多显示隐藏
var friendship=document.getElementsByClassName("friendship-links-more-sw")[0]
console.log(friendship)
var friendshipLINK=document.getElementsByClassName('friendship-links-more')[0]
var friendshipLINK1=document.getElementsByClassName('friendship-links-more')[1]
var friendshipLINK2=document.getElementsByClassName('friendship-links-more')[2]
friendship.onclick=function(){
    friendshipLINK.style.display="block"
    friendshipLINK1.style.display="block"
    friendshipLINK2.style.display="block"
}
friendship.onmousedown=function(){
    friendshipLINK.style.display="none"
    friendshipLINK1.style.display="none"
    friendshipLINK2.style.display="none"
}
//轮播图
var slider=document.getElementById("slider")//总容器
var ul1=slider.children[1]//控制按钮总容器
var Lis=slider.children[0].children//图片的集合
var width = slider.offsetWidth;//容器的宽度
var timer = null;//定时器变量
var index = 0;// 用一个变量记录当前是第几个li
// 1 默认显示第一张图片,其他图片都放到右边
for(var i=0;i<Lis.length;i++){
    Lis[i].style.left=width+"px"
}
  Lis[index].style.left = 0;//将第一张图片放到中间的位置,用于显示
//3 第一个小圆点高亮(当前图片对应的小圆点高亮)
light();  
//利用事件冒泡原理,把prev,next和小圆点上的事件都委托给ctrlContainer
ul1.onclick=function(e){
    e = window.event ||e;
    var target = e.target||e.srcElement;
    console.log(target)
    if(target.className=="page prev"){
        console.log(target)
         prevImg()
    }
    else if(target.className=="page next"){
         // 4 点击next看下一张图        
            nextImg()
    }
    else if(target.className=='ab'){
          // 6 点击小圆点,看对应的图
          var newIndex =parseInt(target.innerHTML)//target.innerHTML是字符串,要转类型,不然后面会进行字符串拼接
          if(newIndex<index){
            //如果要看的图索引比当前小,那要看的图必须在左边
            Lis[newIndex].style.left=-width+"px";
            animation(Lis[index],{left:width})
            animation(Lis[newIndex],{left:0});            
        }
        else if(newIndex>index){
            //如果要看的图索引比当前大,那要看的图必须在右边
            Lis[newIndex].style.left = width+"px";
            animation(Lis[index],{left:-width})
            animation(Lis[newIndex],{left:0})
        }
        //更新当前索引
        index = newIndex;
        //高亮小圆点
        light()
    }
} 

// 7 轮播图可以自动轮播:每隔一段时间自动切换到下一张,同时对应的小圆点亮起(执行nextImg函数)
timer = setInterval(nextImg,3000);


// 8 鼠标移入轮播图,停止轮播
slider.onmouseenter = function(){
    clearInterval(timer)
}
// 9 鼠标移出轮播图,开启轮播
slider.onmouseleave = function(){
    //要用定时器要先清定时器
    clearInterval(timer);
    timer = setInterval(nextImg,3000);
} 

function light(){
    //功能:将当前的小圆点点亮
    var lis1=slider.children[1].children//小圆
    for(var i=0;i<lis1.length-2;i++){
        //为什么-2?因为span里面还有2个不是小圆点
         lis1[i].className = "ab"; //将所有小圆点变为不点亮的状态
    }
    //只有当前图片对应的小圆点类名不同,将其进行点亮
    lis1[index].className ="ab current";
}
 function nextImg(){
    //功能:显示当前index的下一张
        var newIndex = index+1;//newIndex就是我马上要看的下一张图片的索引
        //要判断nexIndex是否超出范围,如果超出,就是想看最前面那一张
        if(newIndex>Lis.length-1){
            newIndex = 0;
        }
        Lis[newIndex].style.left = width+"px";//我要看的图必在右边
        animation(Lis[index],{left:-width});//原来的图去左边
        animation(Lis[newIndex],{left:0});//要看的图来中间
        //更新当前图片的索引
        index = newIndex;
        //高亮当前图片对应的小圆点
        light();
}
 
function prevImg(){
     // 功能: 点击prev看上一张图
     var newIndex=index-1//newIndex就是我马上要看的上一张图片的索引
     //要判断nexIndex是否超出范围,如果超出,就是想看最后面那一张
         if(newIndex<0){
             newIndex=Lis.length-1
         }
        Lis[newIndex].style.left = -width+"px"; // 我要看的图必须在左边
        animation(Lis[index],{left:width})// 原来的图去右边
        animation(Lis[newIndex],{left:0})// 要看的图来中间
        //更新当前索引,便于进行下一次点击prev操作
        index = newIndex;
        //高亮当前图片对应的小圆点
        light()
}
//右边的隐藏
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
    },1000,'linear')
}

//中间内容右边点击切换
var jstabs0=document.getElementsByClassName("js-tabs-0")[0]
var jstabs1=document.getElementsByClassName("js-tabs-1")[0]
var icontabbtns=document.getElementsByClassName("icon-tab-btns")
var act=icontabbtns[0].children[0]
var act1=icontabbtns[0].children[1]
 act.onclick=function(){
    jstabs0.style.display="block"
    jstabs1.style.display="none"
    act.className="active js-tabs-title"
    act1.className=" js-tabs-title"
}
act1.onclick=function(){
    jstabs0.style.display="none"
    jstabs1.style.display="block"
    act1.className="active js-tabs-title"
    act.className=" js-tabs-title"
}

var jstabs2=document.getElementsByClassName("js-tabs-0")[1]
var jstabs3=document.getElementsByClassName("js-tabs-1")[1]
var act2=icontabbtns[1].children[0]
var act3=icontabbtns[1].children[1]
act2.onclick=function(){
    jstabs2.style.display="block"
    jstabs3.style.display="none"
    act2.className="active js-tabs-title"
    act3.className=" js-tabs-title"
}
act3.onclick=function(){
    jstabs2.style.display="none"
    jstabs3.style.display="block"
    act3.className="active js-tabs-title"
    act2.className=" js-tabs-title"
} 

var jstabs4=document.getElementsByClassName("js-tabs-0")[2]
var jstabs5=document.getElementsByClassName("js-tabs-1")[2]
var act4=icontabbtns[2].children[0]
var act5=icontabbtns[2].children[1]
act4.onclick=function(){
    jstabs4.style.display="block"
    jstabs5.style.display="none"
    act4.className="active js-tabs-title"
    act5.className=" js-tabs-title"
}
act5.onclick=function(){
    jstabs4.style.display="none"
    jstabs5.style.display="block"
    act5.className="active js-tabs-title"
    act4.className=" js-tabs-title"
} 

var jstabs6=document.getElementsByClassName("js-tabs-0")[3]
var jstabs7=document.getElementsByClassName("js-tabs-1")[3]
var act6=icontabbtns[3].children[0]
var act7=icontabbtns[3].children[1]
act6.onclick=function(){
    jstabs6.style.display="block"
    jstabs7.style.display="none"
    act6.className="active js-tabs-title"
    act7.className=" js-tabs-title"
}
act7.onclick=function(){
    jstabs6.style.display="none"
    jstabs7.style.display="block"
    act7.className="active js-tabs-title"
    act6.className=" js-tabs-title"
} 

var jstabs8=document.getElementsByClassName("js-tabs-0")[4]
var jstabs9=document.getElementsByClassName("js-tabs-1")[4]
var act8=icontabbtns[4].children[0]
var act9=icontabbtns[4].children[1]
act8.onclick=function(){
    jstabs8.style.display="block"
    jstabs9.style.display="none"
    act8.className="active js-tabs-title"
    act9.className=" js-tabs-title"
}
act9.onclick=function(){
    jstabs8.style.display="none"
    jstabs9.style.display="block"
    act9.className="active js-tabs-title"
    act8.className=" js-tabs-title"
}
var headerLeft=document.getElementsByClassName("header-left")[0]
var zhuce1=headerLeft.children[2]//免费注册
zhuce1.onclick=function(){//点击免费注册跳转到注册页面
    window.location.href="./zhuce.html" 
} 
//欢迎用户 
var headerleft=document.getElementsByClassName("header-left")[0]
console.log(localStorage.getItem('un'))
if(localStorage.getItem('un')){
    headerleft.children[0].innerHTML="欢迎"
    headerleft.children[1].remove()
    headerleft.children[1].innerHTML=localStorage.getItem('un')
}
