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
const modalCloseBtn = document.querySelectorAll(".close");
const modalBtnSubmit = document.querySelector(".btn-submit");
const formBtnConfirmation = document.querySelector(".btn-confirmation");
const formConfirmation = document.querySelector(".form-confirmation");
let firstName = document.querySelector("#first");
let lastName = document.querySelector("#last");
let email = document.querySelector("#email");
let birthdate = document.querySelector("#birthdate");
let participationQuantity = document.querySelector("#quantity");

let conditionsCheckbox = document.querySelector("#checkbox1");


let firstNameInput = document.querySelector(".firstNameInput");


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
//   to send another form
  modalBody.style.display = "block";
}

// close modal event
modalCloseBtn.forEach((btn) => btn.addEventListener("click", closeModal));
formBtnConfirmation.addEventListener("click", closeModal);

// close modal form
function closeModal() {
  modalbg.style.display = "none";
  formConfirmation.style.display = "none";
}

// event listening
firstName.addEventListener("change", firstCheck);
lastName.addEventListener("change", lastCheck);
email.addEventListener("change", emailCheck);
birthdate.addEventListener("change", birthdateCheck);
participationQuantity.addEventListener("change", quantityCheck);

conditionsCheckbox.addEventListener("change", conditionsChecking);



// input conditions
function firstCheck() {
    let value = firstName.value;
    let letters = /^[A-Za-z]+$/;
    let input = document.getElementById("firstNameInput");
    if (value.length < 2 || value === null || letters.test(value) == false) {
        input.setAttribute("data-error-visible", "true");
        // data-error attribute creation with text value, works with formData::after in css
        input.setAttribute("data-error", "Veuillez entrer 2 caractères ou plus");
        return false;
    } else {
        input.setAttribute("data-error-visible", "false");
        return true;
    }
}

function lastCheck() {
    let value = lastName.value;
    let letters = /^[A-Za-z]+$/;
    let input = document.getElementById("lastNameInput");
    if (value.length < 2 || value === null || letters.test(value) == false) {
        input.setAttribute("data-error-visible", "true");
        // data-error attribute creation with text value, works with formData::after in css
        input.setAttribute("data-error", "Veuillez entrer 2 caractères ou plus");
        return false;
    } else {
        input.setAttribute("data-error-visible", "false");
        return true;
    }
}

function emailCheck() {
    let value = email.value;
	let regex = /^\S+@\S+\.\S+$/;
    let input = document.getElementById("emailInput");
    if (regex.test(value) == false) {
        input.setAttribute("data-error-visible", "true");
        // data-error attribute creation with text value, works with formData::after in css
        input.setAttribute("data-error", "Veuillez entrer un mail valide");
        return false;
    } else {
        input.setAttribute("data-error-visible", "false");
        return true;
    }
}

function birthdateCheck() {
    let value = birthdate.value;
    let regex = /^((19[3-9]+[0-9]|200[0-9])-(0?[1-9]|1[0-2])-(0?[1-9]|[12]\d|3[01])|(0?[1-9]|[12]\d|3[01])[/](0?[1-9]|1[0-2])[/](19[3-9]+[0-9]|200[0-6]))$/;
    let input = document.getElementById("birthdateInput");
    // if (value == "") {
    if (regex.test(value) == false) {
        input.setAttribute("data-error-visible", "true");
        // data-error attribute creation with text value, works with formData::after in css
        input.setAttribute("data-error", "Veuillez entrer une date valide");
        return false;
    } else {
        input.setAttribute("data-error-visible", "false");
        return true;
    }
}

function quantityCheck() {
    let value = participationQuantity.value;
    let regex = /^[0-9]+$/;
    let input = document.getElementById("quantityInput");
    if (regex.test(value) == false) {
        input.setAttribute("data-error-visible", "true");
        // data-error attribute creation with text value, works with formData::after in css
        input.setAttribute("data-error", "Veuillez entrer une nombre");
        return false;
    } else {
        input.setAttribute("data-error-visible", "false");
        return true;
    }
}


locationInput.addEventListener("change", locationChecking);
const locationsRadio = document.querySelectorAll("input[type=radio]");

function locationChecking() {
    let input = document.getElementById("locationInput");
	// for (let radio of locationsRadio) {
    for (let i = 0; i < 7; i++) {
		// if (radio.checked == false) {
        if (locationsRadio[i].checked == false) {
            input.setAttribute("data-error-visible", "true");
            // data-error attribute creation with text value, works with formData::after in css
            input.setAttribute("data-error", "Veuillez accepter sélectionner une ville");
            // return false;
	    } else {
            input.setAttribute("data-error-visible", "false");
            // return true;
        }
    }
}



function conditionsChecking() {
    let input = document.getElementById("conditionsInput");
    if (conditionsCheckbox.checked != true) {
        input.setAttribute("data-error-visible", "true");
        // data-error attribute creation with text value, works with formData::after in css
        input.setAttribute("data-error", "Veuillez accepter les conditions d'utilisation");
        return false;
    } else {
        input.setAttribute("data-error-visible", "false");
        return true;
    }
}


function validate(event) {
    // to prevent form submit
    event.preventDefault();
    firstCheck();
    lastCheck();
    emailCheck();
    quantityCheck();
    birthdateCheck();
    locationChecking();
    conditionsChecking();
    if (firstCheck() == true
    && lastCheck() == true
    && emailCheck() == true
    && quantityCheck() == true
    // && birthdateCheck() == true
    // && locationValidation() == true
    && conditionsChecking() == true) {
        // launch form confirmation
        modalBody.style.display = "none";
        formConfirmation.style.display = "flex";
        formular.reset();
    }
}
