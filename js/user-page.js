var logoutBtn = document.getElementById("logoutBtn");
//---------------------------------------------------------------

import { isUserLoggedIn } from "./main.js";
isUserLoggedIn();

logoutBtn.addEventListener("click", function () {
  if (localStorage.getItem("currentUser")) {
    localStorage.removeItem("currentUser");
  }
  var path = location.href.split("/");
  path[path.length - 1] = "index.html";
  location.href = path.join("/");
});

//----------------------------------------------------------------------------------
if (localStorage.getItem("currentUser") == null) {
  document.getElementById("username").innerHTML = `Error 404`;
} else {
  var currentUser = JSON.parse(localStorage.getItem("currentUser"));
  document.getElementById("username").innerHTML = `Welcome ${currentUser.name}`;
}
//------------------------------------------------------------------------------------
