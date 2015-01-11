var scroller_arry = document.getElementsByClass("horz_scroller");
var marquees = document.getElementsByTagName("marquee");
var marq_header = document.getElementById("m_h");
	
	//scroller_arry.addEventListener("onload", horz_scrolling, false);
	
function horz_scrolling() {
	alert("hey");
//	alert(marq_header.getAttribute("scrollamount"));

	if(marq_header.getAttribute("scrollamount") != 0) {
		marq_header.getAttribute("scrollamount") = 0;
	}
	else {
		marq_header.getAttribute("scrollamount") = 100;
	}
}

// var scolling_img = {
	// style : {
		// 'width': '750px',
		// 'height': '220px',

		// 'padding': '5px',
		// 'background': 'dark grey',
		// 'border': '1px solid dark grey'
	// },
	// inc: 5, //speed - pixel increment for each iteration of this marquee's movement
	// mouse: 'cursor driven', //mouseover behavior ('pause' 'cursor driven' or false)
	// moveatleast: 2,
	// neutral: 150,
	// persist: true,
	// savedirection: true	
	
// }

function continous_img_scroll() {
	
}