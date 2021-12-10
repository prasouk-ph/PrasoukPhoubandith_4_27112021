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

// form fulfillement conditions
let firstNameValid;
firstName.addEventListener("change", firstCheck);
lastName.addEventListener("change", lastCheck);
email.addEventListener("change", emailCheck);
birthdate.addEventListener("change", birthdateCheck);
participationQuantity.addEventListener("change", quantityCheck);
// location.addEventListener("change", lastCheck);



function firstCheck() {
    let value = firstName.value;
    let letters = /^[A-Za-z]+$/;
    let input = document.getElementById("firstNameInput");
    if (value.length < 2 || value === null || letters.test(value) == false) {
        input.setAttribute("data-error-visible", "true");
        // data-error attribute creation with text value, works with formData::after in css
        input.setAttribute("data-error", "Veuillez entrer 2 caractères ou plus");
        firstNameValid = false;
    } else {
        input.setAttribute("data-error-visible", "false");
        firstNameValid = true;
    }
}

function lastCheck(result) {
    let value = result.target.value;
    let letters = /^[A-Za-z]+$/;
    let input = document.getElementById("lastNameInput");
    if (value.length < 2 || value === null || letters.test(value) == false) {
        input.setAttribute("data-error-visible", "true");
        // data-error attribute creation with text value, works with formData::after in css
        input.setAttribute("data-error", "Veuillez entrer 2 caractères ou plus");
        lastNameValid = false;
    } else {
        input.setAttribute("data-error-visible", "false");
        lastNameValid = true;
    }
}

function emailCheck(result) {
    let value = result.target.value;
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

// function birthdateCheck(result) {
//     let value = result.target.value;
// 	let regex = /^\S+@\S+\.\S+$/;
//     let input = document.getElementById("birthdateInput");
//     if (regex.test(value) == false) {
//         input.setAttribute("data-error-visible", "true");
//         // data-error attribute creation with text value, works with formData::after in css
//         input.setAttribute("data-error", "Veuillez entrer une date valide");
//         return false;
//     } else {
//         input.setAttribute("data-error-visible", "false");
//         input.setAttribute("data-error", "");
//         return true;
//     }
// }


function quantityCheck(result) {
    let value = result.target.value;
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

conditionsCheckbox.addEventListener("change", conditionsChecking);

function conditionsChecking() {
    // let input = document.getElementById("conditionsInput");
    if (conditionsCheckbox.checked == true) {
        alert("yes");
        // input.setAttribute("data-error-visible", "true");
        // // data-error attribute creation with text value, works with formData::after in css
        // input.setAttribute("data-error", "Veuillez accepter les conditions d'utilisation");
        // // return false;
    } else {
        // input.setAttribute("data-error-visible", "false");
        // // return true;
        alert("no");
    }
}


function validate(event) {
    // to prevent form submit
    event.preventDefault();
    firstCheck();
    // if (firstNameValid == true || lastName.value.length < 2  || email.value == "" || birthdate.value == "" || checkbox.checked == false) {
    if (firstNameValid == true && conditionsCheckbox.checked == true) {
        // launch form confirmation
        modalBody.style.display = "none";
        formConfirmation.style.display = "flex";
        formular.reset();
    } else {
        alert("Saisie invalide")
        // if (firstNameValid != true) {
        //     let input = document.getElementById("firstNameInput");
        //     input.setAttribute("data-error-visible", "true");
        //     // data-error attribute creation with text value, works with formData::after in css
        //     input.setAttribute("data-error", "Veuillez entrer 2 caractères ou plus");
        //     return firstNameValid == false;
        // }
        
    }
}
