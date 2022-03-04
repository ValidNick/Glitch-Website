function mainP() {
  var homePage = document.getElementById("homePage");
  var contactPage = document.getElementById("contactPage");
  var typePage = document.getElementById("typePage");
  var growthPage = document.getElementById("growthPage");
if (homePage.style.display === "none") {
    homePage.style.display = "block";
    contactPage.style.display = "none";
    typePage.style.display = "none"
    growthPage.style.display = "none";
  } else {
    homePage.style.display = "none"
  }
}

function contactUs() {
  var contactPage = document.getElementById("contactPage");
  var homePage = document.getElementById("homePage");
  var typePage = document.getElementById("typePage");
  var growthPage = document.getElementById("growthPage");
  if (contactPage.style.display === "none") {
    contactPage.style.display = "block";
    homePage.style.display ="none"
    typePage.style.display = "none"
    growthPage.style.display = "none";
  } else {
    contactPage.style.display = "none";
  }
}


function types() {
  var typePage = document.getElementById("typePage");
  var homePage = document.getElementById("homePage")
  var contactPage = document.getElementById("contactPage");
  var growthPage = document.getElementById("growthPage");
  if (typePage.style.display === "none") {
    typePage.style.display = "block";
    homePage.style.display = "none"
    contactPage.style.display = "none";
    growthPage.style.display = "none";
  } else {
    typePage.style.display = "none"
  }
  
}
function growth() {
  var growthPage = document.getElementById("growthPage");
  var homePage = document.getElementById("homePage");
  var contactPage = document.getElementById("contactPage");
  var typePage = document.getElementById("typePage");
  if (growthPage.style.display === "none") {
    growthPage.style.display = "block";
    homePage.style.display = "none";
    typePage.style.display = "none";
    contactPage.style.display = "none";
  } else {
    growthPage.style.display = "none";
  }
}