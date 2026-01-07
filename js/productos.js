function toggleMenu() {
  document.getElementById("menu").classList.toggle("active");
}


//filtro de busqueda

document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("show");
});

document.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", e => {
    const href = link.getAttribute("href");

    if (href && !href.startsWith("#")) {
      e.preventDefault();
      document.body.classList.remove("show");

      setTimeout(() => {
        window.location.href = href;
      }, 500);
    }
  });
});

