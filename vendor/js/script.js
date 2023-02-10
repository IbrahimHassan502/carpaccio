"use strict";
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
