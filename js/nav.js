const navBar = document.querySelector("nav");
const burger = document.querySelector(".burger");
const span = document.querySelector("span.a");
const dropdown = document.querySelector("ol.dropdown");

burger.addEventListener('click', () => {
    navBar.classList.toggle('show');
    burger.classList.toggle('active');
    console.log(navBar);
})
span.addEventListener('click', () => {
    dropdown.classList.toggle('act');
    console.log(dropdown);
})
