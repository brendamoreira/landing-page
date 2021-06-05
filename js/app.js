/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */
const sections = document.querySelectorAll("section");
/**
 * End Global Variables
 *
 */

/**
 * Begin Main Functions
 *
 */

// build the nav
function buildNav() {
  const navBar = document.querySelector("#navbar__list");
  for (const item of sections) {
    const sectionItem = document.createElement("li");
    sectionItem.textContent = item.getAttribute("data-nav");
    sectionItem.classList.add("menu__link");
    sectionItem.id = item.id + "-link";
    sectionItem.addEventListener("click", scrollTo(item.id));
    navBar.appendChild(sectionItem);
  }
}
buildNav();
// Add class 'active' to section when near top of viewport
window.addEventListener("scroll", function () {
  for (const section of sections) {
    const link = document.getElementById(section.id + "-link");
    if (
      section.getBoundingClientRect().y <= 10 &&
      section.getBoundingClientRect().y >
        section.getBoundingClientRect().height * 0.9 * -1
    ) {
      if (!section.classList.contains("your-active-class")) {
       // Set section and nav-bar-link as active
        section.classList.add("your-active-class");
        link.classList.add("active-link");
      }
    } else {
        // Remove class active when not in view
      section.classList.remove("your-active-class");
      link.classList.remove("active-link");
    }
  }
});
// Scroll to section on link click
function scrollTo(id) {
  return function () {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };
}



