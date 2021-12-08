function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const formular = document.querySelector("#formular");
const modalbg = document.querySelector(".bground");
const modalBody = document.querySelector(".content");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalCloseBtn = document.querySelector(".close");
const modalBtnSubmit = document.querySelector(".btn-submit");
let firstName = document.querySelector("#first");
let lastName = document.querySelector("#last");
let email = document.querySelector("#email");
let birthdate = document.querySelector("#birthdate");
let quantity = document.querySelector("#quantity");
let conditionsCheckbox = document.querySelector("#checkbox1");
let text = document.querySelectorAll(".text-control");
const formBtnConfirmation = document.querySelector(".btn-confirmation");
const formConfirmation = document.querySelector(".form-confirmation");



// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  modalBody.style.display = "block";
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
let firstNameValid;
firstName.addEventListener("input", firstCheck);
lastName.addEventListener("input", lastCheck);
email.addEventListener("change", emailCheck);
birthdate.addEventListener("change", birthdateCheck);

function firstCheck(result) {
    var value = result.target.value;
    var letters = /^[A-Za-z]+$/;
    var input = document.getElementById("firstNameInput");
    if (value.length < 2 || value === null || letters.test(value) == false) {
        input.setAttribute("data-error-visible", "true");
        // data-error attribute creation with text value, works with formData::after in css
        input.setAttribute("data-error", "Veuillez entrer 2 caractères ou plus");
        firstNameValid = false;
    } else {
        input.setAttribute("data-error-visible", "false");
        input.setAttribute("data-error", "");
        firstNameValid = true;
    }
}

function lastCheck(result) {
    var value = result.target.value;
    var letters = /^[A-Za-z]+$/;
    var input = document.getElementById("lastNameInput");
    if (value.length < 2 || value === null || letters.test(value) == false) {
        input.setAttribute("data-error-visible", "true");
        // data-error attribute creation with text value, works with formData::after in css
        input.setAttribute("data-error", "Veuillez entrer 2 caractères ou plus");
        lastNameValid = false;
    } else {
        input.setAttribute("data-error-visible", "false");
        input.setAttribute("data-error", "");
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

function validate(event) {
    // to prevent form submit
    event.preventDefault();
    // if (firstNameValid == true || lastName.value.length < 2  || email.value == "" || birthdate.value == "" || checkbox.checked == false) {
    if (firstNameValid == true && conditionsCheckbox.checked == true) {
        alert("Merci ! Votre réservation a été reçue.");
        // launch form confirmation
        modalBody.style.display = "none";
        formConfirmation.style.display = "flex";
        formular.reset();
        formBtnConfirmation.addEventListener("click", closeformConfirmation);
        } 
}

function closeformConfirmation() {
    modalbg.style.display = "none";
}