"use strict";

document.addEventListener("DOMContentLoaded", () => {
  // Reveal content softly after the first paint.
  requestAnimationFrame(() => {
    document.querySelectorAll(".reveal").forEach((element, index) => {
      setTimeout(() => element.classList.add("visible"), index * 90);
    });
  });

  const namespace = "blackwhitediesel";
  const key = "home";

  fetch(`https://api.countapi.xyz/hit/${namespace}/${key}`)
    .then(res => res.json())
    .then(data => {
      const visitorCount = document.getElementById("visitor-count");
      if (visitorCount) {
        visitorCount.textContent = `${data.value.toLocaleString()} Visitors`;
      }
    })
    .catch(() => {
      const visitorCount = document.getElementById("visitor-count");
      if (visitorCount) {
        visitorCount.textContent = "Visitor Counter";
      }
    });

  // Premium accordion interaction for FAQ.
  document.querySelectorAll(".faq-question").forEach(button => {
    button.addEventListener("click", () => {
      const item = button.closest(".faq-item");
      const isOpen = item.classList.contains("open");

      document.querySelectorAll(".faq-item.open").forEach(openItem => {
        openItem.classList.remove("open");
        openItem.querySelector(".faq-question")?.setAttribute("aria-expanded", "false");
      });

      if (!isOpen) {
        item.classList.add("open");
        button.setAttribute("aria-expanded", "true");
      }
    });
  });
});
