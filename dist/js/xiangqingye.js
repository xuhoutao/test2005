"use strict";var zoomPad=document.getElementsByClassName("zoomPad")[0],mask=zoomPad.children[1],zoomWindow=document.getElementsByClassName("zoomWindow")[0],bigimg=zoomWindow.children[0].children[0].children[0];function getScroll(){return{left:document.body.scrollLeft||document.documentElement.scrollLeft,top:document.body.scrollTop||document.documentElement.scrollTop}}zoomPad.onmouseenter=function(){mask.style.display="block",zoomWindow.style.display="block"},zoomPad.onmouseleave=function(){mask.style.display="none",zoomWindow.style.display="none"},zoomPad.onmousemove=function(e){var t=(e=window.event||e).clientX+getScroll().left-31,l=e.clientY+getScroll().top-244;console.log(zoomPad.offsetLeft),t-=mask.offsetWidth/2,l-=mask.offsetHeight/2,t<0&&(t=0),t>zoomPad.children[0].offsetWidth-mask.offsetWidth&&(t=zoomPad.children[0].offsetWidth-mask.offsetWidth),l<0&&(l=0),l>zoomPad.children[0].offsetHeight-mask.offsetHeight&&(l=zoomPad.children[0].offsetHeight-mask.offsetHeight),mask.style.left=t+"px",mask.style.top=l+"px";var o=-t/zoomPad.children[0].offsetWidth*bigimg.offsetWidth,n=-l/zoomPad.children[0].offsetHeight*bigimg.offsetHeight;bigimg.style.left=o+"px",bigimg.style.top=n+"px"};var adjustButton=document.getElementsByClassName("adjust-button")[0],input1=adjustButton.previousElementSibling;function fn4(e){var t=input1.value;t++,input1.value=t}function fn5(e){var t=input1.value;t<=1?t=1:t--,input1.value=t}var jsTopfixbar=document.getElementById("js-top-fix-bar"),ehsySidebarfooter=document.getElementsByClassName("ehsy-sidebar-footer")[0];window.onscroll=function(){var e=getScroll().top;console.log(e),e<=200&&(ehsySidebarfooter.style.display="none",jsTopfixbar.style.display="none"),200<e&&(ehsySidebarfooter.style.display="block",jsTopfixbar.style.display="none"),500<e&&(ehsySidebarfooter.style.display="block",jsTopfixbar.style.display="block"),e<=500&&(ehsySidebarfooter.style.display="block",jsTopfixbar.style.display="none")};var span3=(ehsySidebarfooter=document.getElementsByClassName("ehsy-sidebar-footer")[0]).children[1],i1=ehsySidebarfooter.children[0];ehsySidebarfooter.onmouseenter=function(){i1.style.display="none",span3.style.display="block"},ehsySidebarfooter.onmouseleave=function(){i1.style.display="block",span3.style.display="none"},ehsySidebarfooter.onclick=function(){$("html").animate({scrollTop:0},1e3,"linear")};for(var mainDetailtabs=document.getElementsByClassName("mainDetail-tabs")[0],lis=mainDetailtabs.children,mainDetailtabs1=mainDetailtabs.nextElementSibling,divs=mainDetailtabs1.children,i=0;i<lis.length-1;i++)lis[i].onclick=function(){for(var e=0;e<lis.length;e++)lis[e].className="tabsTitle js-tabs-title",divs[e].style.display="none",divs[4].style.display="block";this.className="tabsTitle js-tabs-title active",divs[this.getAttribute("index")].style.display="block"};lis[3].onclick=function(){for(var e=0;e<lis.length;e++)lis[e].className="tabsTitle js-tabs-title",divs[e].style.display="none",divs[4].style.display="none";this.className="tabsTitle js-tabs-title active",divs[this.getAttribute("index")].style.display="block"};var similarrecommend=document.getElementsByClassName("similar-recommend")[0],span1=similarrecommend.children[0].children[0],span2=similarrecommend.children[0].children[1],divm=similarrecommend.children[1],divn=similarrecommend.children[2];span2.onclick=function(){span2.className="js-tabs-active js-tabs-title active",span1.className="js-tabs-active js-tabs-title ",divn.style.display="block",divm.style.display="none"},span1.onclick=function(){span1.className="js-tabs-active js-tabs-title active",span2.className="js-tabs-active js-tabs-title ",divm.style.display="block",divn.style.display="none"};var cartWrap=(headerGou=document.getElementsByClassName("header-gou")[0]).children[0],headerGou1=headerGou.children[1];cartWrap.onmouseenter=function(){headerGou1.style.display="block"},cartWrap.onmouseleave=function(){headerGou1.style.display="none"};var iconCamera=document.getElementsByClassName("icon-camera")[0],tooltiptext=document.getElementsByClassName("tooltiptext")[0];iconCamera.onmouseenter=function(){tooltiptext.style.display="block"},iconCamera.onmouseleave=function(){tooltiptext.style.display="none"},$(".tec-sidenav>li").eq(0).click(function(){$("html").animate({scrollTop:780},1e3,"linear")}),$(".tec-sidenav>li").eq(1).click(function(){$("html").animate({scrollTop:2600},1e3,"linear")}),$(".tec-sidenav>li").eq(2).click(function(){$("html").animate({scrollTop:2880},1e3,"linear")}),$(".tec-sidenav>li").eq(3).click(function(){$("html").animate({scrollTop:5e3},1e3,"linear")}),$(window).scroll(function(){$(window).scrollTop()<780?$(".tec-sidenav").removeClass("tec-fixed"):$(".tec-sidenav").addClass("tec-fixed")});var headerGou,ajaxlayeraddcart=document.getElementById("ajax-layer-add-cart"),x=ajaxlayeraddcart.children[0].children[0].children[0].children[0],addTocartbtn=document.getElementsByClassName("add-to-cart-btn")[0];addTocartbtn.onclick=function(){document.getElementsByClassName("product-zoom")[0].children[0].children[0].children[0];var e=document.getElementsByClassName("product-info-detail")[0],t=e.children[0],l=e.children[1].children[0].children[1],o=e.children[2].children[0].children[2],n=e.children[2].children[4].children[0].children[0];console.log(n),console.log("../images/2017.jpg"),console.log(o.innerHTML),console.log(t.innerHTML),$.get("../interface/addwq.php",{id:o.innerHTML,img:"../images/2017.jpg",price:l.innerHTML,name:t.innerHTML,num:n.value},function(e){console.log(e);var t=JSON.parse(e);console.log(t),1==t.code&&(ajaxlayeraddcart.style.display="block")}),value=input1.value,cartWrap.children[2].children[0].innerHTML++,headerGou1.children[0].innerHTML="购物车中已有商品,赶快带回家吧!"},x.onclick=function(){ajaxlayeraddcart.style.display="none"},(headerGou=document.getElementsByClassName("header-gou")[0]).onclick=function(){location.href="./gouwuche.html"};var headerleft=document.getElementsByClassName("header-left")[0];console.log(headerleft),console.log(localStorage.getItem("un")),localStorage.getItem("un")&&(headerleft.children[0].innerHTML="欢迎",headerleft.children[1].remove(),headerleft.children[1].innerHTML=localStorage.getItem("un"));