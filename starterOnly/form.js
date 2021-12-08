//	Variables
//

// DOM elements
const modalForm = document.querySelector(".bground");
const modalConfirm = document.querySelector(".confirm-modal");
const modalConfirmBtn = document.querySelector(".confirm-modal-btn");
const modalConfirmClose = document.querySelector(".confirm-close");
const form = document.querySelector("form");
const firstNameInput = document.getElementById("first");
const lastNameInput = document.getElementById("last");
const emailInput = document.getElementById("email");
const birthdateInput = document.getElementById("birthdate");
const quantityInput = document.getElementById("quantity");
const locationInput = document.querySelectorAll(".checkbox-input[type=radio]");
const checkboxInput = document.getElementById("checkbox1");
const confirmModal = document.getElementById("confirm-modal");

// error messages

const errorMessages = {
	lastName: "Veuillez entrer un nom comportant 2 caractères ou plus.",
	firstName: "Veuillez entrer un prénom comportant 2 caractères ou plus.",
	email: "Veuillez entrer une adresse email valide.",
	birthdate: "Veuillez entrer une date de naissance valide.",
	quantity: "Veuillez entrer un nombre valide.",
	location: "Veuillez choisir une ville.",
	checkbox: "Veuillez accepter les conditions d'utilisations.",
};

//
// Functions
//

//invalid alert
function isInvalid(element, message) {
	let target;
	if (NodeList.prototype.isPrototypeOf(element)) target = element[0].parentNode;
	else target = element.parentNode;
	target.setAttribute("data-error-visible", true);
	target.setAttribute("data-error", message);
}

//valid alert
function isValid() {
	modalForm.style.display = "none";
	modalConfirm.style.display = "flex";
	modalConfirmBtn.addEventListener("click", () => {
		modalConfirm.style.display = "none";
	});
	modalConfirmClose.addEventListener("click", () => {
		modalConfirm.style.display = "none";
	});
}

//delete previous alerts
function removeAlerts() {
	let invalidFields = document.querySelectorAll(
		'.formData[data-error-visible="true"]'
	);
	for (let field of invalidFields) {
		field.setAttribute("data-error-visible", false);
		field.setAttribute("data-error", "");
	}
}

// check first name
function firstValidation() {
	let inputValue = firstNameInput.value;
	if (inputValue !== null && inputValue.length >= 2) return true;
	else return false;
}

// check last name
function lastValidation() {
	let inputValue = lastNameInput.value;
	if (inputValue !== null && inputValue.length >= 2) return true;
	else return false;
}

//check if email use valid formatting
function emailValidation() {
	let regex = /^\S+@\S+\.\S+$/;
	return regex.test(emailInput.value);
}

//check if birthdate is valid and older than today
function birthdateValidation() {
	let birthdate = new Date(birthdateInput.value);
	let today = new Date();
	if (birthdate.toString() !== "Invalid Date") {
		if (
			birthdate.getDate() >= today.getDate() &&
			birthdate.getMonth() == today.getMonth() &&
			birthdate.getFullYear() == today.getFullYear()
		) {
			return false;
		} else {
			return true;
		}
	} else {
		return false;
	}
}

// check if quantity is a valid number
function quantityValidation() {
	let regex = /^[0-9]+$/;
	return regex.test(quantityInput.value);
}

// check if user chose a location
function locationValidation() {
	for (let radio of locationInput) {
		if (radio.checked === true) return true;
	}
	return false;
}

//check if cgu are checked
function checkboxValidation() {
	return checkboxInput.checked;
}

// global form validation
function validate(event) {
	event.preventDefault();
	let isValidInput = true;
	removeAlerts();
	if (!firstValidation()) {
		isValidInput = false;
		isInvalid(firstNameInput, errorMessages.firstName);
	}
	if (!lastValidation()) {
		isValidInput = false;
		isInvalid(lastNameInput, errorMessages.lastName);
	}
	if (!emailValidation()) {
		isValidInput = false;
		isInvalid(emailInput, errorMessages.email);
	}
	if (!birthdateValidation()) {
		isValidInput = false;
		isInvalid(birthdateInput, errorMessages.birthdate);
	}
	if (!quantityValidation()) {
		isValidInput = false;
		isInvalid(quantityInput, errorMessages.quantity);
	}
	if (!locationValidation()) {
		isValidInput = false;
		isInvalid(locationInput, errorMessages.location);
	}
	if (!checkboxValidation()) {
		isValidInput = false;
		isInvalid(checkboxInput, errorMessages.checkbox);
	}
	if (isValidInput) {
		isValid();
	}
}