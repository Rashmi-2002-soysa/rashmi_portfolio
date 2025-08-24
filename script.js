// toggle menu in small screens
let menuIcon = document.querySelector("#menu-icon");
let navBar = document.querySelector(".nav-bar");

menuIcon.onclick = () => {
  navBar.classList.toggle("active");
  menuIcon.classList.toggle("fa-xmark"); // switch icon (bars ↔ x)
};

// select all nav links and sections
const navLinks = document.querySelectorAll("header nav a");
const sections = document.querySelectorAll("section");
const barsBox = document.querySelector(".bars-box");

// change section on nav click
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    // remove active from all nav links
    navLinks.forEach((lnk) => lnk.classList.remove("active"));
    link.classList.add("active");

    // remove active from all sections
    sections.forEach((sec) => sec.classList.remove("active"));

    // add active to target section
    const targetId = link.getAttribute("href").substring(1);
    document.getElementById(targetId).classList.add("active");

    // close nav after selecting (for mobile)
    navBar.classList.remove("active");
    menuIcon.classList.remove("fa-xmark");

    // trigger barsBox animation
    barsBox.classList.remove("active");
    setTimeout(() => {
      barsBox.classList.add("active");
    }, 1100);
  });
});

// resume section toggle
const resumeBtns = document.querySelectorAll(".resume-btn");
const resumeDetails = document.querySelectorAll(".resume-details");

resumeBtns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    resumeBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    resumeDetails.forEach((detail) => detail.classList.remove("active"));
    resumeDetails[index].classList.add("active");
  });
});

// portfolio carousel
const portfolioDetails = document.querySelectorAll(".portfolio-detail");
const imgItems = document.querySelectorAll(".portfolio-carousel .img-item");
const prevBtn = document.querySelector(".arrow-left");
const nextBtn = document.querySelector(".arrow-right");

let currentIndex = 0;

function showPortfolio(index) {
  if (index < 0) index = portfolioDetails.length - 1;
  if (index >= portfolioDetails.length) index = 0;
  currentIndex = index;

  portfolioDetails.forEach((detail) => detail.classList.remove("active"));
  imgItems.forEach((img) => img.classList.remove("active"));

  portfolioDetails[currentIndex].classList.add("active");
  imgItems[currentIndex].classList.add("active");
}

prevBtn.addEventListener("click", () => {
  showPortfolio(currentIndex - 1);
});

nextBtn.addEventListener("click", () => {
  showPortfolio(currentIndex + 1);
});

// init first slide
showPortfolio(currentIndex);
