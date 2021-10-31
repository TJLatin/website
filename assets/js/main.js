const filter = (idname, classname) => {
  const elements = document.getElementsByClassName(classname);
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.display = "none";
  }
  document.getElementById(idname).style.display = "block";
};

let mainNav = document.getElementById("js-menu");
let navBarToggle = document.getElementById("js-navbar-toggle");

navBarToggle.addEventListener("click", () => mainNav.classList.toggle("on"));

const linkToggle = (idname) => {
  let e = document.getElementById(idname);
  if (e.style.display == "block") {
    e.style.display = "none";
  }
  else {
    e.style.display = "block";
  }
}
