var logoutBtn = document.getElementById("logoutBtn");

logoutBtn.addEventListener("click", function () {
  if (localStorage.getItem("currentUser")) {
    localStorage.removeItem("currentUser");
  }
  if (location.hostname) {
    location.pathname = "index.html";
  } else {
    var path = location.pathname.split("/");
    path[path.length - 1] = "index.html";
    location.pathname = path.join("/");
  }
});

//----------------------------------------------------------------------------------
if (localStorage.getItem("currentUser") == null) {
  document.getElementById("username").innerHTML = `Error 404`;
} else {
  var currentUser = JSON.parse(localStorage.getItem("currentUser"));
  document.getElementById("username").innerHTML = `Welcome ${currentUser.name}`;
}
//------------------------------------------------------------------------------------
