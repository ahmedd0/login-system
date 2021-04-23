var emailInput = document.getElementById("email");
var passwordInput = document.getElementById("password");
var signinBtn = document.getElementById("signinBtn");
var signout;
var users;
var userInfo;
//------------------if userd already login show the user page------------
if (localStorage.getItem("currentUser")) {
  var currentUser = JSON.parse(localStorage.getItem("currentUser"));
  document.body.innerHTML = `<nav class="navbar navbar-expand-sm navbar-light main-bg fixed-top">
  <div class="container">
      <a class="navbar-brand text-white" href="index.html">SMART LOGIN
      </a>
      <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse"
          data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="collapsibleNavId">
          <ul class="list-unstyled ml-auto mb-0">
              <li class="nav-item">
                  <button id="logoutBtn" class="btn btn-outline-warning">logout</button>
              </li>

          </ul>

      </div>
  </div>

</nav>
<div class="h-100 d-flex justify-content-center align-items-center">
  <div class="mt-5 w-50 text-center p-5 box main-color">
      <h1 id="username" class="username">Welcome ${currentUser.name}</h1>

  </div>
</div>`;
  signout = document.getElementById("signout");
  logoutBtn.addEventListener("click", function () {
    if (localStorage.getItem("currentUser")) {
      localStorage.removeItem("currentUser");
    }

    var path = location.href.split("/");
    path[path.length - 1] = "index.html";
    location.href = path.join("/");
  });
} else {
  document.getElementById("form").classList.remove("d-none");
}
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
signinBtn.addEventListener("click", function () {
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
});
