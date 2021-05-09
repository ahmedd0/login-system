var emailInput = document.getElementById("email");
var passwordInput = document.getElementById("password");
let emailAlert = document.getElementById("emailAlert");
let passwordAlert = document.getElementById("passwordAlert");
let emailRegex = /^[a-zA-Z\.]{3,}@[A-Za-z0-9]{2,}\.[a-zA-Z0-9]{2,}$/m;
let passwordRegex = /^[A-Za-z0-9]{4,12}$/;

var users;
var userInfo;
var signinBtn = document.getElementById("signinBtn");
//---------------------------------------------------------------

import { isUserLoggedIn } from "./main.js";
import validation from "./validation.js";
isUserLoggedIn();
//------------------------------------------------------------------------------------
//------------------- Get All User If They Exist in localStorage
if (localStorage.getItem("users") == null) {
  users = [];
} else {
  users = JSON.parse(localStorage.getItem("users"));
}
//------------------- Get All User If They Exist in localStorage

//------------------- Collect Login Data ----------------------

function collectData() {
  var loginData = {
    email: emailInput.value,
    password: passwordInput.value,
  };
  return loginData;
}
//------------------------------------------------------------------------------
function isUser() {
  var user = collectData();
  var a = false;
  for (let i = 0; i < users.length; i++) {
    if (users[i].email == user.email && users[i].password == user.password) {
      a = true;
      userInfo = users[i];
      break;
    }
  }
  return a;
}
//------------------------------------------------------------------------------
function signIn() {
  if (isUser()) {
    localStorage.setItem("currentUser", JSON.stringify(userInfo));
    console.log(location);
    location.pathname = "user-page.html";
    var path = location.href.split("/");
    path[path.length - 1] = "user-page.html";
    location.href = path.join("/");

    console.log(location.href);
  } else {
    alert("not Exist");
  }
}
//--------------------------------------------------------------------------------
function isValid() {
  if (
    emailInput &&
    passwordInput &&
    emailRegex.test(emailInput.value) &&
    passwordRegex.test(passwordInput.value)
  ) {
    signinBtn.removeAttribute("disabled");
    return true;
  } else {
    signinBtn.setAttribute("disabled", "true");
    return false;
  }
}
signinBtn.addEventListener("click", signIn);
emailInput.addEventListener("keyup", () => {
  validation.validate(emailInput, emailRegex, emailAlert);
  isValid();
});
passwordInput.addEventListener("keyup", () => {
  validation.validate(passwordInput, passwordRegex, passwordAlert);
  isValid();
});
