// ****** SELECT ITEMS **********
let wrapper = document.getElementById('grocery');
let form = wrapper.querySelector('.grocery-form');
let grocery = wrapper.querySelector('input');
let submitBtn = wrapper.querySelector('.submit-btn');
let groceryContainer = wrapper.querySelector('.grocery-container');
let groceryList = wrapper.querySelector('.grocery-list');
let alert = wrapper.querySelector('.alert');
let clearBtn = wrapper.querySelector('.clear-btn');
// edit option
let editElement;
let editFlag = false;
let editID = "";
// ****** EVENT LISTENERS **********
form.addEventListener('submit', addItem);
clearBtn.addEventListener('click', removeAllItems)
// ****** FUNCTIONS **********
//Add item
function addItem(e) {
	e.preventDefault();
	let value = grocery.value;

	if (value && editFlag) {

	} else if (value && !editFlag) {
		let id = new Date().getTime().toString();
		let html = getHtml(value, id);
		let editBtn = html.querySelector('.edit-btn');
		let deleteBtn = html.querySelector('.delete-btn');

		editBtn.addEventListener('click', editItem);
		deleteBtn.addEventListener('click', deleteItem);
		//Show item
		groceryContainer.classList.add('show-container');
		groceryList.append(html);
		//Display alert
		displayAlert('Item added to the list','success');
		//Add item to local storage
		addToLocalStorage(id, value);
		//Refresh item to default
		backToDefault();

	} else {
		displayAlert('Enter valid value','danger');
	}

}
//Create item html article
function getHtml(value, id) {
	let article = document.createElement('article');
	article.setAttribute('data-id', id);
	article.classList.add('grocery-item');
	article.innerHTML =
					 `<p class="title">${value}</p>
            <div class="btn-container">
              <button type="button" class="edit-btn">
                <i class="fas fa-edit"></i>
              </button>
              <button type="button" class="delete-btn">
                <i class="fas fa-trash"></i>
              </button>
            </div>`

	return article;
}
//Display alert
function displayAlert(text, action) {
	alert.innerText = text;
	alert.classList.add(`alert-${action}`);

	setTimeout(function() {
		alert.innerText = "";
		alert.classList.remove(`alert-${action}`);
	}, 1500);
}
//Back to default
function backToDefault() {
	grocery.value = "";
}
//Remove all items
function removeAllItems() {
	groceryList.innerHTML = "";
	groceryContainer.classList.remove('show-container');
	backToDefault();
}
//Edit item
function editItem() {
	console.log('g');
}
//Delete item
function deleteItem(e) {
	let item = e.currentTarget.closest('article');
	groceryList.removeChild(item);
	if (groceryList.childElementCount < 1) {
		groceryContainer.classList.remove('show-container');
	}
	displayAlert('Item removed', 'danger');
	backToDefault();
}
// ****** LOCAL STORAGE **********
function addToLocalStorage(id, value) {

}
// ****** SETUP ITEMS **********
