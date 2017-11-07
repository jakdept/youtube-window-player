function showMasthead() {
  hideMastheadFn();
  $(" #masthead-container ").show();
}

// adds the refresh warning to the page
var hideMastheadFn = debounce(function () {
  console.log("youtube player tweak - hiding masthead");
  $(" #masthead-container ").hide(400);
}, 1000 * 5);


// add listeners
window.addEventListener("mousemove", showMasthead);
// window.addEventListener("mousedown", showMasthead());
// window.addEventListener("mouseup", showMasthead());
window.addEventListener("click", showMasthead);
window.addEventListener("wheel", showMasthead);
window.addEventListener("keydown", showMasthead);
window.addEventListener("keyup", showMasthead);