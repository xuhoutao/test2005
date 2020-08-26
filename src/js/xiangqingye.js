//放大镜
var zoomPad=document.getElementsByClassName("zoomPad")[0]//总容器
var mask=zoomPad.children[1]//mask阴影的盒子
var zoomWindow=document.getElementsByClassName("zoomWindow")[0]//大图片的盒子
var bigimg=zoomWindow.children[0].children[0].children[0]//大图片
//1 鼠标移入small,mask显示,big显示
zoomPad.onmouseenter = function(){
    mask.style.display = "block";
    zoomWindow.style.display = "block";
}
//2 鼠标移出small,mask隐藏,big隐藏
zoomPad.onmouseleave = function(){
    mask.style.display = "none";
    zoomWindow.style.display = "none";
}
//3 鼠标在small里面移动,mask跟随
zoomPad.onmousemove = function(e){
    //提到跟随,一定跟鼠标坐标有关,一定需要事件对象
    e = window.event||e;
    //三个坐标:鼠标相对页面的位置,鼠标相对窗口的位置,鼠标相对被点击元素的位置
    //要让mask在box里面定位,就要求到鼠标距离box边缘的距离:鼠标距离页面的距离-box距离页面的距离
    // var x = e.pageX - box.offsetLeft;
    var x = e.clientX+getScroll().left- 31;//就为盒子距离浏览器左边的距离
    // var y = e.pageY - box.offsetTop;
    var y = e.clientY+getScroll().top-244;//就为盒子距离浏览器上边的距离
    //鼠标距离页面的距离 = 鼠标相对窗口的位置 + 滚动的距离
    //为了让鼠标在mask的中间
    console.log( zoomPad.offsetLeft)
    x = x - mask.offsetWidth/2;
    y = y - mask.offsetHeight/2;
    //边界检测
    if(x<0){
        x=0
    }
    if(x>zoomPad.children[0].offsetWidth - mask.offsetWidth){
        x = zoomPad.children[0].offsetWidth - mask.offsetWidth;
    }
    if(y<0){
        y=0
    }
    if(y>zoomPad.children[0].offsetHeight - mask.offsetHeight){
        y = zoomPad.children[0].offsetHeight - mask.offsetHeight;
    }
    mask.style.left = x +"px"
    mask.style.top = y +"px"
    //计算bigImg左移和上移的距离
    //   x/box的宽度 = bigImg左移的距离/bigImg的宽度
    //   y/box的高度 = bigImg上移的距离/bigImg的高度
    var left = -x/zoomPad.children[0].offsetWidth*bigimg.offsetWidth;
    var top = -y/zoomPad.children[0].offsetHeight*bigimg.offsetHeight;
    bigimg.style.left = left+"px";
    bigimg.style.top = top+"px";
}
function getScroll(){
    return {
        left:document.body.scrollLeft||document.documentElement.scrollLeft,
        top:document.body.scrollTop||document.documentElement.scrollTop
    }
}
//数字的增加和减少
var adjustButton=document.getElementsByClassName("adjust-button")[0]
var input1=adjustButton.previousElementSibling//数值框
  //加法
  function fn4(btn){
    //获得输入框的值
    var a=input1.value
    a++
    //将新的值重新赋值给输入框
    input1.value=a;
}
  //减法
  function fn5(btn){
    //获取输入框的值
    var a=input1.value
    if(a<=1){
        a=1
    }else{
        a--
    }
    //将新的值重新赋值给输入框
    input1.value=a
 }
//顶部隐藏
var jsTopfixbar=document.getElementById("js-top-fix-bar")
var ehsySidebarfooter=document.getElementsByClassName("ehsy-sidebar-footer")[0]
window.onscroll=function(){
    var scrollTop = getScroll().top;
    console.log(scrollTop)
    if(scrollTop<=200){
        ehsySidebarfooter.style.display="none"
        jsTopfixbar.style.display="none"
    }
     if(scrollTop>200){
        ehsySidebarfooter.style.display="block"
        jsTopfixbar.style.display="none"
     }
      if(scrollTop>500){
        ehsySidebarfooter.style.display="block"
        jsTopfixbar.style.display="block"
    }
     if(scrollTop<=500){
        ehsySidebarfooter.style.display="block"
        jsTopfixbar.style.display="none"
    }
}
//右边的隐藏
var ehsySidebarfooter=document.getElementsByClassName("ehsy-sidebar-footer")[0]
var span3=ehsySidebarfooter.children[1]
var i1=ehsySidebarfooter.children[0]
 
ehsySidebarfooter.onmouseenter=function(){
    i1.style.display="none"
    span3.style.display="block"
}
ehsySidebarfooter.onmouseleave=function(){
    i1.style.display="block"
    span3.style.display="none"
}
ehsySidebarfooter.onclick=function(){
    //document.documentElement.scrollTop=0
    $('html').animate({
        scrollTop:0
    },1000,'linear')
}

