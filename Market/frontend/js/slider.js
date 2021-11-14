"use strict"

const sliderRow = document.querySelector('.slider__row');
let offset = 0;

sliderRow.addEventListener('click', function(){
    if ((-offset) === ((sliderRow.children.length-1) * sliderRow.offsetWidth * -1)){
        offset = 0;
    } else{
		offset += sliderRow.offsetWidth;
	}
    sliderRow.style.left = -offset + "px";
});