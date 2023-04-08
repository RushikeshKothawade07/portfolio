var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    // scrolling up
    if (window.scrollY < 10) 
    document.querySelector(".navbar-logo").classList.remove("hidden");
  } else {
    // scrolling down
    if (window.scrollY > 10) {
      document.querySelector(".navbar-logo").classList.add("hidden");
    }
  }
  prevScrollpos = currentScrollPos;
}