//切换
var mainDetailtabs=document.getElementsByClassName("mainDetail-tabs")[0]
var lis= mainDetailtabs.children//所有切换的li
var mainDetailtabs1=mainDetailtabs.nextElementSibling
var divs=mainDetailtabs1.children//所有要跟着切换的div
for(var i=0;i<lis.length-1;i++){
    lis[i].onclick=function(){
        for( var j = 0 ; j < lis.length; j++ ){
            lis[j].className = "tabsTitle js-tabs-title";
            divs[j].style.display = "none";
            divs[4].style.display="block"
        }
        this.className="tabsTitle js-tabs-title active"
        divs[ this.getAttribute("index")].style.display = "block"
    }
}
lis[3].onclick=function(){
    for( var j = 0 ; j < lis.length; j++ ){
        lis[j].className = "tabsTitle js-tabs-title";
        divs[j].style.display = "none";
        divs[4].style.display="none"
    }
    this.className="tabsTitle js-tabs-title active"
    divs[ this.getAttribute("index")].style.display = "block"
}
var similarrecommend=document.getElementsByClassName("similar-recommend")[0]
var span1=similarrecommend.children[0].children[0]//切换的span
var span2=similarrecommend.children[0].children[1]
var divm=similarrecommend.children[1]
var divn=similarrecommend.children[2]
span2.onclick=function(){
    span2.className="js-tabs-active js-tabs-title active"
    span1.className= "js-tabs-active js-tabs-title "
    divn.style.display="block"
    divm.style.display="none"
}
span1.onclick=function(){
    span1.className="js-tabs-active js-tabs-title active"
    span2.className= "js-tabs-active js-tabs-title "
    divm.style.display="block"
    divn.style.display="none"
}
//购物车移入移出
var headerGou=document.getElementsByClassName("header-gou")[0]
var cartWrap=headerGou.children[0]
var headerGou1=headerGou.children[1]
cartWrap.onmouseenter=function(){
    headerGou1.style.display="block"
}
cartWrap.onmouseleave=function(){
    headerGou1.style.display="none"
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
//右边的点击事件
$('.tec-sidenav>li').eq(0).click(function(){
    $('html').animate({
        scrollTop:780
    },1000,'linear')
})
$('.tec-sidenav>li').eq(1).click(function(){
    $('html').animate({
        scrollTop:2600
    },1000,'linear')
})
$('.tec-sidenav>li').eq(2).click(function(){
    $('html').animate({
        scrollTop:2880
    },1000,'linear')
})
$('.tec-sidenav>li').eq(3).click(function(){
    $('html').animate({
        scrollTop:5000
    },1000,'linear')
})
$(window).scroll(function () {
    if($(window).scrollTop()<780){
        $('.tec-sidenav').removeClass('tec-fixed')
    }else{
        $('.tec-sidenav').addClass('tec-fixed')
    }
})
//获取页面中的商品name,img,price,id等
var ajaxlayeraddcart=document.getElementById("ajax-layer-add-cart")//弹出框
var x=ajaxlayeraddcart.children[0].children[0].children[0].children[0]//弹出框上面的小x
var addTocartbtn=document.getElementsByClassName('add-to-cart-btn')[0]//加入购物车
//点击它,将商品信息传给数据库
addTocartbtn.onclick=function(){
var productzoom=document.getElementsByClassName("product-zoom")[0]
var img=productzoom.children[0].children[0].children[0]//img
var productinfodetail=document.getElementsByClassName("product-info-detail")[0]
var name=productinfodetail.children[0]//name
var price=productinfodetail.children[1].children[0].children[1]//price
var id=productinfodetail.children[2].children[0].children[2]//id
var num=productinfodetail.children[2].children[4].children[0].children[0]
console.log(num)
//console.log(price.innerHTML)
console.log('../images/2017.jpg')
console.log(id.innerHTML)
console.log(name.innerHTML)
    $.get('../interface/addwq.php',{
         id:id.innerHTML,
        img:'../images/2017.jpg',
        price:price.innerHTML,
        name:name.innerHTML,
        num:num.value 
       /*  id:'RAH879',
        name:'重型自动剥线钳，1.0-3.2mm，BS448132',
        img:'../images/2018.jpg',
        price:'¥ 41.09', 
        num:1
        */
         },function(data){
             console.log(data)
             var json=JSON.parse(data)
             console.log(json)
             if(json.code==1){
            ajaxlayeraddcart.style.display="block"
             }
         })
    //获取现在数量框的值
    value=input1.value 
    cartWrap.children[2].children[0].innerHTML++
    headerGou1.children[0].innerHTML="购物车中已有商品,赶快带回家吧!"
   
}
x.onclick=function(){
    ajaxlayeraddcart.style.display="none"
}
var headerGou=document.getElementsByClassName("header-gou")[0]
//点击它,从数据库获取商品数据,将数据渲染到购物车页面上
 headerGou.onclick=function(){
     location.href="./gouwuche.html"
   
    
}
//欢迎用户
var headerleft=document.getElementsByClassName("header-left")[0]
console.log(headerleft)
console.log(localStorage.getItem('un'))
if(localStorage.getItem('un')){
    headerleft.children[0].innerHTML="欢迎"
    headerleft.children[1].remove()
    headerleft.children[1].innerHTML=localStorage.getItem('un')
}
