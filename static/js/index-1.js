$(function(){
	// 获取轮播图片
		$.getJSON("data/banner.json",function(bannerData){
			var bannerDataList=bannerData;
			for(var i=0;i<bannerDataList.length;i++){
				var obj=bannerDataList[i];
				// 创建li
				var bannerImg=$("<li></li>")
				var bannerTitle=$("<li></li>")
				// 给li添加css 添加背景图片
				bannerImg.css({background:"url("+obj.img+")no-repeat center top"})
				bannerTitle.html(obj.title)

				var bannerImgList=$('.content_banner_list')
				bannerImgList.append(bannerImg);
				var bannerTitleList=$('.content_banner_title');
				bannerTitleList.append(bannerTitle)

			}

			// 获取轮播图片的ul和li
			var bannerAll=$('.content_banner_list li');
			// 获取轮播标题的li
			var bannerAllTitle=$('.content_banner_title li')

			// 初始化第一张显示
			bannerAll.eq(0).show().siblings().hide();

			// 获取li的长度
			var size=bannerAll.size();

			// 自动轮播
			var i=0;

			var timer=setInterval(function(){
				i++;
				move();
			},2000)

			// 移入移出停止开启定时器
			bannerAll.hover(function(){
				clearInterval(timer);
			},function(){
				timer=setInterval(function(){
					i++;
					move();
				},2000)
			})

			// 鼠标移入图片 显示左右按钮 
			$('.content_banner_list li,.banner_slide').hover(function(){
				$('.banner_slide').stop().fadeIn();
			},function(){
				$('.banner_slide').stop().fadeOut();
			})
			// 点击左右按钮时 切换相应的图片
			$('.slide_prev').click(function(){
				i--;
				move();
				$(this).show();
			})
			$('.slide_next').click(function(){
				i++;
				move();
				$(this).show();
			})
			// 鼠标移入title 显示相应的banner图片
			bannerAllTitle.hover(function(){
				var index=$(this).index();
				i=index;
				move();
				clearInterval(timer)
			},function(){
				timer=setInterval(function(){
					i++;
					move();
				},2000)
			})

			// 滚动
			function move(){
				if(i==size){
					i=0;
				}
				bannerAll.eq(i).stop().fadeIn().siblings().stop().fadeOut();
				bannerAllTitle.eq(i).addClass('banner_title_active').siblings().removeClass('banner_title_active');
			} 
			
		})

})

