const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

let btn = document.querySelector('.btn');
let colorWrapper = document.querySelector('.color');
let hexLength = 6;

//Return random number
let getRandomInt = () => {
  return Math.floor(Math.random() * hex.length);
}

//Get index
let getHexes = () => {
  let index = "#";
  for (let i = 0; i < hexLength; i++) {
    let rundomNubmer = getRandomInt();

    index += hex[rundomNubmer];
  }
  return index;
}

//Event listener, on btn click change color
btn.addEventListener('click', () => {
  let index = getHexes();
  document.body.style.backgroundColor = index;
  colorWrapper.innerHTML = index;
})
