var userNameInput = document.getElementById("userName");
var userEmailInput = document.getElementById("userEmail");
var userPasswordInput = document.getElementById("userPassword");
var signupBtn = document.getElementById("signupBtn");
let userNameAlert = document.getElementById("userNameAlert");
let emailAlert = document.getElementById("emailAlert");
let passwordAlert = document.getElementById("passwordAlert");

var users;
//---------------------------------------------------------------
// regex
let emailRegex = /^[a-zA-Z\.]{3,}@[A-Za-z0-9]{2,}\.[a-zA-Z0-9]{2,}$/m;
let userNameRegex = /^[A-Z][a-zA-Z0-9 ]{3,}$/;
let passwordRegex = /^[A-Za-z0-9]{4,12}$/;

//---------------------------------------------------------------
import { isUserLoggedIn } from "./main.js";
import validation from "./validation.js";
isUserLoggedIn();

//----------------------------------------------------------------
if (localStorage.getItem("users") == null) {
  users = [];
} else {
  users = JSON.parse(localStorage.getItem("users"));
}
//----------------------------------------------------------------
function signUp() {
  var userInfo = collectData();
  if (isUser()) {
    alert("sorry this user is already exist");
  } else {
    if (isValid()) {
      users.push(userInfo);
      localStorage.setItem("users", JSON.stringify(users));
      clearInputs();
      validation.hideValidationEffect(userNameInput, userNameAlert);
      validation.hideValidationEffect(userEmailInput, emailAlert);
      validation.hideValidationEffect(userPasswordInput, passwordAlert);
      isValid();
      alert("signed up successfully");
    } else {
      signupBtn.setAttribute("disabled", "true");
      alert("sorry data is invalid");
    }
  }
}
//-----------------------------------------------------------------
function collectData() {
  var user = {
    name: userNameInput.value,
    email: userEmailInput.value,
    password: userPasswordInput.value,
  };
  return user;
}
//--------------------------------------------------------------------
function isUser() {
  var user = collectData();
  var a = false;
  for (let i = 0; i < users.length; i++) {
    if (users[i].email == user.email) {
      a = true;
      break;
    }
  }
  return a;
}
//--------------------------------------------
function isValid() {
  if (
    userEmailInput &&
    userNameInput &&
    userPasswordInput &&
    userNameRegex.test(userNameInput.value) &&
    passwordRegex.test(userPasswordInput.value) &&
    emailRegex.test(userEmailInput.value)
  ) {
    signupBtn.removeAttribute("disabled");
    return true;
  } else {
    signupBtn.setAttribute("disabled", "true");

    return false;
  }
}
//----------------------------------------------------------------------
function clearInputs(params) {
  userEmailInput.value = "";
  userNameInput.value = "";
  userPasswordInput.value = "";
}
//--------------------------------------------------------------------
signupBtn.addEventListener("click", function () {
  signUp();
});
userNameInput.addEventListener("keyup", () => {
  validation.validate(userNameInput, userNameRegex, userNameAlert);
  isValid();
});
userEmailInput.addEventListener("keyup", () => {
  validation.validate(userEmailInput, emailRegex, emailAlert);
  isValid();
});
userPasswordInput.addEventListener("keyup", () => {
  validation.validate(userPasswordInput, passwordRegex, passwordAlert);
  isValid();
});
