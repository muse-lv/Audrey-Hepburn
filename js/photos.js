(function(){
	$(function(){			

		waterfall();
		var dateInt={"date":[{"src":"img/War-and-Peace/War-and-Peace01.jpg"},
		{"src":"img/War-and-Peace/War-and-Peace02.jpg"},
		{"src":"img/War-and-Peace/War-and-Peace03.jpg"},
		{"src":"img/War-and-Peace/War-and-Peace04.jpg"},
		{"src":"img/Sabrina/Sabrina01.jpg"},{"src":"img/Sabrina/Sabrina02.jpg"},
		{"src":"img/Sabrina/Sabrina03.jpg"},{"src":"img/Sabrina/Sabrina04.jpg"},
		{"src":"img/Sabrina/Sabrina05.jpg"},{"src":"img/Sabrina/Sabrina06.jpg"},
		{"src":"img/Sabrina/Sabrina07.jpg"},{"src":"img/Sabrina/Sabrina08.jpg"},
		{"src":"img/Sabrina/Sabrina09.jpg"},{"src":"img/Sabrina/Sabrina10.jpg"},
		{"src":"img/Sabrina/Sabrina11.jpg"}]};
		$(window).on('scroll',function(){
				if(checkScrollSlide()){
					$.each(dateInt.date,function(key,value){
							var oBox=$('<div>').addClass('box').appendTo($('#main'));
							var oPic=$('<div>').addClass('pic').appendTo($(oBox));
							var oImg=$('<img>').attr('src',$(value).attr('src')).appendTo($(oPic));
					});
					waterfall();
				}
		});
	});

	function waterfall(){
		var $boxs=$('#main>div');
		var w=$boxs.eq(0).outerWidth();
		var cols=Math.floor($(window).width()/w);
	  $('#main').width(w*cols).css('margin','0 auto');
		var hArr=[];
		var $img=$boxs.find('img');
		$img.eq($img.length-1).load(function(){
			$boxs.each(function(index,value){
			var h=$boxs.eq(index).outerHeight();
			if (index<cols) {
				hArr.push(h);
			}else{
				var minH=Math.min.apply(null,hArr);
				var minIndex=$.inArray(minH,hArr);
				$(value).css({
					'position':'absolute',
					'top':minH+'px',
					'left':minIndex*w+'px'
				});
				hArr[minIndex]+=$boxs.eq(index).outerHeight();
				}		
			});	
		});
	
	}

	function checkScrollSlide(){
		var $lastBox=$('#main>div').last();
		var lastBoxH=$lastBox.offset().top+Math.floor($lastBox.outerHeight()/2);
		var scrollTop=$(window).scrollTop();
		var Dheight=$(window).height();
		return (lastBoxH<scrollTop+Dheight)?true:false;
	}
})();