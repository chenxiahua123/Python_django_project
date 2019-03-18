$(function(){
	//手机考拉海购
	$(".topnav-left-2").hover(function(){
		$("#tel-ewmimg").show();
	},
	function(){
		$("#tel-ewmimg").hide();	
	})
	
	$(".person-home-1").hover(function(){
		$(".person-home-inner-1").show();
	},
	function(){
		$(".person-home-inner-1").hide();
	})
	
	$(".person-home-2").hover(function(){
		$(".person-home-inner-2").show();
	},
	function(){
		$(".person-home-inner-2").hide();
	})
	$(".person-home-3").hover(function(){
		$(".person-home-inner-3").show();
	},
	function(){
		$(".person-home-inner-3").hide();
	})
	
	
	//导航功能
	$(".nav-box-left-1").hover(function(){
		$(".nav-box-left-2").show();
	},function(){
		$(".nav-box-left-2").hide();
	})
	
	$(".nav-box-left-2").hover(function(){
		$(".nav-box-left-2").show();
	},function(){
		$(".nav-box-left-2").hide();
	})
	
	$(".navliinner").hover(function(){
		$(".nav-box-left-2").show();
	},function(){
		$(".nav-box-left-2").hide();
		$(".nav-box-left-2").hide();
	})
	
	$(".nav-box-left-2-li").hover(function(){
		var index=$(this).index();
		$(".navliinner").eq(index).show().siblings().hide();
	},function(){
		$(".navliinner").hide();
	})
	
	//获取购物车商品详情添加到页面
	var cookie=$.cookie("goods_cart");
	cookie=JSON.parse(cookie);
	for (var i=0;i<cookie.length;i++) {
		var goods=cookie[i];
		var li=$("<li class='goodsitm'></li>");
		var div1=$("<div class='col10'><input type='checkbox' class='u_chk'></div>");
		var div2=$("<div class='col12'><a class='imgwrap'><img src='"+goods.picture+"'/></a><div class='textwrap'><h3 class='goodstit'><a>"+ goods.name+"</a></h3></div></div>")
		var div3=$("<div class='col13'><del class='oldprice'>"+goods.lastprice+"</del><span class='newprice'>"+goods.price+"</span><span class='u_acttag'>特价</span></div>");
		var sumber=Number(goods.num);
		var div4=$("<div class='col14><span class='ctrnum_wrap'><a class='raduce'>-</a><input type='text' value='"+sumber+"' class='ctrnum' /><a class='add'>+</a></span></div>");
		var div5=$("<div class='col15'><span class='sum'>"+123*sumber+"</span></div>");
		var div6=$("<div class='col16'><a class='u_opt'>删除</a><span class='u_opt'>移入我的收藏</span></div>");
		li.append(div1);
		li.append(div2);
		li.append(div3);
		li.append(div4);
		li.append(div5);
		li.append(div6);
		$(".m_goods").append(li);
	}
	$(".u_opt").click(function(){
		$(this).parent().parent().remove();
	})
	
	$(".gobuy").click(function(){
		alert("眼熟，送你了");
		location.href="index.html";
	})
	
	
	
})
