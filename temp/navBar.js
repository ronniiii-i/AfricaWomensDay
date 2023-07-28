function myFunction() {
  var x = document.getElementById("myLinks");

  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
    x.style.marginTop = "78px";
    x.style.backgroundColor = "#ffff";
    x.style.position = "absolute";
    x.style.left = "60%";
    x.style.width = "100%";
  }
}
