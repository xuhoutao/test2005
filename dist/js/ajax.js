"use strict";function ajax(e){var t={url:"",type:"get",async:"true",data:"",chenggong:function(){},shibai:function(){}};for(var n in e)t[n]=e[n];var a=new XMLHttpRequest||new ActiveXObject("Microsoft.XMLHTTP");t.data?"get"==t.type.toLowerCase()?(a.open(t.type,t.url+"?"+t.data,t.async),a.send()):"post"==t.type.toLowerCase()&&(a.open(t.type,t.url,t.async),a.setRequestHeader("content-type","application/x-www-form-urlencoded"),a.send(t.data)):(a.open(t.type,t.url,t.async),a.send()),a.onreadystatechange=function(){4==a.readyState&&(200==a.status?t.chenggong(a.responseText):t.shibai("请求失败"))}}function PromiseAjax(s){return new Promise(function(e,t){var n={url:"",type:"get",async:"true",data:"",chenggong:function(){},shibai:function(){}};for(var a in s)n[a]=s[a];var o=new XMLHttpRequest||new ActiveXObject("Microsoft.XMLHTTP");n.data?"get"==n.type.toLowerCase()?(o.open(n.type,n.url+"?"+n.data,n.async),o.send()):"post"==n.type.toLowerCase()&&(o.open(n.type,n.url,n.async),o.setRequestHeader("content-type","application/x-www-form-urlencoded"),o.send(n.data)):(o.open(n.type,n.url,n.async),o.send()),o.onreadystatechange=function(){4==o.readyState&&(200==o.status?e(o.responseText):t("请求失败"))}})}