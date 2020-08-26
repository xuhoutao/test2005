//顶部隐藏
var jsTopfixbar=document.getElementById("js-top-fix-bar")
var  ehsySidebarfooter=document.getElementsByClassName( 'ehsy-side-bar-footer')[0]
 window.onscroll=function(){
    var scrollTop = getScroll().top
    console.log(scrollTop)
    if(scrollTop<=200){
        ehsySidebarfooter.style.display="none"
        jsTopfixbar.style.display="none"      
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
    }      
} ;
function getScroll(){
    return {
        left:document.body.scrollLeft||document.documentElement.scrollLeft,
        top:document.body.scrollTop||document.documentElement.scrollTop
    }
};
//右边的隐藏
var ehsySidebarfooter=document.getElementsByClassName("ehsy-sidebar-footer")[0]
var span3=ehsySidebarfooter.children[1]
var i1=ehsySidebarfooter.children[0]
console.log(i1)
ehsySidebarfooter.onmouseenter=function(){
    i1.style.display="none"
    span3.style.display="block"
};
ehsySidebarfooter.onmouseleave=function(){
    i1.style.display="block"
    span3.style.display="none"
};
ehsySidebarfooter.onclick=function(){
    //document.documentElement.scrollTop=0
    $('html').animate({
        scrollTop:0
    },1000,'linear')
};
//购物车移入移出
var headerGou=document.getElementsByClassName("header-gou")[0]
//点击它,从商品详情页跳转到购物车页面
headerGou.onclick=function(){
    location.href="./gouwuche.html"
};
var cartWrap=headerGou.children[0]
var headerGou1=headerGou.children[1]
cartWrap.onmouseenter=function(){
    headerGou1.style.display="block"
};
cartWrap.onmouseleave=function(){
    headerGou1.style.display="none"
};
cartWrap.onclick=function(){
    location.href="./gouwuche.html"
};
//相机的移入移出
var iconCamera=document.getElementsByClassName("icon-camera")[0]
var tooltiptext=document.getElementsByClassName("tooltiptext")[0]
iconCamera.onmouseenter=function(){
    tooltiptext.style.display="block"
}
iconCamera.onmouseleave=function(){
    tooltiptext.style.display="none"
}
/* */          
$.ajax({
    url:'./pages/date1.json',
    dataType:'json'
})
.then(res=>{
    //res就是获取到的轮播图的数据
    // 第二步:格式化数据(返回的数据刚好合用,不用再次格式化)
    // 第三步:把数据渲染到响应的容器里面
    var row=document.querySelector('.product-list')
    var str=''
    console.log(res)
       res.forEach(function(item){  
         str+=`  
         <div class="product" data-text="${item.order}">   
         <a href="${item.href}" target="_blank" title="史丹利 21件套6.3MM公英制组套，89-507-22">
             <div class="p-image">
                 <div class="image-div">
                    <img src="${item.img}" alt="史丹利 21件套6.3MM公英制组套，89-507-22">
                </div>
             </div>
         </a>
         <div class="p-name">
             <a href="${item.href}" title="史丹利 21件套6.3MM公英制组套，89-507-22" target="_blank">
               <span class="high-light">${item.name}</span>
              <p class="ellipsis-ex">...</p>
             </a>
         </div>
         <div class="order ell">
             <span class="color-999">西域订货号：</span>
             <span>${item.order}</span>
         </div>
         <ul class="product-parameter">
             <li class="high-light" style="width:124.83333333333px">
                ${item.品牌}
            </li>
             <li style="width:124.83333333333px">${item.型号}</li>
             <li style="width:124.83333333333px">${item.组件套数}</li>
             <li style="width:124.83333333333px">${item.扳手}</li>                       
             <li style="width:124.83333333333px">
                 <span class="now_money" title="">
                     <span class="yen" style="font-size: 12px;">
                     ${item.西域价}
                     </span>                               
                 </span>
                 <br>
             </li>
             <li style="width:124.83333333333px">
                 <span class="stock" data="0">${item.预计出货日}</span><br>
            </li>
         </ul>       
         <div class="purchase-num">
             <a class="a-sub disable-sub">-</a>
             <input class="purchaseCount js-list-product-quantity" max-number="99999" value="" data-val="1" onfocus="this.value=this.value<1 ? 1:this.value;this.select()" onkeyup="this.value=this.value.replace(/[^\d]/,'');this.value=this.value.replace(/^0{1}/g,'1');if(this.value>99999){this.value=99999}" type="text" sku_code="RAS230">
             <a class="a-add">+</a>
             <span class="purchase-unit">套</span>
             <span class="purchase-count-clear icon-product-list-clear"></span>
         </div>                
       </div>`
       })  
     row.innerHTML=str;
})



                
      