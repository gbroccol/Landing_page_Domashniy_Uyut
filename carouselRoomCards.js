let widthGallery = parseInt(getComputedStyle(gallery).width, 10);
let widthCard = parseInt(getComputedStyle(roomCard).width, 10);
widthCard += 30;

let move = 1;
let count = widthGallery / widthCard;

let list = carousel.querySelector('.images');
let listElems = carousel.querySelectorAll('.roomCard');

let position = 0;

carousel.querySelector('.prev').onclick = function ()
{
	position += (widthCard) * move;
	position = Math.min(position, 0)
	list.style.marginLeft = position + 'px';
};

carousel.querySelector('.next').onclick = function ()
{
	
	position -= (widthCard) * move;
	position = Math.max(position, -widthCard * (listElems.length - count - 1));
	list.style.marginLeft = position + 'px';
};








// var len = Number(document.querySelectorAll('.winBooking').length);

// alert(len);

// while (true)
// {
// 	for (var i = 0; i < len; i++)
// 	{
		// document.querySelectorAll('.winBooking')[0].onclick = function() { 
		// 	alert('Бронирование на сайте временно не доступно'); 
			// modalWindow.style.visibility = "visible";
			// $('.modalWin_Book_Form').css('visibility','visible');
		// }
// 	}
// }


// Booking_Form
// document.getElementsByClassName("winBooking").onclick = function() { 
document.querySelectorAll('.winBooking')[0].onclick = function() { 
    alert('Бронирование на сайте временно не доступно'); 
	// modalWindow.style.visibility = "visible";
	// $('.modalWin_Book_Form').css('visibility','visible');
}

document.querySelectorAll('.winBooking')[1].onclick = function() { 
    alert('Бронирование на сайте временно не доступно'); 
	// modalWindow.style.visibility = "visible";
	// $('.modalWin_Book_Form').css('visibility','visible');
}
document.querySelectorAll('.winBooking')[2].onclick = function() { 
    alert('Бронирование на сайте временно не доступно'); 
	// modalWindow.style.visibility = "visible";
	// $('.modalWin_Book_Form').css('visibility','visible');
}
document.querySelectorAll('.winBooking')[3].onclick = function() { 
    alert('Бронирование на сайте временно не доступно'); 
	// modalWindow.style.visibility = "visible";
	// $('.modalWin_Book_Form').css('visibility','visible');
}
document.querySelectorAll('.winBooking')[4].onclick = function() { 
    alert('Бронирование на сайте временно не доступно'); 
	// modalWindow.style.visibility = "visible";
	// $('.modalWin_Book_Form').css('visibility','visible');
}
document.querySelectorAll('.winBooking')[5].onclick = function() { 
    alert('Бронирование на сайте временно не доступно'); 
	// modalWindow.style.visibility = "visible";
	// $('.modalWin_Book_Form').css('visibility','visible');
}
