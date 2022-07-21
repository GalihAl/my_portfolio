const hamburgerButton = document.getElementById("hamburger")
const navList = document.getElementById("nav-list")

hamburgerButton.addEventListener("click", function(){
    navList.classList.toggle("show");
});