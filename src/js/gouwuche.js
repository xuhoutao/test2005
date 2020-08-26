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

  //增加一行 
    var productcart=document.getElementsByClassName("product-cart")
    var imgb=document.getElementsByClassName('mod-recommend-img')//所有图片
    var productname=document.getElementsByClassName("product-name")//所有机型
    var productnum=document.getElementsByClassName("product-num")//订单号的主体
    //var spans=productnum[0].children[0]
    var ehsyyen=document.getElementsByClassName("ehsy-yen")//所有价格
    for(var i=0;i<productcart.length;i++){
        productcart[i].onclick=function(){
            index=this.getAttribute('index')
            var div=document.createElement("div")
            div.setAttribute("class","product-list-body")
            div.innerHTML=
            '<ul class="cart-line clearfix">'
                        +'<li class="td_1">'
                                +'<input class="check-box-center" type="checkbox" name="keys[]" value="MAB675" >'
                                +'<a href="https://www.ehsy.com/product-MAB675">'+'<img src="'+imgb[index].getAttribute('src')+'"></a>'
                            +'</li>'
                +'<li class="td_2">'
                    +'<a href="https://www.ehsy.com/product-MAB675"><p class="product-title color-green">'+productname[index].innerHTML+'</p></a>'
                    +'<p class="color-green">西域订货号：<span>'+productnum[index].children[0].innerHTML+'</span></p>'
                    +'<p class="color-gray">最小订货量：<span>1把</span></p>'
                                                +'<p class="color-gray"><span>预计出货日：4个工作日</span></p>'
                                                +'<p class="color-gray">客户物料编码：<span><input class="upn-MAB675" style="border: 1px solid rgb(238,238,238)" type="text" name="user_product_no" value="" maxlength="40" disabled="true"></span>'
                    +'<a class="update-upn" >修改</a>'
                    +'</p>'
                +'</li>'
        
                        +'<li class="td_3">'
                    +'<p>'+ehsyyen[index].innerHTML+'</p>'
                +'</li>'
                        +'<li class="td_4">'
                                +'<div class="clearfix">'
                        +'<input class="a-sub disable-sub" type="button"  value="-" onclick="fn5(this)">'
                        +'<input type="text" id="shopcart_MAB675_quantity" name="qty[MAB675]" value="1" class="item-num-input"  orinum="1">'
                        +'<input class="a-add" type="button"  value="+" onclick="fn4(this)">'
                    +'</div>'
                    
                            +'</li>'
                +'<li class="td_5">'+ehsyyen[index].innerHTML+'</li>'
                +'<li class="td_6">'
                        +'<a class="product-favorite">加入收藏</a>'
                        +'<a class="product-remove js-cart-product-remove" sku_code="MAB675">删除</a></li>'
            +'</ul>'
            //获取要插入的位子
         var subcontent=document.getElementsByClassName("sub-content")[0]
            //将新节点插入
            subcontent.parentNode.insertBefore(div,subcontent)
        }
    }
    //获取第一个全选对象
    var quan=document.getElementsByName('quanxuan')[0] 
    //获取所有选框对象
    var inps=document.getElementsByName('keys[]')
    //获取父级元素
    var layoutcart=document.getElementsByClassName('layout-cart')[0]
   //获取所有的数量输入框
    var inputs=document.getElementsByClassName('item-num-input')
    //获取最后一行要改变的对象
    var foot=document.querySelector('.price-main')
     //总计
     function total(){
        //总价
        var sum=0
        //遍历出所有的数据
        for(var i=0;i<inps.length;i++){
            //判断当前对象是否被选中
            if(inps[i].checked){
                //获取当前商品的小计
                var zis=inps[i].parentNode.parentNode.children
                var price=zis[zis.length-2].innerHTML
                var str=price;
                var c=str.substr(1)
                sum+=parseFloat(c)
                
            }
        }
        //把计算结果赋值给总计位置
         var sum=sum.toFixed(1)
        var su='¥'+sum
        foot.lastElementChild.innerHTML=su
    }
     //统计选中的商品的件数
    function Number1(){
        var d=0 //所有商品的数量
        //判断商品是否被选中
        for(var i=0;i<inps.length;i++){
            if(inps[i].checked){
                //获取输入框中的数量
                var num=inps[i].parentNode.parentNode.children[3].children[0].children[1].value
                d+=parseInt(num)
            }
        }
        //获取foot对象中所有的span标签对象
        foot.children[0].children[0].innerHTML=d

    } 
//加法
function fn4(btn){
    //获得输入框的值
    var a=btn.previousElementSibling.value
    a++
    //将新的值重新赋值给输入框
    btn.previousElementSibling.value=a
    //获取单价
    var b=btn.parentNode.parentNode.previousElementSibling.children[0].innerHTML 
    var str=b;
    var c=str.substr(1)
    //计算小计
    var sum=parseFloat(a)*parseFloat(c)
    var sum=sum.toFixed(1)
    su='¥'+ sum
    console.log(su)
    //将小计的值赋值给小计
    btn.parentNode.parentNode.nextElementSibling.innerHTML=su
}
//减法
function fn5(btn){
    //获取输入框的值
    var a=btn.nextElementSibling.value
    if(a<=1){
        a=1
    }else{
        a--
    }
    //将新的值重新赋值给输入框
    btn.nextElementSibling.value=a
    //获取单价
    var b=btn.parentNode.parentNode.previousElementSibling.children[0].innerHTML 
    var str=b;
    var c=str.substr(1)
    //计算小计
    var sum=parseFloat(a)*parseFloat(c)
    var sum=sum.toFixed(1)
    su='¥'+ sum

    //将小计的值赋值给小计
    btn.parentNode.parentNode.nextElementSibling.innerHTML=su
}
    total()
    Number1()  

