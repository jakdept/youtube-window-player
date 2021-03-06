function showMasthead() {
  hideMastheadFn();
  $(" #masthead-container ").slideDown(400);
}

// adds the refresh warning to the page
var hideMastheadFn = debounce(function () {
  console.log("youtube player tweak - hiding masthead");
  $(" #masthead-container ").slideUp(400);
}, 1000 * 3);


// add listeners
window.addEventListener("mousemove", showMasthead);
window.addEventListener("click", showMasthead);
window.addEventListener("wheel", showMasthead);
window.addEventListener("keydown", showMasthead);
window.addEventListener("keyup", showMasthead);