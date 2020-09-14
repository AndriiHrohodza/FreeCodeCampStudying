// local reviews data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];
// Veraibles
let wrapper = document.getElementById('review');
let imageWrapper = wrapper.querySelector('.person-img');
let nameWrapper = wrapper.querySelector('.author');
let jobWrapper = wrapper.querySelector('.job');
let textWrapper = wrapper.querySelector('.info');
let btnsWrapper = wrapper.querySelector('.button-container');
let randomBtn = wrapper.querySelector('.random-btn');
let cardIndex = 0;

//Render first card
showCard(reviews[cardIndex]);

//Buttons event listeners
btnsWrapper.addEventListener('click', function(e) {
  let currentBtn = e.target.closest('.btn');

  if (!currentBtn) {
    return;
  }

  if (currentBtn.classList.contains('prev-btn')) {
    plusCards(-1);
  } else if (currentBtn.classList.contains('next-btn')) {
    plusCards(1);
  }

});

//Random btn logic
randomBtn.addEventListener('click', function(e) {
  let randomIndex = Math.floor(Math.random() * reviews.length);
  showCard(cardIndex += randomIndex);
});

//Show cards
function showCard(n) {
  getCardIndex(n);
  let card = reviews[cardIndex];
  let name = card.name;
  let job = card.job;
  let img = card.img;
  let text = card.text;

  imageWrapper.setAttribute('src', img);
  nameWrapper.innerHTML = name;
  jobWrapper.innerHTML = job;
  textWrapper.innerHTML = text;

}
//Plus cards
function plusCards(n) {
  showCard(cardIndex += n);
}

//Get cardIndex
function getCardIndex(n) {
  if (n > reviews.length - 1) {
    cardIndex = 0;
  }
  if (n < 0) {
    cardIndex = reviews.length - 1;
  }
  return cardIndex;
}
