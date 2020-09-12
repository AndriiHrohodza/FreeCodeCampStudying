let valueWrapper = document.getElementById('value');
let btns = document.querySelectorAll('.btn');
let count = 0;

btns.forEach((btn, i) => {
	btn.addEventListener('click', () => {
		if (btn.classList.contains('increase')) {
			count += 1;
			paint();
		} else if (btn.classList.contains('decrease')) {
			count -= 1;
			paint();
		} else {
			count = 0;
			paint();
		}
		valueWrapper.innerHTML = count;
	})
});
//Paint a number
let paint = () => {
	if (valueWrapper.innerHTML < 0) {
		valueWrapper.style.color = 'red';
	} else if (valueWrapper.innerHTML > 0) {
		valueWrapper.style.color = 'green';
	} else {
		valueWrapper.style.color = 'black';
	}
}
