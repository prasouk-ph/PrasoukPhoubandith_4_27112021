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
let firstError = document.querySelector(".firstError");
let lastName = document.querySelector("#last");
let email = document.querySelector("#email");
let birthdate = document.querySelector("#birthdate");
let quantity = document.querySelector("#quantity");
let conditionsCheckbox = document.querySelector("#checkbox1");
let text = document.querySelectorAll(".text-control");
let allError = document.querySelector(".error");
const formBtnConfirmation = document.querySelector(".btn-confirmation");
const formConfirmation = document.querySelector(".form-confirmation");



// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}




// close modal event
modalCloseBtn.addEventListener("click", closeModal);
formBtnConfirmation.addEventListener("click", closeModal);

// close modal form
function closeModal() {
    modalbg.style.display = "none";
    formConfirmation.style.display = "none";
}

// form fulfillement conditions
let firstNameValid = false;
firstName.addEventListener("change", textCheck);

function textCheck(e) {
    var value = e.target.value
    var letters = /^[A-Za-z]+$/;
     
    if (value.length < 2 || value === null || letters.test(value) == false) {
        firstNameValid = false;
    } else {
        firstError.innerText = "";
        firstNameValid = true;
    }
}

function emailValidation() {
	let regex = /^\S+@\S+\.\S+$/;
	return regex.test(email.value);
}

function validate() {
    // if (firstNameValid == true || lastName.value.length < 2  || email.value == "" || birthdate.value == "" || checkbox.checked == false) {
    if (firstNameValid == false || conditionsCheckbox.checked == false) {
        firstError.innerText = "Veuillez entrer 2 caractères ou plus";
        // to prevent form submit
        return false;
    } else {
        alert("Merci ! Votre réservation a été reçue.");
        // launch form confirmation
        formConfirmation.style.display = "block";
    }
}


// modalBtnSubmit.addEventListener("click", checking);
// modalBtnSubmit.style.color = "white";
// modalBtnSubmit.style.background = "gray";

// function checking(e) {
//     if (firstName.value == "" || lastName.value == "" || email.value == "" || birthdate.value == "" || checkbox.checked == false) {
//         alert("Saisie invalide")
//         e.preventDefault();
//     } else {
//         alert("Merci ! Votre réservation a été reçue.");
//         modalBtnSubmit.style.background = "red";
        
//     }
// }

// // error details
// firstName.addEventListener("change", errorMessage);

// function errorMessage() {
//     if (firstName.value.length < 2) {
//         error.innerText = "Veuillez entrer 2 caractères ou plus";
//     } else {
//         error.innerText = "";
//     }
// }


