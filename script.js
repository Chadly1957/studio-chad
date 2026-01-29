// Year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Simple mobile nav toggle (optional)
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

if (hamburger && nav) {
  hamburger.addEventListener("click", () => {
    const isOpen = hamburger.getAttribute("aria-expanded") === "true";
    hamburger.setAttribute("aria-expanded", String(!isOpen));

    // quick-and-dirty dropdown
    nav.style.display = isOpen ? "none" : "flex";
    if (!isOpen) {
      nav.style.position = "absolute";
      nav.style.top = "62px";
      nav.style.right = "20px";
      nav.style.background = "#fff";
      nav.style.border = "1px solid #e8e9ee";
      nav.style.borderRadius = "14px";
      nav.style.padding = "12px";
      nav.style.flexDirection = "column";
      nav.style.gap = "12px";
      nav.style.boxShadow = "0 10px 30px rgba(0,0,0,.10)";
      nav.style.width = "220px";
    }
  });
}
