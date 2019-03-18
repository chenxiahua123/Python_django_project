
$(document).ready(function(){
	console.log(99999999999999999999999999999)
	//获取cookie
	var cookies=$.cookie("cart");
	cookies=JSON.parse(cookies);
	console.log(cookies);
	for (var i=0;i<cookies.length;i++) {
		var goodslist=cookies[i];
		console.log(goodslist);
		var goodspicture=goodslist.picture;
		console.log(goodspicture);
		var showimg=("<img src='"+goodspicture+"'/>");
		$(".showimgbox").append(showimg);
		$(".bigarea").append(showimg);
		$(".clearfix1 li").append(showimg);
		$(".product_title").html(goodslist.name);
		var goodsprice=goodslist.price;
		$(".current_price").html(goodsprice);
		var lastprice=goodslist.lastprice;
		$(".market_price").html(lastprice);
	}
	
	//head动态效果
	$('.goods-nav div').hover(function(){
		var index=$(this).index();
		$(this).parent().next('.goods-detail').children('div').eq(index).show().siblings().hide();
	})
	
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
	
	
	//放大镜
	var _smallImg = $(".showimgbox"); //小图
	var _bigImg = $(".bigarea img"); //大图
	var _smallArea = $(".showimgbox b"); //小区域
	var _bigArea = $(".bigarea"); //大区域
	_smallArea.width( _smallImg.width() / _bigImg.width() * _bigArea.width() );
	_smallArea.height( _smallImg.height() / _bigImg.height() * _bigArea.height() );
	var scale = _bigImg.width() / _smallImg.width();//比例
	$(document).mousemove(function(e){
		var leftSide = _smallImg.offset().left; //小图左边界
		var rightSide = leftSide + _smallImg.width(); //右边界
		var topSide = _smallImg.offset().top; //上边界
		var bottomSide = topSide + _smallImg.height(); //下边界
		if (e.pageX > leftSide && e.pageX < rightSide && e.pageY > topSide && e.pageY < bottomSide) {
			//显示小区域
			_smallArea.css("display", "block");
			_bigArea.show();
			var x = e.pageX - _smallImg.offset().left - _smallArea.width()/2;
			var y = e.pageY - _smallImg.offset().top - _smallArea.height()/2;
			//如果超出左边界, 则设置x为0
			if (x < 0) {
				x = 0;
			}
			//如果超出右边界, 则设置为右边界位置的值
			else if ( x > _smallImg.width()-_smallArea.width() ) {
				x = _smallImg.width()-_smallArea.width();
			}
			//如果超出上边界, 则最小为0
			if (y < 0) {
				y = 0;
			}
			//如果超出下边界, 则设置为下边界位置的值
			else if ( y > _smallImg.height()-_smallArea.height() ) {
				y = _smallImg.height()-_smallArea.height();
			}
			//移动小区域
			_smallArea.css({left: x, top: y});
			//移动大图的位置
			_bigImg.css({left: -x*scale, top:-y*scale});
		}
		else {
			//隐藏小区域
			_smallArea.css("display", "none");
			_bigArea.hide();
		}
	})
	
	//小图切换
	$(".litimgul li a img").mouseenter(function(){
		var location_img=$(this).attr("src");
		$(".showimgbox img").attr("src",location_img);
		$(".bigarea img").attr("src",location_img);
	})
	$(".prevent").click(function(){
//		var _left=$(".litimgul").css().left();
//		console.log(_left);
		$(".litimgul").animate({"left":"-80px"});
	})
	$(".next").click(function(){
		console.log(1);
		$(".litimgul").animate({"left":"0px"});
	})
	
	$(".clearfix1 li").click(function(){
		$(".clearfix1 li").css("border","2px solid #d22147");
	})
	$(".clearfix2 li").click(function(){
		$(this).css("border","2px solid #d22147").siblings().css("border","1px solid #333");
	})
	var a=1
	$(".raduce").click(function(){
		a--;
		if(a<=1){
			a=1;
		}else if (a>10) {
			a=10;
		};
		$(".ctrnum").prop("value",a);
	})
	$(".add").click(function(){
		a++;
		if(a<=1){
			a=1;
		}else if (a>10) {
			a=10;
		};
		$(".ctrnum_wrap .ctrnum").prop("value",a);
	})
	//立即购买

	
	//添加购物车





})
