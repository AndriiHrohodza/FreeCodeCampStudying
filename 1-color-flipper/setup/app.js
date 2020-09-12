const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

let btn = document.querySelector('.btn');
let colorWrapper = document.querySelector('.color');
let index;

//Return random number
let getRandomInt = () => {
	return Math.floor(Math.random() * colors.length);
}
//Event listener, on btn click change color
btn.addEventListener('click', () => {
 	index = getRandomInt();
	document.body.style.backgroundColor = colors[index];
	colorWrapper.innerHTML = colors[index];
})
