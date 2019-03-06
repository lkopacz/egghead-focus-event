const topMenuLinks = document.querySelectorAll(".menu__link");

topMenuLinks.forEach(link => {
  if (link.nextElementSibling) {
    link.addEventListener("focus", function() {
      this.parentElement.classList.add("focus");
    });
  }
});
