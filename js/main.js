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
  
      if (location.hostname) {
        location.pathname = "index.html";
      } else {
        var path = location.pathname.split("/");
        path[path.length - 1] = "index.html";
        location.pathname = path.join("/");
      }
    });
  } else {
    document.getElementById("form").classList.remove("d-none");
  }
  //-------------------------------------------------------------------
  