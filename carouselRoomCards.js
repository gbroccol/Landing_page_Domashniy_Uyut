
// var elem = document.roomCard;

// alert(elem.offsetWidth);


// alert( parseInt(getComputedStyle(roomCard).width, 10));


/* конфигурация */
// let width = 341; // ширина блока + margin

let widthGallery = parseInt(getComputedStyle(gallery).width, 10);

// alert (getComputedStyle(gallery).width);

let widthCard = parseInt(getComputedStyle(roomCard).width, 10);
let move = 1; // сдвиг

let count = widthGallery / widthCard; // видимое количество изображений

// let mainBlock = ;

// var elem = document.body;
// alert( getComputedStyle(elem).widthCard ); 

let list = carousel.querySelector('.images');
let listElems = carousel.querySelectorAll('.roomCard');

let position = 0; // положение ленты прокрутки

carousel.querySelector('.prev').onclick = function () // сдвиг влево
{
	position += (widthCard) * move;
	// последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
	position = Math.min(position, 0)
	list.style.marginLeft = position + 'px';
};

carousel.querySelector('.next').onclick = function () {
	// сдвиг вправо
	position -= (widthCard) * move;
	// последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
	// position = Math.max(position, -widthCard * (listElems.length - move));

	position = Math.max(position, -widthCard * (listElems.length - count - 1));

	list.style.marginLeft = position + 'px';
};

// if (count == listElems.length)
// {
// 	// arrow 
// 	/* display: none; */
// 	document.button.style.display = "none";
// }








document.getElementById("myDate").addEventListener("change",(ev)=>{
	if (ev&&ev.target)
		if (ev.target.value=="")
			ev.target.value = ev.target.dataset.default;
});