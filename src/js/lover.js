$(function(){
	$(window).scroll(function(){
		var $top = $(document).scrollTop();
		var $tooltip = $("#tooltip");
		var $lovers =$(".content").find(".lover");//获取lovers集合
		var currentId = "";
		$lovers.each(function(){
			var $lover =$(this);
			var $loverTop = $lover.offset().top;
			if($top>$loverTop-300){
				currentId = "#"+$lover.attr("id");//取得当前位置的lover的id
			}else{
				return false;
			}
		});
		var $currentLink = $tooltip.find(".current");//取得之前含有.current样式的条目
		//给当前位置的Lover添加.current样式
		if($currentLink.closest("a").attr("href")!=currentId && currentId){
			$currentLink.removeClass("current");//
			$tooltip.find("[href='" + currentId + "']").children(":last").addClass("current");
		}
	});
});