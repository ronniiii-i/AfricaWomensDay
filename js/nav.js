const navBar = document.querySelector("nav");
const burger = document.querySelector(".burger");
const span = document.querySelector("span.a");
const dropdown = document.querySelector("ol.dropdown");
let slider = tns({
  container : ".my-slider",
  "slideBy" : "1",
  "speed" : 400,
  "nav" : false,
  autoplay : true,
  controls: false,
  autoplayButtonOutput : false,
  responsive: {
    1600: {
      items : 4,
      gutter : 20
    },
    1024:{
      items: 3,
      gutter : 20
    },
    768:{
      items : 2,
      gutter : 20
    },
    480:{
      items : 1
    }
  }
})
burger.addEventListener("click", () => {
  navBar.classList.toggle("show");
  burger.classList.toggle("active");
  console.log(navBar);
});
span.addEventListener("click", () => {
  dropdown.classList.toggle("act");
  console.log(dropdown);
});

