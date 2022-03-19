var body_wrapper = document.getElementById("body-wrapper");
var header_wrapper = document.getElementById("header-wrapper");
var footer_wrapper = document.getElementById("footer-wrapper");
var html = document.querySelector("html");
var load_page;

function myFunction() {
  load_page = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}

function onload_func() {
  body_wrapper.style.paddingTop = header_wrapper.offsetHeight + "px";

  //check if we are not filling up all of the space
  if (window.innerHeight > html.offsetHeight) {
    var fill = window.innerHeight - html.offsetHeight;
    body_wrapper.style.paddingBottom = fill;
  }
}

function onresize_func() {
  body_wrapper.style.paddingTop = header_wrapper.offsetHeight + "px";

  //check if we are not filling up all of the space
  if (window.innerHeight > html.offsetHeight) {
    let fill = window.innerHeight - html.offsetHeight;
    body_wrapper.style.paddingBottom = fill + "px";
  } else {
    let fill = window.innerHeight - body_wrapper.offsetHeight;
    body_wrapper.style.paddingBottom = fill + "px";
  }
}

window.onload = onload_func();
window.onresize = onresize_func();
