const filter = (idname, classname) => {
  const elements = document.getElementsByClassName(classname);
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.display = "none";
  }
  document.getElementById(idname).style.display = "block";
};

let mainNav = document.getElementById("js-menu");
let navBarToggle = document.getElementById("js-navbar-toggle");

navBarToggle.addEventListener("click", function () {
  mainNav.classList.toggle("on");
});