//将点击事件,都委托给父级元素
layoutcart.onclick=function(e){
    var e = e || event;
    var target = e.target || e.srcElement;
    //判断点击的是不是删除
      if( target.className == "product-remove js-cart-product-remove"){
      layoutcart.removeChild(target.parentNode.parentNode.parentNode)
  }
    //判断点击的是否是全删按钮
     if(target.className=='btn-delete'){
         //遍历所有商品
         for(var i=inps.length-1;i>=0;i--){
         //判断当前商品是否被选中
         if(inps[i].checked){
            //获取要删除的商品
         var goods=inps[i].parentNode.parentNode.parentNode
            //根据父节点来删除当前子元素
           //goods.parentNode.removeChild(goods)
            goods.remove()
             }
        }
     }
  //判断点击的是否是全选框
   if(target.getAttribute('name')=='quanxuan'){
    //遍历所有的选中框
    for(var i in inps){
        //判断全选框是否被选中
        if(target.checked){
            inps[i].checked=true
        }else{
            inps[i].checked=false
         }
     }
  }
     //判断点击的是否是选中框
     if(target.getAttribute('name')=='keys[]'){
        var a=0 //统计选中框选中的次数
        for(var i=0;i<inps.length;i++){
            //判断选中框是否被选中
            if(inps[i].checked){
                a++
            }
        }
        if(a==inps.length){
            quan.checked=true
        }else{
            quan.checked=false
        }
    }
        //判断点击的是否是结算按钮
        if(target.className=='cart-to-checkout-btn js-checkout'){
            //获取总价
            var totalPrice=foot.lastElementChild.innerHTML
            //判断总价是否为0
            if(parseInt(totalPrice)<='0'){
                alert("你还没有购买商品，请重新选择")
            }else{
                //确认框
                if(confirm("你确定要购买这些商品吗？")){
                    alert("已支付："+totalPrice)
                    //遍历所有商品
                    for(var i=inps.length-1;i>=0;i--){
                        //判断当前商品是否被选中
                        if(inps[i].checked){
                            //获取要删除的商品
                            var goods=inps[i].parentNode.parentNode.parentNode
                            //根据父节点来删除当前子元素
                            // goods.parentNode.removeChild(goods)
                            goods.remove()
                        }
                    }
                }else{
                    alert("我现在后悔了，不买了")
                }
            }
        }
    total()
    Number1() 
}
//购物车页面加载的时候,自动将数据库内的数据渲染到页面上
window.onload=function(){
    $.get('../interface/showlist.php',function(data){
        var json=JSON.parse(data);
        console.log(json)//从数据库中获取到的数据(一个对象)
        if(json.code==0){
            alert("购物车空空如也")
        }else{
             //alert('你买的东西是'+JSON.stringify(json.data))
             var json=json.data;//获取一个对象
             console.log(json)
             var str=''
             var div=document.createElement("div")
             div.setAttribute("class","product-list-body")
             json.forEach(function(item){  
                  str+=
            '<ul class="cart-line clearfix">'
                +'<li class="td_1">'
                     +'<input class="check-box-center" type="checkbox" name="keys[]" value="MAB675" >'
                     +'<a href="https://www.ehsy.com/product-MAB675">'+'<img src="'+item.product_img+'"></a>'
                 +'</li>'
                +'<li class="td_2">'
                   +'<a href="https://www.ehsy.com/product-MAB675"><p class="product-title color-green">'+item.product_name+'</p></a>'
                   +'<p class="color-green">西域订货号：<span>'+item.product_id+'</span></p>'
                   +'<p class="color-gray">最小订货量：<span>1把</span></p>'
                   +'<p class="color-gray"><span>预计出货日：4个工作日</span></p>'
                   +'<p class="color-gray">客户物料编码：<span><input class="upn-MAB675" style="border: 1px solid rgb(238,238,238)" type="text" name="user_product_no" value="" maxlength="40" disabled="true"></span>'
                   +'<a class="update-upn" >修改</a>'
                   +'</p>'
               +'</li>'
               +'<li class="td_3">'
                  +'<p>'+item.product_price+'</p>'
               +'</li>'
               +'<li class="td_4">'
                  +'<div class="clearfix">'
                     +'<input class="a-sub disable-sub" type="button"  value="-" onclick="fn5(this)">'
                     +'<input type="text" id="shopcart_MAB675_quantity" name="qty[MAB675]" value="'+item.product_num+'" class="item-num-input"  orinum="1">'
                     +'<input class="a-add" type="button"  value="+" onclick="fn4(this)">'
                  +'</div>'
               +'</li>'
               +'<li class="td_5">'+item.product_price+'</li>'
               +'<li class="td_6">'
                 +'<a class="product-favorite">加入收藏</a>'
                 +'<a class="product-remove js-cart-product-remove" sku_code="MAB675">删除</a>'
               +'</li>'
           +'</ul>'
             })
             div.innerHTML=str
             //获取要插入的位子
          var subcontent=document.getElementsByClassName("sub-content")[0]
             //将新节点插入
             subcontent.parentNode.insertBefore(div,subcontent)
         
         }
      })
}
//欢迎用户
var headerLeft=document.getElementsByClassName("header-left")[0]
console.log(localStorage.getItem('un'))
if(localStorage.getItem('un')){
    headerLeft.children[0].innerHTML="欢迎"
    headerLeft.children[1].remove()
    headerLeft.children[1].innerHTML=localStorage.getItem('un')
}
