/*nav바 크기 가져오기*/
(window.onload = function setNavHeight() {
var obj1 = document.getElementById("navHead");
  var obj1_height = obj1.offsetHeight;

  document.getElementById("body").style.marginTop = obj1_height + "px";
})();
/*resize 될 때마다 nav바 크기 가져오기*/
function setNavHeight() {
	var obj1 = document.getElementById("navHead");
 	var obj1_height = obj1.offsetHeight;

  	document.getElementById("body").style.marginTop = obj1_height + "px";
}
window.addEventListener('resize', setNavHeight);


/*언어토글과 input 연결하기*/
		window.onload = LanguageToggle();
		  function LanguageToggle(){
		  	var toggle = document.getElementById("Ltoggle");
		  	var enText = document.getElementsByClassName("en");
		  	var korText = document.getElementsByClassName("kor");
		  	for (var i=0;i<enText.length;i+=1) {
		  		if (toggle.checked == true) {
		  		enText[i].style.color = "#000000";
		  		korText[i].style.color = "#edeadf";
		  		enText[i].style.transition = "color 0.5s ease-in";
		  		korText[i].style.transition = "color 0.5s ease-in";

			  	} else {
			  		enText[i].style.color = "#edeadf";
			  		korText[i].style.color = "#000000";
			  		enText[i].style.transition = "color 0.5s ease-in";
		  		korText[i].style.transition = "color 0.5s ease-in";
			  	}
		  	}
		  	
		  }

var screenWidth = window.innerWidth;

var paddings = 11 * parseFloat(getComputedStyle(document.documentElement).fontSize);
var calGallery = screenWidth - paddings;
function cal () {
	screenWidth - paddings;
	scrollContainer.scrollLeft += galleryWidth;
}
console.log(calGallery);
var scrollContainer = document.querySelector(".gallery");
let backBtn = document.getElementById("backBtn");
let frontBtn = document.getElementById("frontBtn");

scrollContainer.addEventListener("wheel", (evt) => {
	evt.preventDefault();
	scrollContainer.style.scrollBehavior = "auto";
	scrollContainer.scrollLeft -= evt.deltaY;
});

scrollContainer.clientWidth;

var galleryWidth = scrollContainer.scrollWidth + scrollContainer.getBoundingClientRect().width;
window.onload = function() {
	scrollContainer.scrollLeft += galleryWidth;
}
window.addEventListener('resize', cal);

frontBtn.addEventListener("click", () => {
	scrollContainer.style.scrollBehavior = "smooth";
	scrollContainer.scrollLeft -= calGallery;
});

backBtn.addEventListener("click", () => {
	scrollContainer.style.scrollBehavior = "smooth";
	scrollContainer.scrollLeft += calGallery;

});