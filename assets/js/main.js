//Scroller Nav
window.onscroll = function() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    	$(".desktop").css("top", "-200px");
    	$(".swipe_up").css("display","flex");
    } else {
    	$(".desktop").css("top", "0");
    	$(".swipe_up").css("display","none");
    }
}


$(".ham").on("click", function(){
	if ($(this).attr("icon") == "line-md:menu-to-close-alt-transition") {
		$(this).css("color", "var(--dark)");
		$(this).attr("icon", "line-md:close-to-menu-alt-transition");
		$(".responsive dd").css("display", "none");
	} else {
		$(this).css("color", "var(--white)");
		$(this).attr("icon", "line-md:menu-to-close-alt-transition");
		$(".responsive dd").css("display", "flex");
	}
});
