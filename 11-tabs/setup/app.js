let wrapper = document.getElementById('tabs');
let buttons = wrapper.querySelectorAll('.tab-btn');
let tabs = wrapper.querySelectorAll('.content');

//Add event listeners to each button
buttons.forEach((btn, i) => {
	btn.addEventListener('click', function(e) {
		let id = btn.dataset.id;
		//remove active class from all buttons
		buttons.forEach((btn, i) => {
			btn.classList.remove('active');
		});
		//Add class active
		btn.classList.add('active');
		// Choose right tab
		tabs.forEach((tab, i) => {
			if (tab.id == id) {
				tab.classList.add('active');
			} else {
				tab.classList.remove('active');
			}
		});
	});
});
