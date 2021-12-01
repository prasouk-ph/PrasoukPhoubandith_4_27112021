function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalCloseBtn = document.querySelector(".close");
const modalBtnSubmit = document.querySelector(".btn-submit");
let firstName = document.querySelector("#first");
let lastName = document.querySelector("#last");
let email = document.querySelector("#email");
let birthdate = document.querySelector("#birthdate");
let quantity = document.querySelector("#quantity");
let checkbox = document.querySelector("#checkbox1");
let text = document.querySelectorAll(".text-control");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal event
modalCloseBtn.addEventListener("click", closeModal);

// close modal form
function closeModal() {
    modalbg.style.display = "none";
}


// form fulfillement conditions
modalBtnSubmit.addEventListener("click", checking);
modalBtnSubmit.style.color = "white";
modalBtnSubmit.style.background = "gray";

function checking(e) {
    if (firstName.value == "" || lastName.value == "" || email.value == "" || birthdate.value == "" || checkbox.checked == false) {
        alert("Saisie invalide")
        e.preventDefault();
    } else {
        alert("gogogogo");
        modalBtnSubmit.style.background = "red";
        
    }
}