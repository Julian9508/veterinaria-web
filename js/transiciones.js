document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("show");
});

document.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", e => {
    const href = link.getAttribute("href");

    // Evita afectar anclas y links externos
    if (href && !href.startsWith("#") && !href.startsWith("http")) {
      e.preventDefault();
      document.body.classList.remove("show");

      setTimeout(() => {
        window.location.href = href;
      }, 500);
    }
  });
});
