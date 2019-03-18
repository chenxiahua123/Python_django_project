$(function(){
	//判断是否输入用户名和密码
	$(".denglu").click(function(){
		var _username=$(".input-text-2").val();
		var _password=$(".input-password-2").val();
		var check1 =/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
		var check2=/^[a-z0-9_-]{6,18}$/;
		
		
		if(!check1.test(_username)){
			$(".tishi").html("请输入正确邮箱");
			$(".tishi").css("display","block");
			return check1.test(_username);
		}
		
		if(!check2.test(_password)){
			$(".tishi").html("请输入正确的密码");
			$(".tishi").css("display","block");
			return check2.test(_password);
		}
		if((check1.test(_username)==true)||(check2.test(_password)==true)){
			var userlist=$.getJSON("date/user.json",function(responsedate){
				var datelist=responsedate;
				for (var i=0;i<datelist.length;i++) {
					var obj=datelist[i];
					if((obj.name==_username)&&(obj.pass_word==_password)){
						window.location.href="index.html";
						var userlist1=[];
						var user1={};
						user1.name=_username;
						user1.pass_word=_password;
						userlist1.push(user1);
						if($(".input-check-1-1").checked="checked"){
							$.cookie("cookie1",JSON.stringify(userlist1),{expires:10,path:"/"});
						}else{
							$.cookie("cookie1",JSON.stringify(userlist1),{expires:0,path:"/"});
						}
						
					}else if((obj.name==_username)&&(obj.pass_word!=_password)){
						$(".tishi").html("密码错误");
						$(".tishi").css("display","block");
					}
				}
			});
		}
	})
	$(".input-text-2").keyup(function(){
		if(($(".input-text-2").val())!=""){
			$(".input-text-3").css("display","block");
		}else{
			$(".input-text-3").css("display","none");
		}
	})
	$(".input-password-2").keyup(function(){
		if(($(".input-password-2").val())!=""){
			$(".input-password-3").css("display","block");
		}else{
			$(".input-password-3").css("display","none");
		}
	})
	$(".input-text-3").click(function(){
		$(".input-text-2").val("");
	})
	$(".input-password-3").click(function(){
		$(".input-password-2").val("");
	})
})