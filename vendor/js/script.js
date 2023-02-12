"use strict";
// initiate special of the week carousel
$(".special-carousel").owlCarousel({
  loop: true,
  margin: 5,
  nav: true,
  items: 1,
  center: true,
  dots: false,
  navText: [
    `<div><i class='bx bx-chevron-left'></i><span>pr<br />ev</span></div>`,
    `<div><span>ne<br />xt</span><i class='bx bx-chevron-right'></i></div>`,
  ],
});
// showing special of the week info
const veiled = document.querySelectorAll(".veiled");
veiled.forEach((veiledElement) =>
  veiledElement.addEventListener("click", (e) => {
    let veilButton;
    if (e.target.classList.contains("veil-btn")) {
      veilButton = e.target;
    } else if (e.target.parentElement.classList.contains("veil-btn")) {
      veilButton = e.target.parentElement;
    }
    veilButton.classList.toggle("active");
    const veilItem = veilButton.parentElement;
    if (!veilItem.classList.contains("veil-added")) {
      const veilContainer = document.createElement("div");
      veilContainer.classList.add("veil-container");
      veilContainer.innerHTML = `<div class="veil-first-left"></div>
              <div class="veil-first-right"></div>
              <div class="veil-second-left"></div>
              <div class="veil-second-right"></div>`;
      veilItem.appendChild(veilContainer);
    }
    veilItem.classList.add("veil-added");
    setTimeout(() => {
      veilItem.classList.toggle("veil-on");
    }, 0);
  })
);
