"use strict";var headerGou=document.getElementsByClassName("header-gou")[0];headerGou.onclick=function(){location.href="./gouwuche.html"};var cartWrap=headerGou.children[0],headerGou1=headerGou.children[1];function tabImg(l){for(var e=0;e<imglist.length;e++)imglist[e].src="../images/"+l[e]+".png"}cartWrap.onmouseenter=function(){headerGou1.style.display="block"},cartWrap.onmouseleave=function(){headerGou1.style.display="none"};var timer1=document.getElementById("timer");function fn1(){var l=new Date,e=new Date("2020,08,29,24:00:00"),t=parseInt((e-l)/1e3),n=parseInt(t/3600),s=parseInt((t-3600*n)/60),c=t-3600*n-60*s;tabImg([parseInt(n/10),n%10,parseInt(s/10),s%10,parseInt(c/10),c%10])}imglist=document.getElementById("timer").children,setInterval(fn1,1e3);var menuContentbox=document.getElementsByClassName("menu-content-box")[0],ul=menuContentbox.children[0],lis=ul.children,categoryName=document.getElementsByClassName("category-name"),jsMousehovershow=document.getElementsByClassName("js-mouse-hover-show"),li1=jsMousehovershow[0],li2=jsMousehovershow[1],dd1=li1.children[1],dd2=li2.children[1];li1.onmouseenter=function(){dd1.style.display="block"},li1.onmouseleave=function(){dd1.style.display="none"},li2.onmouseenter=function(){dd2.style.display="block"},li2.onmouseleave=function(){dd2.style.display="none"};var iconCamera=document.getElementsByClassName("icon-camera")[0],tooltiptext=document.getElementsByClassName("tooltiptext")[0];function getScroll(){return{left:document.body.scrollLeft||document.documentElement.scrollLeft,top:document.body.scrollTop||document.documentElement.scrollTop}}iconCamera.onmouseenter=function(){tooltiptext.style.display="block"},iconCamera.onmouseleave=function(){tooltiptext.style.display="none"};var ehsyNavleft=document.getElementsByClassName("ehsy-nav-left")[0],shang=ehsyNavleft.children[0].children[8],xia=ehsyNavleft.children[0].children[9],ul5=ehsyNavleft.children[0];ul5.children[0].onclick=function(){$("html").animate({scrollTop:895},1e3,"linear"),ul5.children[0].style.background="rgb(58, 189, 89)",ul5.children[0].style.color="#fff",ul5.children[1].style.background="#fff",ul5.children[1].style.color="#333",ul5.children[2].style.background="#fff",ul5.children[2].style.color="#333",ul5.children[3].style.background="#fff",ul5.children[3].style.color="#333",ul5.children[4].style.background="#fff",ul5.children[4].style.color="#333",ul5.children[5].style.background="#fff",ul5.children[5].style.color="#333",ul5.children[6].style.background="#fff",ul5.children[6].style.color="#333",ul5.children[7].style.background="#fff",ul5.children[7].style.color="#333"},ul5.children[1].onclick=function(){$("html").animate({scrollTop:1491},1e3,"linear"),ul5.children[1].style.background="rgb(93, 162, 236)",ul5.children[1].style.color="#fff",ul5.children[0].style.background="#fff",ul5.children[0].style.color="#333",ul5.children[2].style.background="#fff",ul5.children[2].style.color="#333",ul5.children[3].style.background="#fff",ul5.children[3].style.color="#333",ul5.children[4].style.background="#fff",ul5.children[4].style.color="#333",ul5.children[5].style.background="#fff",ul5.children[5].style.color="#333",ul5.children[6].style.background="#fff",ul5.children[6].style.color="#333",ul5.children[7].style.background="#fff",ul5.children[7].style.color="#333"},ul5.children[2].onclick=function(){$("html").animate({scrollTop:2087},1e3,"linear"),ul5.children[0].style.background="#fff",ul5.children[0].style.color="#333",ul5.children[1].style.background="#fff",ul5.children[1].style.color="#333",ul5.children[2].style.background="rgb(13, 173, 199)",ul5.children[2].style.color="#fff",ul5.children[3].style.background="#fff",ul5.children[3].style.color="#333",ul5.children[4].style.background="#fff",ul5.children[4].style.color="#333",ul5.children[5].style.background="#fff",ul5.children[5].style.color="#333",ul5.children[6].style.background="#fff",ul5.children[6].style.color="#333",ul5.children[7].style.background="#fff",ul5.children[7].style.color="#333"},ul5.children[3].onclick=function(){$("html").animate({scrollTop:2683},1e3,"linear"),ul5.children[0].style.background="#fff",ul5.children[0].style.color="#333",ul5.children[1].style.background="#fff",ul5.children[1].style.color="#333",ul5.children[2].style.background="#fff",ul5.children[2].style.color="#333",ul5.children[3].style.background="rgb(38, 192, 166)",ul5.children[3].style.color="#fff",ul5.children[4].style.background="#fff",ul5.children[4].style.color="#333",ul5.children[5].style.background="#fff",ul5.children[5].style.color="#333",ul5.children[6].style.background="#fff",ul5.children[6].style.color="#333",ul5.children[7].style.background="#fff",ul5.children[7].style.color="#333"},ul5.children[4].onclick=function(){$("html").animate({scrollTop:3279},1e3,"linear"),ul5.children[0].style.background="#fff",ul5.children[0].style.color="#333",ul5.children[1].style.background="#fff",ul5.children[1].style.color="#333",ul5.children[2].style.background="#fff",ul5.children[2].style.color="#333",ul5.children[3].style.background="#fff",ul5.children[3].style.color="#333",ul5.children[4].style.background="rgb(108, 150, 198)",ul5.children[4].style.color="#fff",ul5.children[5].style.background="#fff",ul5.children[5].style.color="#333",ul5.children[6].style.background="#fff",ul5.children[6].style.color="#333",ul5.children[7].style.background="#fff",ul5.children[7].style.color="#333"},ul5.children[5].onclick=function(){$("html").animate({scrollTop:3875},1e3,"linear"),ul5.children[0].style.background="#fff",ul5.children[0].style.color="#333",ul5.children[1].style.background="#fff",ul5.children[1].style.color="#333",ul5.children[2].style.background="#fff",ul5.children[2].style.color="#333",ul5.children[3].style.background="#fff",ul5.children[3].style.color="#333",ul5.children[4].style.background="#fff",ul5.children[4].style.color="#333",ul5.children[5].style.background="rgb(180, 158, 128)",ul5.children[5].style.color="#fff",ul5.children[6].style.background="#fff",ul5.children[6].style.color="#333",ul5.children[7].style.background="#fff",ul5.children[7].style.color="#333"},ul5.children[6].onclick=function(){$("html").animate({scrollTop:4471},1e3,"linear"),ul5.children[0].style.background="#fff",ul5.children[0].style.color="#333",ul5.children[1].style.background="#fff",ul5.children[1].style.color="#333",ul5.children[2].style.background="#fff",ul5.children[2].style.color="#333",ul5.children[3].style.background="#fff",ul5.children[3].style.color="#333",ul5.children[4].style.background="#fff",ul5.children[4].style.color="#333",ul5.children[5].style.background="#fff",ul5.children[5].style.color="#333",ul5.children[6].style.background="rgb(58, 135, 170)",ul5.children[6].style.color="#fff",ul5.children[7].style.background="#fff",ul5.children[7].style.color="#333"},ul5.children[7].onclick=function(){$("html").animate({scrollTop:5067},1e3,"linear"),ul5.children[0].style.background="#fff",ul5.children[0].style.color="#333",ul5.children[1].style.background="#fff",ul5.children[1].style.color="#333",ul5.children[2].style.background="#fff",ul5.children[2].style.color="#333",ul5.children[3].style.background="#fff",ul5.children[3].style.color="#333",ul5.children[4].style.background="#fff",ul5.children[4].style.color="#333",ul5.children[5].style.background="#fff",ul5.children[5].style.color="#333",ul5.children[6].style.background="#fff",ul5.children[6].style.color="#333",ul5.children[7].style.background="rgb(212, 157, 123)",ul5.children[7].style.color="#fff"},shang.onclick=function(){$("html").animate({scrollTop:0},1e3,"linear")},xia.onclick=function(){$("html").animate({scrollTop:6282},1e3,"linear")};var jsTopfixbar=document.getElementById("js-top-fix-bar");window.onscroll=function(){var l=getScroll().top;console.log(l),l<=200&&(ehsySidebarfooter.style.display="none",jsTopfixbar.style.display="none",ehsyNavleft.style.display="none"),200<(l<600)&&(ehsySidebarfooter.style.display="block"),600<=l&&(ehsySidebarfooter.style.display="block",jsTopfixbar.style.display="block"),l<=600&&(ehsySidebarfooter.style.display="block",jsTopfixbar.style.display="none",ehsyNavleft.style.display="none"),895<=l&&(ehsyNavleft.style.display="block")};var friendship=document.getElementsByClassName("friendship-links-more-sw")[0];console.log(friendship);var friendshipLINK=document.getElementsByClassName("friendship-links-more")[0],friendshipLINK1=document.getElementsByClassName("friendship-links-more")[1],friendshipLINK2=document.getElementsByClassName("friendship-links-more")[2];friendship.onclick=function(){friendshipLINK.style.display="block",friendshipLINK1.style.display="block",friendshipLINK2.style.display="block"},friendship.onmousedown=function(){friendshipLINK.style.display="none",friendshipLINK1.style.display="none",friendshipLINK2.style.display="none"};for(var slider=document.getElementById("slider"),ul1=slider.children[1],Lis=slider.children[0].children,width=slider.offsetWidth,timer=null,index=0,i=0;i<Lis.length;i++)Lis[i].style.left=width+"px";function light(){for(var l=slider.children[1].children,e=0;e<l.length-2;e++)l[e].className="ab";l[index].className="ab current"}function nextImg(){var l=index+1;l>Lis.length-1&&(l=0),Lis[l].style.left=width+"px",animation(Lis[index],{left:-width}),animation(Lis[l],{left:0}),index=l,light()}function prevImg(){var l=index-1;l<0&&(l=Lis.length-1),Lis[l].style.left=-width+"px",animation(Lis[index],{left:width}),animation(Lis[l],{left:0}),index=l,light()}Lis[index].style.left=0,light(),ul1.onclick=function(l){var e=(l=window.event||l).target||l.srcElement;if(console.log(e),"page prev"==e.className)console.log(e),prevImg();else if("page next"==e.className)nextImg();else if("ab"==e.className){var t=parseInt(e.innerHTML);t<index?(Lis[t].style.left=-width+"px",animation(Lis[index],{left:width}),animation(Lis[t],{left:0})):index<t&&(Lis[t].style.left=width+"px",animation(Lis[index],{left:-width}),animation(Lis[t],{left:0})),index=t,light()}},timer=setInterval(nextImg,3e3),slider.onmouseenter=function(){clearInterval(timer)},slider.onmouseleave=function(){clearInterval(timer),timer=setInterval(nextImg,3e3)};var ehsySidebarfooter=document.getElementsByClassName("ehsy-sidebar-footer")[0],span1=ehsySidebarfooter.children[1],i1=ehsySidebarfooter.children[0];ehsySidebarfooter.onmouseenter=function(){i1.style.display="none",span1.style.display="block"},ehsySidebarfooter.onmouseleave=function(){i1.style.display="block",span1.style.display="none"},ehsySidebarfooter.onclick=function(){$("html").animate({scrollTop:0},1e3,"linear")};var jstabs0=document.getElementsByClassName("js-tabs-0")[0],jstabs1=document.getElementsByClassName("js-tabs-1")[0],icontabbtns=document.getElementsByClassName("icon-tab-btns"),act=icontabbtns[0].children[0],act1=icontabbtns[0].children[1];act.onclick=function(){jstabs0.style.display="block",jstabs1.style.display="none",act.className="active js-tabs-title",act1.className=" js-tabs-title"},act1.onclick=function(){jstabs0.style.display="none",jstabs1.style.display="block",act1.className="active js-tabs-title",act.className=" js-tabs-title"};var jstabs2=document.getElementsByClassName("js-tabs-0")[1],jstabs3=document.getElementsByClassName("js-tabs-1")[1],act2=icontabbtns[1].children[0],act3=icontabbtns[1].children[1];act2.onclick=function(){jstabs2.style.display="block",jstabs3.style.display="none",act2.className="active js-tabs-title",act3.className=" js-tabs-title"},act3.onclick=function(){jstabs2.style.display="none",jstabs3.style.display="block",act3.className="active js-tabs-title",act2.className=" js-tabs-title"};var jstabs4=document.getElementsByClassName("js-tabs-0")[2],jstabs5=document.getElementsByClassName("js-tabs-1")[2],act4=icontabbtns[2].children[0],act5=icontabbtns[2].children[1];act4.onclick=function(){jstabs4.style.display="block",jstabs5.style.display="none",act4.className="active js-tabs-title",act5.className=" js-tabs-title"},act5.onclick=function(){jstabs4.style.display="none",jstabs5.style.display="block",act5.className="active js-tabs-title",act4.className=" js-tabs-title"};var jstabs6=document.getElementsByClassName("js-tabs-0")[3],jstabs7=document.getElementsByClassName("js-tabs-1")[3],act6=icontabbtns[3].children[0],act7=icontabbtns[3].children[1];act6.onclick=function(){jstabs6.style.display="block",jstabs7.style.display="none",act6.className="active js-tabs-title",act7.className=" js-tabs-title"},act7.onclick=function(){jstabs6.style.display="none",jstabs7.style.display="block",act7.className="active js-tabs-title",act6.className=" js-tabs-title"};var jstabs8=document.getElementsByClassName("js-tabs-0")[4],jstabs9=document.getElementsByClassName("js-tabs-1")[4],act8=icontabbtns[4].children[0],act9=icontabbtns[4].children[1];act8.onclick=function(){jstabs8.style.display="block",jstabs9.style.display="none",act8.className="active js-tabs-title",act9.className=" js-tabs-title"},act9.onclick=function(){jstabs8.style.display="none",jstabs9.style.display="block",act9.className="active js-tabs-title",act8.className=" js-tabs-title"};var headerLeft=document.getElementsByClassName("header-left")[0],zhuce1=headerLeft.children[2];zhuce1.onclick=function(){window.location.href="./zhuce.html"};var headerleft=document.getElementsByClassName("header-left")[0];console.log(localStorage.getItem("un")),localStorage.getItem("un")&&(headerleft.children[0].innerHTML="欢迎",headerleft.children[1].remove(),headerleft.children[1].innerHTML=localStorage.getItem("un"));