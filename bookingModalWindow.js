// Booking_Form

// for (var i = 0; i < Number(document.querySelectorAll('.winBooking').length); i++) {
	
// 	if (document.querySelectorAll('.winBooking')[i].onclick) {
// 		document.querySelector('.modalWin').classList.add("ModalWin_BookForm_Visible");
// 	}
// }

var modalWindowButton = document.querySelectorAll('.Open_Modal_Window_Button');
var modalWindow = document.querySelector('.modalWin').classList;

function makeVisible () {
	modalWindow.add("ModalWin_BookForm_Visible");
}

modalWindowButton[0].onclick = function() {
	makeVisible();
}
modalWindowButton[1].onclick = function() {
	makeVisible();
}
modalWindowButton[2].onclick = function() {
	makeVisible();
}
modalWindowButton[3].onclick = function() {
	makeVisible();
}
modalWindowButton[4].onclick = function() {
	makeVisible();
}
modalWindowButton[5].onclick = function() {
	makeVisible();
}
modalWindowButton[6].onclick = function() {
	makeVisible();
}
// modalWindowButton[7].onclick = function() {
// 	makeVisible();
// }

// close Modal Window
var closeWindow = document.querySelectorAll('.closeModalWin')[0];
// var modalWin = document.getElementById('modalWin');
// var modalWinInside = document.getElementById('modal');

function makeHidden () {
	modalWindow.remove("ModalWin_BookForm_Visible");
}

// function makeHiddenAfterKeypress () {
// 	modalWindow.remove("ModalWin_BookForm_Visible");
// }

closeWindow.addEventListener("click", makeHidden);
// modalWin.addEventListener("click", makeHidden);
// closeWindow.addEventListener("keypress", makeHiddenAfterKeypress);


// modalWin.onclick = function() {

	
// 	if (i)
// 	{
// 		alert("delete all");
// 		modalWindow.remove("ModalWin_BookForm_Visible");
// 	}
// }

// closeWindow.addEventListener("keypress", function(event) {
// 	alert("keypress");
// 	// alert(event);
// })

// closeWindow.addEventListener("keydown", function(event) {
// 	alert("keydown");
// 	// alert(event);
// })

// closeWindow.addEventListener("keyup", function(event) {
// 	alert("keyup");
// 	// alert(event);
// })
