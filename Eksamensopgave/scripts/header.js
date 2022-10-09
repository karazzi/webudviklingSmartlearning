$(document).ready(function(){
    let page = getCurrentPage();
    document.getElementById("nav-" + page).classList.add("active");
})

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("navbar");
    if (x.classList.contains("topnav")) {
      x.classList.add("responsive");
    } else {
      x.classList.remove("responsive");
    }
  }