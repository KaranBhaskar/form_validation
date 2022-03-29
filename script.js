// selecting element
// const input = Array.from(document.querySelectorAll("input"));
const form = document.querySelector(".form");
const divError = document.querySelector(".form__error");
const error = document.querySelector(".error__list");

const usernameInput = document.querySelector("#username");
const passwordInput = document.querySelector("#password");
const passwordConfirmationInput = document.querySelector("#re-password");
const agreeInput = document.querySelector("#agree");

//form submit {

form.addEventListener("submit", (e) => {
  const errors = [];
  clearList();

  if (usernameInput.value < 5) {
    errors.push("UserName must be atleast 5 characters");
  }
  if (passwordInput.value < 8) {
    errors.push("Password must be atleast 8 characters");
  }
  if (passwordConfirmationInput.value !== passwordInput.value) {
    errors.push("Passwords Doesn't match");
  }
  if (agreeInput.checked !== true) {
    errors.push("You must Accept the terms");
  }

  if (errors.length > 0) {
    e.preventDefault();
    // console.log(e.defaultPrevented);
    showError(errors);
  }
});

function showError(errorMessage) {
  errorMessage.forEach((element) => {
    const list = document.createElement("li");
    const listText = document.createTextNode(element);
    list.appendChild(listText);
    error.appendChild(list);
  });
  divError.classList.add("show");
}

function clearList() {
  while (error.firstChild) {
    error.removeChild(error.firstChild);
  }
  divError.classList.remove("show");
}

// form submit
// form.addEventListener("submit", (event) => {
//   event.preventDefault();

//   const element = document.createElement("li");
//   const element1 = document.createElement("li");
//   const element2 = document.createElement("li");
//   const userError = document.createTextNode(
//     "Username must be 8 charaters long"
//   );
//   const passwordError = document.createTextNode(
//     "Password must be 10 charaters long"
//   );
//   const termsError = document.createTextNode("You must accept the terms");
//   const passwordIncorrect = document.createTextNode("Password Must Match");

//   console.log(input[1].value !== input[2].value);
//   // if (
//   //   input[0].value == "" &&
//   //   input[1].value == "" &&
//   //   input[2].value == "" &&
//   //   input[3].checked == false
//   // ) {
//   //   element.appendChild(userError);
//   //   element1.appendChild(passwordError);
//   //   element2.appendChild(termsError);
//   //   console.log(element);
//   //   error.appendChild(element);
//   //   error.appendChild(element1);
//   //   error.appendChild(element2);
//   //   divError.classList.add("show");
//   // }

//   // if (input[0].value.length < 8) {
//   //   element.appendChild(userError);
//   //   error.appendChild(element);
//   //   divError.classList.add("show");

//   // }
//   // if (input[1].value.length < 10) {
//   //   element1.appendChild(passwordError);
//   //   error.appendChild(element1);
//   // }
//   if (input[1].value !== input[2].value) {
//     element1.appendChild(passwordIncorrect);
//     error.appendChild(element1);
//     divError.classList.add("show");
//   }
//   // if (input[3].checked == false) {
//   //   element2.appendChild(termsError);
//   //   error.appendChild(element2);
//   // }
// });
