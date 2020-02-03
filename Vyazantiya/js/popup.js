

let popup = document.getElementById('mypopup'),
	popupToggle1 = document.getElementById ('myBtn1'),
	popupToggle2 = document.getElementById ('myBtn2'),
	popupToggle3 = document.getElementById ('myBtn3'),
	popupToggle4 = document.getElementById ('myBtn4'),
	popupToggle5 = document.getElementById ('myBtn5'),
	popupToggle6 = document.getElementById ('myBtn6'),
	popupToggle7 = document.getElementById ('myBtn7'),
	popupToggle8 = document.getElementById ('myBtn8'),
	popupToggle9 = document.getElementById ('myBtn9'),
	popupClose = document.querySelector ('.popup__close');

	popupToggle1.onclick = function() {
		popup.style.display = "block";
	};
	popupToggle2.onclick = function() {
		popup.style.display = "block";
	};
	popupToggle3.onclick = function() {
		popup.style.display = "block";
	};
	popupToggle4.onclick = function() {
		popup.style.display = "block";
	};
	popupToggle5.onclick = function() {
		popup.style.display = "block";
	};
	popupToggle6.onclick = function() {
		popup.style.display = "block";
	};
	popupToggle7.onclick = function() {
		popup.style.display = "block";
	};
	popupToggle8.onclick = function() {
		popup.style.display = "block";
	};
	popupToggle9.onclick = function() {
		popup.style.display = "block";
	};

	popupClose.onclick = function() {
		popup.style.display = "none";
	}

	window.onclick = function(e) {
		if (e.target == popup) {
			popup.style.display = "none";
		}
	}