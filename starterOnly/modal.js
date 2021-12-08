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
let emailError = document.querySelector(".emailError");
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
let emailValid = false;
let birthdateValid = false;
firstName.addEventListener("input", firstCheck);
lastName.addEventListener("input", lastCheck);
email.addEventListener("change", emailCheck);
birthdate.addEventListener("change", birthdateCheck);

function firstCheck(result) {
    var value = result.target.value;
    var letters = /^[A-Za-z]+$/;
    var name = document.getElementById("firstNameInput");
    if (value.length < 2 || value === null || letters.test(value) == false) {
        name.setAttribute("data-error-visible", "true");
        // data-error attribute creation with text value, works with formData::after in css
        name.setAttribute("data-error", "Veuillez entrer 2 caractères ou plus");
        firstNameValid = false;
    } else {
        name.setAttribute("data-error-visible", "false");
        name.setAttribute("data-error", "");
        firstNameValid = true;
    }
}

function lastCheck(result) {
    var value = result.target.value;
    var letters = /^[A-Za-z]+$/;
    var name = document.getElementById("lastNameInput");
    if (value.length < 2 || value === null || letters.test(value) == false) {
        name.setAttribute("data-error-visible", "true");
        // data-error attribute creation with text value, works with formData::after in css
        name.setAttribute("data-error", "Veuillez entrer 2 caractères ou plus");
        lastNameValid = false;
    } else {
        name.setAttribute("data-error-visible", "false");
        name.setAttribute("data-error", "");
        lastNameValid = true;
    }
}

function emailCheck(result) {
    var value = result.target.value;
	var regex = /^\S+@\S+\.\S+$/;
    if (regex.test(value) == false) {
        emailValid = false;
    } else {
        emailError.innerText = "";
        emailValid = true;
    }
}

function birthdateCheck(result) {
    var value = result.target.value;
	var regex = /^\S+@\S+\.\S+$/;
    if (regex.test(value) == false) {
        birthdateValid = false;
    } else {
        birthdateError.innerText = "";
        birthdateValid = true;
    }
}

function validate() {
    // if (firstNameValid == true || lastName.value.length < 2  || email.value == "" || birthdate.value == "" || checkbox.checked == false) {
    if (firstNameValid == false || conditionsCheckbox.checked == false) {
        firstError.innerText = "Veuillez entrer 2 caractères ou plus";
        emailError.innerText = "Veuillez entrer 2 caractères ou plus";

        // to prevent form submit
        return false;
    } 
    else {
        alert("Merci ! Votre réservation a été reçue.");
        // launch form confirmation
        formConfirmation.style.display = "block";
    }
}
