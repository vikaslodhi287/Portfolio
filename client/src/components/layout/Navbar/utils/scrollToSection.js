export function scrollToSection(targetId) {
  const element = document.querySelector(targetId);

  if (!element) return;

  const navbarHeight = 100;

  const y =
    element.getBoundingClientRect().top +
    window.pageYOffset -
    navbarHeight;

  window.scrollTo({
    top: y,
    behavior: "smooth",
  });
}