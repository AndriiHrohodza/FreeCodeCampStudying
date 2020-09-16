// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
let data = document.getElementById('date');
data.innerHTML = new Date().getFullYear();
// ********** close links ************
let nav = document.getElementById('nav');
let navToggle = document.querySelector('.nav-toggle');
let linksContainer = document.querySelector('.links-container');
let links = document.querySelector('.links');
let containerHeight;

navToggle.addEventListener('click', function(e) {
	setContainerHeight();
});
//Get container height
function getLinksHeight() {
	linksHeight = links.getBoundingClientRect().height;
	return linksHeight;
}
//Set container height
function setContainerHeight() {
	let height = getLinksHeight();
	containerHeight = linksContainer.getBoundingClientRect().height;

	if (containerHeight === 0) {
		linksContainer.style.height = `${height}px`;
	} else {
		linksContainer.style.height = 0;
	}
}
// ********** fixed navbar ************
window.addEventListener('scroll', () => {
	let navHeight = nav.getBoundingClientRect().height;
	let topLink = document.querySelector('.top-link');
	let scrolledHeight = window.pageYOffset;

	// scrolledHeight -=  navHeight + "px";

	if (scrolledHeight > navHeight) {
		nav.classList.add('fixed-nav');
	} else {
		nav.classList.remove('fixed-nav');
	}
	if (scrolledHeight > 500) {
		topLink.classList.add('show-link');
	} else {
		topLink.classList.remove('show-link');
	}
})
// ********** smooth scroll ************
// select links
let scrollLinks = document.querySelectorAll('.scroll-link');

scrollLinks.forEach((scrollLink, i) => {
	scrollLink.addEventListener('click', (e) => {
		e.preventDefault();
		let id = e.target.getAttribute('href').slice(1);
		let element = document.getElementById(`${id}`);
		let navHeight = nav.getBoundingClientRect().height;
		console.log(navHeight);
		let containerHeight = linksContainer.getBoundingClientRect().height;
		let fixedNav = nav.classList.contains('fixed-nav');
		let position = element.offsetTop - navHeight;

		if (!fixedNav) {
      position = position - navHeight;
    }
    if (navHeight > 82) {
      position = position + containerHeight;
    }
		
		window.scrollTo({
			left: 0,
			top: position,
		});

		linksContainer.style.height = 0;

	})
});
