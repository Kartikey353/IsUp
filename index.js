const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
} 
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
} 

const reviews = [
    {
      id: 1,
      name: "HARSHIT SINGH",
      job: "Web developer",
      img:
        "",
      text:
        "I personally recomended KWIIK for starting a good journey with your startup it provides you more services than other platforms it provides me personalization report on investors  which helps me deciding future goals more correctly",
    },
    {
        id: 2,
        name: "ARJUN TYAGI",
        job: "Blockchain Engineer",
        img: "/images/arju.jpg",
      text:
        "When i Starts my startup i need investors but no such platforms are available for that but KWIIK provides me investors that helps me boost my startup  thanks KWIIK!!",
    },
    {
      id: 3,
      name: "SUSHEEL KHANMOTRA",
      job: "Intern",
      img:
        "/images/sushi.jpg",
      text:
        "KWIIK a platform that provides the way to your startup many startups on platform are now big tech companies",
    },
    {
      id: 4,
      name: "KARTIKEY BHARDWAJ",
      job: "Creator",
      img:
        "/images/kartik.jpg",
      text:
        "I am' founder and CEO at KWIIK and my practice is to make every great idea a big acheivement in its life ",
    },
  ];


const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function () {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
});

// show person based on item
function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}
// show next person
nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});
// show prev person
prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});
// show random person
randomBtn.addEventListener("click", function () {
  console.log("hello");

  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson(currentItem);
});
