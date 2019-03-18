$(function(){
	//图片轮播
	$.getJSON("date/banner.json",function(responsedate){
		console.log(responsedate);
		var datelist=responsedate;
		for(var i=0;i<datelist.length;i++){
			var obj=datelist[i];
			
			//创建li
			var bannerli=$("<li></li>");
			var bannerli2=$("<li></li>");
			//创建图片
			var bannerImg=$("<img>");
			//给图片添加地址
			bannerImg.attr({src:obj.img})
			//吧图片添加进li
			bannerli.append(bannerImg);
			//把li添加进ul
			var list1=$(".list1");
			var list2=$(".list2");
			list1.append(bannerli);
			list2.append(bannerli2);
	}
		//添加动态效果
		var _li1=$(".list1 li");
		var _li2=$(".list2 li");
		var size=_li1.size();
		var size1=_li2.size();
		console.log(size);
		var i=0;
		_li1.eq(0).show().siblings().hide();
		_li2.eq(0).addClass("active");
		var timer=setInterval(function(){
			i++;
			move();
		},2000)
		function move(){
			if(i==size){
				i=0;
			}
			_li1.eq(i).stop().fadeIn().siblings().fadeOut();
			_li2.eq(i).stop().addClass("active").siblings().removeClass()
		}
		$(".banner").hover(function(){
			$(".prevent").css("display","block");
			$(".next").css("display","block");
		},
		function(){
			$(".prevent").css("display","none");
			$(".next").css("display","none");
		})
		
		_li2.mouseover(function(){
			var index=$(this).index();
			i=index;
			move();
		})
		
		$(".banner").hover(function(){
			clearInterval(timer);
		},
		function(){
			timer=setInterval(function(){
				i++;
				move();
			},2000);
		})
		$(".prevent").click(function(){
			i--;
			move();
		})
		$(".next").click(function(){
			i++;
			move();
		})
	})

	//推荐栏图片
	$.getJSON("date/tuijian.json",function(responsedate){
		console.log(responsedate);
		var datelist1=responsedate;
		for(var i=0;i<datelist1.length;i++){
			var obj1=datelist1[i];
			var tuijianimg=$("<img>");
			tuijianimg.attr({src:obj1.img});
			$(".tuijian").append(tuijianimg);
		}
	})
	
	
	//mian_4_1滑入切换
	//添加商品
	$.getJSON("date/mian_4_2.json",function(responsedate){
		var datelist2=responsedate.brand1;
		console.log(datelist2);
		for (var i=0;i<datelist2.length;i++) {
			var obj2=datelist2[i];
			var div1=$("<div class=brand_rec></div>");//创建div
			var bigimg=$("<a href='' class=brandimg><img src='"+obj2.bigpic+"'/></a>");//创建图片a标签
			var massge=$("<a class=branddesc></a>");//创建信息a标签
			div1.append(bigimg);//图片a标签添加入div
			var smlimg=$("<div class=smlimg><img src='"+obj2.smlpic+"'/></div>");
			var p1=$("<p class=p1>"+obj2.title+"</p>");
			var p2=$("<p class=p2>"+obj2.describe+"</p>");
			var brandbtn=$("<span class=brandbtn>进入品牌</span>");//创建a标签内容
			massge.append(p1);
			massge.append(p2);
			massge.append(smlimg);
			massge.append(brandbtn);
			div1.append(massge);//信息a标签添加入div
			$(".mian_4_2").eq(0).append(div1);
		}
	})
	
	$.getJSON("date/mian_4_2.json",function(responsedate){
		var datelist2=responsedate.brand2;
		console.log(datelist2);
		for (var i=0;i<datelist2.length;i++) {
			var obj2=datelist2[i];
			var div1=$("<div class=brand_rec></div>");//创建div
			var bigimg=$("<a href='' class=brandimg><img src='"+obj2.bigpic+"'/></a>");//创建图片a标签
			var massge=$("<a class=branddesc></a>");//创建信息a标签
			div1.append(bigimg);//图片a标签添加入div
			var smlimg=$("<div class=smlimg><img src='"+obj2.smlpic+"'/></div>");
			var p1=$("<p class=p1>"+obj2.title+"</p>");
			var p2=$("<p class=p2>"+obj2.describe+"</p>");
			var brandbtn=$("<span class=brandbtn>进入品牌</span>");//创建a标签内容
			massge.append(p1);
			massge.append(p2);
			massge.append(smlimg);
			massge.append(brandbtn);
			div1.append(massge);//信息a标签添加入div
			$(".mian_4_2").eq(1).append(div1);
		}
	})
	
	$.getJSON("date/mian_4_2.json",function(responsedate){
		var datelist2=responsedate.brand3;
		console.log(datelist2);
		for (var i=0;i<datelist2.length;i++) {
			var obj2=datelist2[i];
			var div1=$("<div class=brand_rec></div>");//创建div
			var bigimg=$("<a href='' class=brandimg><img src='"+obj2.bigpic+"'/></a>");//创建图片a标签
			var massge=$("<a class=branddesc></a>");//创建信息a标签
			div1.append(bigimg);//图片a标签添加入div
			var smlimg=$("<div class=smlimg><img src='"+obj2.smlpic+"'/></div>");
			var p1=$("<p class=p1>"+obj2.title+"</p>");
			var p2=$("<p class=p2>"+obj2.describe+"</p>");
			var brandbtn=$("<span class=brandbtn>进入品牌</span>");//创建a标签内容
			massge.append(p1);
			massge.append(p2);
			massge.append(smlimg);
			massge.append(brandbtn);
			div1.append(massge);//信息a标签添加入div
			$(".mian_4_2").eq(2).append(div1);
		}
	})
	
	$.getJSON("date/mian_4_2.json",function(responsedate){
		var datelist2=responsedate.brand4;
		console.log(datelist2);
		for (var i=0;i<datelist2.length;i++) {
			var obj2=datelist2[i];
			var div1=$("<div class=brand_rec></div>");//创建div
			var bigimg=$("<a href='' class=brandimg><img src='"+obj2.bigpic+"'/></a>");//创建图片a标签
			var massge=$("<a class=branddesc></a>");//创建信息a标签
			div1.append(bigimg);//图片a标签添加入div
			var smlimg=$("<div class=smlimg><img src='"+obj2.smlpic+"'/></div>");
			var p1=$("<p class=p1>"+obj2.title+"</p>");
			var p2=$("<p class=p2>"+obj2.describe+"</p>");
			var brandbtn=$("<span class=brandbtn>进入品牌</span>");//创建a标签内容
			massge.append(p1);
			massge.append(p2);
			massge.append(smlimg);
			massge.append(brandbtn);
			div1.append(massge);//信息a标签添加入div
			$(".mian_4_2").eq(3).append(div1);
		}
	})
	
	$.getJSON("date/mian_4_2.json",function(responsedate){
		var datelist2=responsedate.brand3;
		console.log(datelist2);
		for (var i=0;i<datelist2.length;i++) {
			var obj2=datelist2[i];
			var div1=$("<div class=brand_rec></div>");//创建div
			var bigimg=$("<a href='' class=brandimg><img src='"+obj2.bigpic+"'/></a>");//创建图片a标签
			var massge=$("<a class=branddesc></a>");//创建信息a标签
			div1.append(bigimg);//图片a标签添加入div
			var smlimg=$("<div class=smlimg><img src='"+obj2.smlpic+"'/></div>");
			var p1=$("<p class=p1>"+obj2.title+"</p>");
			var p2=$("<p class=p2>"+obj2.describe+"</p>");
			var brandbtn=$("<span class=brandbtn>进入品牌</span>");//创建a标签内容
			massge.append(p1);
			massge.append(p2);
			massge.append(smlimg);
			massge.append(brandbtn);
			div1.append(massge);//信息a标签添加入div
			$(".mian_4_2").eq(4).append(div1);
		}
	})
	
	$.getJSON("date/mian_4_2.json",function(responsedate){
		var datelist2=responsedate.brand2;
		console.log(datelist2);
		for (var i=0;i<datelist2.length;i++) {
			var obj2=datelist2[i];
			var div1=$("<div class=brand_rec></div>");//创建div
			var bigimg=$("<a href='' class=brandimg><img src='"+obj2.bigpic+"'/></a>");//创建图片a标签
			var massge=$("<a class=branddesc></a>");//创建信息a标签
			div1.append(bigimg);//图片a标签添加入div
			var smlimg=$("<div class=smlimg><img src='"+obj2.smlpic+"'/></div>");
			var p1=$("<p class=p1>"+obj2.title+"</p>");
			var p2=$("<p class=p2>"+obj2.describe+"</p>");
			var brandbtn=$("<span class=brandbtn>进入品牌</span>");//创建a标签内容
			massge.append(p1);
			massge.append(p2);
			massge.append(smlimg);
			massge.append(brandbtn);
			div1.append(massge);//信息a标签添加入div
			$(".mian_4_2").eq(5).append(div1);
		}
	})	
	
	$.getJSON("date/mian_4_2.json",function(responsedate){
		var datelist2=responsedate.brand1;
		console.log(datelist2);
		for (var i=0;i<datelist2.length;i++) {
			var obj2=datelist2[i];
			var div1=$("<div class=brand_rec></div>");//创建div
			var bigimg=$("<a href='' class=brandimg><img src='"+obj2.bigpic+"'/></a>");//创建图片a标签
			var massge=$("<a class=branddesc></a>");//创建信息a标签
			div1.append(bigimg);//图片a标签添加入div
			var smlimg=$("<div class=smlimg><img src='"+obj2.smlpic+"'/></div>");
			var p1=$("<p class=p1>"+obj2.title+"</p>");
			var p2=$("<p class=p2>"+obj2.describe+"</p>");
			var brandbtn=$("<span class=brandbtn>进入品牌</span>");//创建a标签内容
			massge.append(p1);
			massge.append(p2);
			massge.append(smlimg);
			massge.append(brandbtn);
			div1.append(massge);//信息a标签添加入div
			$(".mian_4_2").eq(6).append(div1);
		}
	})	
	//滑动效果
	$(".mian_4_1 td").hover(function(){
		var index=$(this).index();
		console.log(index);
		$(".mian_4_2").eq(index).show().siblings().hide();
	})
	
	$(".brandimg img").hover(function(){
		console.log(1);
	})
	
	$.getJSON("date/rexiao.json",function(responsedate){
		console.log(responsedate);
		var datelist3=responsedate;
		for(var i=0;i<datelist3.length;i++){
			var obj3=datelist3[i];
			var div1=$("<div class='goods1-detail-1'></div>");
			var goodsdl=$("<dl></dl>");
			goodsdl.appendTo(div1);
			var goodsdt=$("<dt><img src='"+obj3.goodsimg+"'></img></dt>");
			goodsdt.appendTo(goodsdl);
			var goodsdd=$("<dd></dd>");
			var a1=$("<a><span class='goods-name'>"+obj3.name+"</span></a>");
			a1.attr({href:'#'});
			a1.appendTo(goodsdd);
			var p1=$("<p class='goods-text'>"+obj3.descript+"</p>");
			p1.appendTo(goodsdd);
			var oneprice=$("<i class='tagitem'>"+obj3.discunt+"</i>");
			oneprice.appendTo(goodsdd);
			var span3=$("<span class='w-price'>"+obj3.price+"<del class=delpric>市场价"+obj3.lastprice+"</del></span>");
			span3.appendTo(goodsdd);
			var a2=$("<a class='car-btn-1'>立即购买</a>");
			a2.attr({href:""});
			a2.appendTo(goodsdd);
			goodsdd.appendTo(goodsdl);
			div1.appendTo($(".mian_6"));//div添加到页面
		}
	})
//	$(".goods_name").click(function(){
//		var goodslist=[];
//		var goods1={};
//		goods1.name=obj4.name;
//		goods1.picture=obj4.goodsimg;
//		goods1.price=obj4.price;
//		goods1.lastprice=obj4.lastprice;
//		goods1.country=obj4.country;
//		goodslist.push(goods1);
//		$.cookie("cookie2",JSON.stringify(goodslist),{expires:1,path:"/"});
//		console.log(1);
//	})
	
	$.getJSON("date/goods_detail-2.json",function(responsedate){
		var datelist4=responsedate;
		for(var i=0;i<datelist4.length;i++){
			var obj4=datelist4[i];
			var div4=$("<div class='goods'></div>");
			var goodsimg=$("<a  class=goodsimg><img src='"+obj4.goodsimg+"'></a>");
			div4.append(goodsimg);
			var goodsmsg=$("<div class=proinfo></div>");
			
			var goods_name=$("<a class='goods_name'>"+obj4.name+"</a>");
			var goods_discript=$("<p class='goods_discript'>"+obj4.descript+"</p>");
			var goods_price=$("<span class='goods_price'>"+obj4.price+"</span><del class=last_price>市场价"+obj4.lastprice+"</del>");
//			var goods_id=$("<span class='goodsId' style='display: none;'>"+obj4.id"</span>");
			goodsmsg.append(goods_name);
			goodsmsg.append(goods_discript);
			goodsmsg.append(goods_price);
//			goodsmsg.append(goods_id);	
			div4.append(goodsmsg);
			$(".mian_8").append(div4);
		}
	})
	
	$(".mian_8").on("click",".goods",function(){
		console.log($(this));
		var goodslist=[];
		var goods1={};
		goods1.picture=$(this).find(".goodsimg img").attr("src");
		goods1.name=$(this).find(".proinfo").find(".goods_name").html();
		goods1.price=$(this).find(".proinfo").find(".goods_price").html();
		goods1.lastprice=$(this).find(".proinfo").find(".last_price").html();
		goodslist.push(goods1);
		$.cookie("cart",JSON.stringify(goodslist),{expires:7,path:"/"});
		window.location.href="shop.html";
	})
	
	
	
	
	
	
	$(window).scroll(function(){
		var _top=$(".footer").offset().top-500;
//		console.log(_top);
		var _scrolltop=$(document).scrollTop();
//		console.log(_scrolltop);
		if (_scrolltop>575) {
			$(".right-nav").css("display","block");
		}else{
			$(".right-nav").css("display","none");
		}
		if(_scrolltop>_top){
			$(".right-nav").css({"position":"absolute","top":_top});
		}else{
			$(".right-nav").css({"position":"fixed","top":0});
		}
	})
	
	
//	$(".right-nav ul li").click(function(){
//		var _index=$(this).index();
//		var _top1=$(".mian_1").offset().top;
//		var _top2=$(".mian_2").offset().top;
//		var _top3=$(".mian_3").offset().top;
//		var _top4=$(".mian_6").offset().top;
//		var _top5=$(".mian_7").offset().top;
//		ismove=true;
//		$("html body").stop().animate({scrollTop:_top},100);
//	})
	
	
	
	
})