// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
let data = document.getElementById('date');
data.innerHTML = new Date().getFullYear();
// ********** close links ************
let navToggle = document.querySelector('.nav-toggle');
let linksContainer = document.querySelector('.links-container');
let links = document.querySelector('.links');
let containerHeight;

navToggle.addEventListener('click', function(e) {
	setContainerHeight();
});
//get container height
function getLinksHeight() {
	linksHeight = links.getBoundingClientRect().height;
	return linksHeight;
}
//set container height
function setContainerHeight() {
	let height = getLinksHeight();
	let containerHeight = linksContainer.getBoundingClientRect().height;

	if (containerHeight === 0) {
		linksContainer.style.height = `${height}px`;
	} else {
		linksContainer.style.height = 0;
	}
}
// ********** fixed navbar ************

// ********** smooth scroll ************
// select links
