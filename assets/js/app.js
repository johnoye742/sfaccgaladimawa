(function($, document, window){
	
	$(document).ready(function(){

		// Cloning main navigation for mobile menu
		$(".mobile-navigation").append($(".main-navigation .menu").clone());

		// Mobile menu toggle 
		$(".menu-toggle").click(function(){
			$(".mobile-navigation").slideToggle();
		});

		$(".hero").flexslider({
			directionNav: false,
			controlNav: true
		});
	});

	$(window).load(function(){
    
	});

})(jQuery, document, window);
var scrollb = document.getElementById("scrollup");
scrollb.onclick =()=> {
		window.scrollTo(0, 0);
}
window.onscroll=()=>{
	var scrollY = window.scrollY;
	if(scrollY >= 200) {
		scrollb.style.opacity = "1";
		scrollb.style.cursor = "pointer";
	}
	 if(scrollY == 0) {
      scrollb.style.opacity = "0";
	  scrollb.style.cursor = "auto";
	}
}