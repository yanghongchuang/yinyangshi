//导航栏固定定位
window.onload=function (){

window.onscroll=function(){
	var top=document.getElementById('top');
		if(document.documentElement.scrollTop>=top.offsetHeight){
			top.style.position="fixed";
			top.style.zIndex="999";
		}
		if(document.documentElement.scrollTop<0){
			top.style.position="relative";
			top.style.zIndex="999";
		}
	}
//新闻资讯轮播图
	var next=document.getElementById("next")
	var box=document.getElementById('cff')
	var up=document.getElementById("up")
	var boxlt=box.children.length;
	var n=0;
	var sboxw=box.children[1].offsetWidth;
	next.onclick=function(){
		n++
		if(n==boxlt-1){
			next.style.display="none";
		}
		if(n!=0){
			up.style.display="block"
		}
		if(n<=boxlt-1){
			var time=setInterval(function(){
			var ml=parseInt(box.style.left);
			if(ml==-(n*sboxw)){
				clearInterval(time);
				return;
				}
			box.style.left=ml-20+"px";
		},17)
		}
	}
	//n=4
	up.onclick=function(){
		if(n>0){
			var time=setInterval(function(){
			var ml=parseInt(box.style.left);
			if(ml==-(n*sboxw)){
				clearInterval(time);
				return;
			}else{
				box.style.left=ml+20+"px"
			}
			;
		},17)
		}
		if(n!=boxlt){
			next.style.display="block";
		}
		if(n==1){
			up.style.display="none";
		}
		n--
	}

//新闻资讯与新服集结选项卡
	$("#xwzx").click(function(){
		$("#xwwx").fadeToggle()
		$("#xfxf").fadeToggle()
		$("#xfzj").addClass("xxbgi")
		
		$("#xfzj").mouseover(function(){
			$(this).removeClass("xxbgi")
		})
		$("#xfzj").mouseout(function(){
			$(this).addClass("xxbgi")
		})
		$(this).removeClass("xxbgi")
		$("#xwzx").mouseout(function(){
			$(this).removeClass("xxbgi")
		})
	})
	$("#xfzj").mouseover(function(){
		$(this).removeClass("xxbgi")
	})
	$("#xfzj").mouseout(function(){
		$(this).addClass("xxbgi")
	})
	$("#xfzj").click(function(){
		$("#xfxf").fadeToggle()
		$("#xwwx").fadeToggle()
		$("#xwzx").addClass("xxbgi")
		$(this).removeClass("xxbgi")
		$("#xwzx").mouseover(function(){
			$(this).removeClass("xxbgi")
		})
		$("#xwzx").mouseout(function(){
			$(this).addClass("xxbgi")
		})
		$("#xfzj").mouseout(function(){
			$(this).removeClass("xxbgi")
		})
	})
	//平安世界
		
	//
		//显示式神录
		$(".sslbox").css({"display":"block"})
		$(".zhujiaolu").css({"display":"none"})
		$(".shengyouzhen").css({"display":"none"})
		$(".titl").css({"display":"none"})

		for(var i=0;i<$(".szs li").length;i++){
		$(".szs li").eq(i).attr("li",i)
	}
	$(".szs li").click(function(){
		var lii=$(this).attr("li")
		console.log(lii)
		$(".paszs>div").css({"display":"none"})
		$(".szs li").removeClass("szsbg")
		$(".paszs>div").eq(lii).fadeIn()
		$(".szs li").eq(lii).addClass("szsbg")

	})
	//式神录全部tible切换
		for(var k=0;k<$(".titl>div").length;k++){
			$(".titl>div").find(".titlsbox-1").css({"display":"none"})
			$(".titl>div").removeClass("qb")
		}
		$(".titl>div").eq(0).find(".titlsbox-1").css({"display":"block"})
		$(".titl>div").eq(0).addClass("qb")
		console.log($(".titl>div").length)
		for(var j=0;j<$(".titl>div").length;j++){
			$(".titl>div").eq(j).attr("tt",j)
		}
		$(".titl>div").click(function(){
				tt=$(this).attr("tt")
				for(var k=0;k<$(".titl>div").length;k++){
					$(".titl>div").find(".titlsbox-1").css({"display":"none"})
					$(".titl>div").removeClass("qb")
				}
				$(".titl>div").eq(tt).find(".titlsbox-1").css({"display":"block"})
				$(".titl>div").eq(tt).addClass("qb")
				if(tt==0||tt==5){
					$(".jiant").css({"display":"block"})
				}else{
					$(".jiant").css({"display":"none"})
				}
			})
		$(".tit").click(function(){
			$(".titl").css({"display":"block"})
			$("#titbox").css({"display":"none"})
			$(".tit").css({"display":"none"})
			if($(".titl>div")[0].className=="qb" || $(".titl>div")[5].className=="qb" ){
				$(".jiant").css({"display":"block"})
			}else{
				$(".jiant").css({"display":"none"})
			}
		})
		$(".titlsbox").click(function(){
			$(".titl").css({"display":"none"})
			$("#titbox").css({"display":"block"})
			$(".tit").css({"display":"block"})
		})
		//鼠标移到图像上出来一个图
		var ttimg=$("<img src='images/imgbg.png'>")
		ttimg.addClass("imgbg")
		$(".titlsbox").append(ttimg)
		$(".titlsbox").find(".imgbg").css({"display":"none"});
		$(".titlsbox").mouseover(function(){
			$(this).find(".imgbg").css({"display":"block"});
		})
		$(".titlsbox").mouseout(function(){
			$(this).find(".imgbg").css({"display":"none"});
		})
		//式神录全部
		$(".next2").click(function(){
			var marginl=parseInt($(".qblb").css('marginLeft'))
			if(marginl<=-2120){
				$(this).css({"display":"none"})
			}
			$(".prve").css({"display":"block"})
			$(".qblb").css({"marginLeft":marginl-1060});
		})
		$(".prve").click(function(){
			var marginl=parseInt($(".qblb").css('marginLeft'))
			if(marginl>=-1060 ){	
				$(this).css({"display":"none"})
			}
			$(".next2").css({"display":"block"})
			$(".qblb").css({"marginLeft":marginl+1060});
		})
	//游戏攻略
		var yx=0;
		$(".yxtable a").eq(yx).addClass("yxtablehover");
		$(".yxtable a").eq(yx).find(".yxtableconten").css({"display":"block"})
		function fxy(){
			$(".yxtable a").removeClass("yxtablehover");
				$(".yxtable a").eq(yx).addClass("yxtablehover");
				$(".yxtable a .yxtableconten").css({"display":"none"})
				$(".yxtable a").eq(yx).find(".yxtableconten").css({"display":"block"})	
				yx++;
				if(yx>$(".yxtable a").length-1){
					yx=0;
				}
		}
		yxgl=setInterval(fxy,1000)
		$(".yxtable a").mouseover(function(){
			for(var i=0;i<$(".yxtable a").length;i++){
				$(".yxtable a").removeClass("yxtablehover");
				$(".yxtable a").eq(i).attr("yyx",i)
			}
			$(this).addClass("yxtablehover")
			$(".yxtable a .yxtableconten").css({"display":"none"})
			if(this.className=="yxtablehover"){
				$(".yxtablehover").find(".yxtableconten").css({"display":"block"})	
			}
		})
		$(".yxtable a").mouseout(function(){
			yxtablea=$(this).attr("yyx")

		})
		$(".yxtable").mouseover(function(){
			clearInterval(yxgl)
		})
		$(".yxtable").mouseout(function(){
			yx=yxtablea;
			yxgl=setInterval(fxy,1000)
		})

//同人手帐
	var bindex=0;
	for(var i=0;i<$(".trszconent-bottom img").length;i++){
			var bb=$("<b></b>")
				bb.attr("bindex",i)
				$(".trszconent-topb").append(bb)
	}
	$(".trszconent-topb b").click(function(){
		bindex=parseInt($(this).attr("bindex"))
		for(var i=0;i<$(".trszconent-topb b").length;i++){
			$(".trszconent-topb b").removeClass("trszconent-topbbg")
			$(".trszconent-bottom a").eq(i).find("img").fadeOut();
		}
		$(".trszconent-topb b").eq(bindex).addClass("trszconent-topbbg")
		$(".trszconent-bottom a").eq(bindex).find("img").fadeIn();
	})
	//定時器
		var ftr=function(){
		for(var i=0;i<$(".trszconent-topb b").length;i++){
			$(".trszconent-topb b").removeClass("trszconent-topbbg")
			$(".trszconent-bottom a").eq(i).find("img").fadeOut();
		}
		$(".trszconent-topb b").eq(bindex).addClass("trszconent-topbbg")
		$(".trszconent-bottom a").eq(bindex).find("img").fadeIn();
		bindex++;
		if(bindex>$(".trszconent-bottom img").length-1){
		 	bindex=0;
		 }
	}
	var trautoplay=setInterval(ftr,1000)
	// 鼠標移上停止
	$(".trszconent-bottom").mouseover(function(){
		clearInterval(trautoplay)
	})
	$(".trszconent-topb").mouseover(function(){
		clearInterval(trautoplay)
	})
	//鼠標移除重啓
	$(".trszconent-bottom").mouseout(function(){
		trautoplay=setInterval(ftr,1000)
	})
	$(".trszconent-topb").mouseout(function(){
		trautoplay=setInterval(ftr,1000)
	})
//泛娱乐
	var fylimg=document.getElementsByClassName('fylcon')[0].getElementsByTagName('img')[0];
	var flyw=fylimg.offsetWidth;
	//右点击
	$(".fylconright").click(function(){
		var fylconulleft= parseInt($(".fylcon").find("ul").css("left"))
		fylconulleft=fylconulleft-flyw-10;
		if(fylconulleft<-330){
			$(".fylcon").find("ul").css("left",-330);
			$(".fylconright").css("display","none")
		}else{
			$(".fylcon").find("ul").css("left",fylconulleft);
			$(".fylconleft").css("display","block")
		}
	})
	//左点击
	$(".fylconleft").click(function(){
		var fylconulleft= parseInt($(".fylcon").find("ul").css("left"))
		fylconulleft=fylconulleft+flyw+10;
		if(fylconulleft>0){
			$(".fylcon").find("ul").css("left",0);
			$(".fylconleft").css("display","none")
		}else{
			$(".fylcon").find("ul").css("left",fylconulleft);
			$(".fylconright").css("display","block")
		}
		
	})
}

