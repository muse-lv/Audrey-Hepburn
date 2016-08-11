$(function(){
	var $closeBtn = $(".close-btn");
	var $sidebar = $(".sidebar");
	var flag ="closed";

	$closeBtn.on("click",function(){
		if(flag === "closed"){
			open();
		}else if(flag === "opened"){
			close();
		}
	});

	function open(){
		$sidebar.css({"opacity":"1","transform":"translateX(4rem)"});
		$closeBtn.css("transform","rotate(405deg)");
		flag = "opened";
	}

	function close(){
		$sidebar.css({"opacity":"0","transform":"translateX(0)"});
		$closeBtn.css("transform","rotate(0)");
		flag = "closed";
	}

});