// ****** SELECT ITEMS **********
//Inits
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
clearBtn.addEventListener('click', removeAllItems);

// ****** FUNCTIONS **********
//Add item
function addItem(e) {
  //Prevent to default
  e.preventDefault();
  //Get grocery value
  let value = grocery.value;
  if (value && editFlag) {
    //Display alert
    displayAlert('Value changed', 'success');
    //Change button text
    submitBtn.innerHTML = "Submit";
    //Change item value
    let articles = groceryList.querySelectorAll('article');
    //Set new value to item
    articles.forEach((article, i) => {
      if (article.dataset.id === editID) {
        let id = article.dataset.id;
        //Write new text
        article.querySelector('.title').innerText = grocery.value;
        //Edit local storage
        editLocalStorage(id, value);
      }
    });
    //Set flag false
    editFlag = false;
    //Back to default
    backToDefault();
  } else if (value && !editFlag) {
    //Init
    let id = new Date().getTime().toString();
    let article = getHtml(value, id);
    let editBtn = article.querySelector('.edit-btn');
    let deleteBtn = article.querySelector('.delete-btn');

    //Event listeners to edit, delete button
    editBtn.addEventListener('click', editItem);
    deleteBtn.addEventListener('click', deleteItem);
    //Add class show-container
    groceryContainer.classList.add('show-container');
    //Appent article
    groceryList.append(article);
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
  //Article init
  let article = document.createElement('article');
  //Set attribute
  article.setAttribute('data-id', id);
  //Add class
  article.classList.add('grocery-item');
  //HTML stracture
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
  //Set text
  alert.innerText = text;
  //Add class
  alert.classList.add(`alert-${action}`);
  //Set empty text and remove class
  setTimeout(function() {
    alert.innerText = "";
    alert.classList.remove(`alert-${action}`);
  }, 1500);
}

//Back to default
function backToDefault() {
  //Set empty grocery value
  grocery.value = "";
}

//Remove all items
function removeAllItems() {
  //Remove all items from grocery list
  groceryList.innerHTML = "";
  //Delete class show-container
  groceryContainer.classList.remove('show-container');
  //Set back to default
  backToDefault();
}

//Edit item
function editItem(e) {
  //Set flag true
  editFlag = true;
  //Item init
  let item = e.currentTarget.closest('article');
  //Get item value
  let itemText = item.innerText;
  //Set item ID
  editID = item.dataset.id;
  //Set input value
  grocery.value = itemText;
  //Change button text
  submitBtn.innerHTML = "Edit";
}

//Delete item
function deleteItem(e) {
  //Item init
  let item = e.currentTarget.closest('article');
  //Item ID
  let id = item.dataset.id;
  //Remove item from grocery list
  groceryList.removeChild(item);
  //If childre elements less than 1 remove class show-container
  if (groceryList.childElementCount < 1) {
    groceryContainer.classList.remove('show-container');
  }
  //Display danger alert
  displayAlert('Item removed', 'danger');
  //Set back to default
  backToDefault();
  //Remove from local storage
  removeFromLocalStorage(id);
}

// ****** LOCAL STORAGE **********
//Add item to local storage
function addToLocalStorage(id, value) {
  //Get grocery
  let grocery = getGrocery(id, value);
  //Get items
  let items = getLocalStorage();
  //Push grocery
  items.push(grocery);
  //Set local storage
  localStorage.setItem('groceries', JSON.stringify(items));
}

//Get items from local storage
function getLocalStorage() {
  return localStorage.getItem('groceries')
  ? JSON.parse(localStorage.getItem('groceries')) : [];
}

//Remove item from local storage
function removeFromLocalStorage(id) {
  let items = getLocalStorage();
  //Remove item
  items.forEach((item, i) => {
    if (item.id == id) {
      //Get array with out deleted item
      items = removeItemFromArray(items, item);
      //Set local storage
      localStorage.setItem('groceries', JSON.stringify(items));
    }
  });
}

//Edit local storage
function editLocalStorage(id, value) {
  //Get local storage
  let items = getLocalStorage();
  //Change value
  items.find((item) => {
    if (item.id == id) {
      return item.value = value;
    }
  });
  //Set local storage
  localStorage.setItem('groceries', JSON.stringify(items));
}

//Get grocery
function getGrocery(id, value) {
  //Get grocery
  let grocery = {
    id,
    value
  }
  return grocery
}

//Remove item from array
function removeItemFromArray(items,item) {
  return items.filter((elem) => {
    return elem != item;
  })
}

// ****** SETUP ITEMS **********
window.addEventListener('DOMContentLoaded', function setUpItems() {
  //Get items
  let items = getLocalStorage();
  let articles = [];
  //Get articles
  articles = items.map((item) => {
    return getHtml(item.value, item.id);
  });
  //Show if not empty articles
  if (articles.length > 0) {
    //Add class show-container
    groceryContainer.classList.add('show-container');
    //Display articles
    articles.forEach((article, i) => {
      //Init edit, delete buttons
      let editBtn = article.querySelector('.edit-btn');
      let deleteBtn = article.querySelector('.delete-btn');
      //Append article
      groceryList.append(article);
      //Event listeners to edit, delete button
      editBtn.addEventListener('click', editItem);
      deleteBtn.addEventListener('click', deleteItem);
    });
  }
});
