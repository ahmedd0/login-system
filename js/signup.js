var userNameInput = document.getElementById("userName");
var userEmailInput = document.getElementById("userEmail");
var userPasswordInput = document.getElementById("userPassword");
var signupBtn = document.getElementById("signupBtn");
var users;
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
    users.push(userInfo);
    localStorage.setItem("users", JSON.stringify(users));
    alert("Done");
    var path = location.href.split("/");
    path[path.length - 1] = "index.html";
    location.href = path.join("/");
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
//--------------------------------------------------------------------
signupBtn.addEventListener("click", function () {
  signUp();
});
