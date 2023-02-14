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
    `<div><i class='icon-angle-left'></i><span>pr<br />ev</span></div>`,
    `<div><span>ne<br />xt</span><i class='icon-angle-right'></i></div>`,
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
    if (veilButton) {
      veilButton.classList.toggle("active");

      let veilItem;
      if (veilButton.dataset.veiltarget == "reserv") {
        veilItem = document.querySelector(`.${veilButton.dataset.veiltarget}`);
      } else {
        veilItem = veilButton.parentElement;
      }
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
    }
  })
);
// food menu
const menuArr = [
  {
    name: "starters",
    menu: [
      {
        name: "chips & dip",
        describtion:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptates perspiciatis pariatur, doloremque nisi cumque!",
        price: 7,
      },
      {
        name: "chicken quesadilla",
        describtion:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptates perspiciatis pariatur, doloremque nisi cumque!",
        price: 10.5,
      },
      {
        name: "loaded nachos",
        describtion:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptates perspiciatis pariatur, doloremque nisi cumque!",
        price: 13.75,
      },
      {
        name: "scotch egg",
        describtion:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptates perspiciatis pariatur, doloremque nisi cumque!",
        price: 7,
      },
      {
        name: "fried pickles",
        describtion:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptates perspiciatis pariatur, doloremque nisi cumque!",
        price: 7,
      },
    ],
  },
  {
    name: "meat",
    menu: [
      {
        name: "beef with green pepper",
        describtion:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptates perspiciatis pariatur, doloremque nisi cumque!",
        price: 30,
        addOns: [
          {
            name: "Bearnaise Sauce",
            price: 5,
          },
          {
            name: "Bordelaise Sauce",
            price: 5,
          },
          {
            name: "Gremolata",
            price: 5,
          },
        ],
      },
      {
        name: "beef with salay sauce",
        describtion:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptates perspiciatis pariatur, doloremque nisi cumque!",
        price: 30,
        addOns: [
          {
            name: "Bearnaise Sauce",
            price: 5,
          },
          {
            name: "Bordelaise Sauce",
            price: 5,
          },
          {
            name: "Gremolata",
            price: 5,
          },
        ],
      },
      {
        name: "sausage steak",
        describtion:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptates perspiciatis pariatur, doloremque nisi cumque!",
        price: 30,
        addOns: [
          {
            name: "Bearnaise Sauce",
            price: 5,
          },
          {
            name: "Bordelaise Sauce",
            price: 5,
          },
          {
            name: "Gremolata",
            price: 5,
          },
        ],
      },
      {
        name: "hangauian sausage",
        describtion:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptates perspiciatis pariatur, doloremque nisi cumque!",
        price: 30,
        addOns: [
          {
            name: "Bearnaise Sauce",
            price: 5,
          },
          {
            name: "Bordelaise Sauce",
            price: 5,
          },
          {
            name: "Gremolata",
            price: 5,
          },
        ],
      },
      {
        name: "polish sausage",
        describtion:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptates perspiciatis pariatur, doloremque nisi cumque!",
        price: 30,
        addOns: [
          {
            name: "Bearnaise Sauce",
            price: 5,
          },
          {
            name: "Bordelaise Sauce",
            price: 5,
          },
          {
            name: "Gremolata",
            price: 5,
          },
        ],
      },
    ],
  },
  {
    name: "salads",
    menu: [
      {
        name: "guacamole salad",
        describtion:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptates perspiciatis pariatur, doloremque nisi cumque!",
        price: 6.99,
      },
      {
        name: "checkin salad",
        describtion:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptates perspiciatis pariatur, doloremque nisi cumque!",
        price: 6.99,
      },
      {
        name: "greek salad",
        describtion:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptates perspiciatis pariatur, doloremque nisi cumque!",
        price: 6.99,
      },
    ],
  },
  {
    name: "burgers",
    menu: [
      {
        name: "angus beef burger",
        describtion:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptates perspiciatis pariatur, doloremque nisi cumque!",
        price: 9.95,
      },
      {
        name: "mushroom swiss burger",
        describtion:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptates perspiciatis pariatur, doloremque nisi cumque!",
        price: 11.95,
      },
      {
        name: "kickory burger",
        describtion:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptates perspiciatis pariatur, doloremque nisi cumque!",
        price: 9.5,
      },
      {
        name: "santa fe burger",
        describtion:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptates perspiciatis pariatur, doloremque nisi cumque!",
        price: 11,
      },
    ],
  },
  {
    name: "enterees",
    menu: [
      {
        name: "parmesan chicken",
        describtion:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptates perspiciatis pariatur, doloremque nisi cumque!",
        price: 9.95,
      },
      {
        name: "shrimp cilantro wrap",
        describtion:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptates perspiciatis pariatur, doloremque nisi cumque!",
        price: 8,
      },
      {
        name: "grilled salmon",
        describtion:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptates perspiciatis pariatur, doloremque nisi cumque!",
        price: 10.99,
      },
      {
        name: "microbrew battered halibut",
        describtion:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptates perspiciatis pariatur, doloremque nisi cumque!",
        price: 13,
      },
    ],
  },
  {
    name: "desserts",
    menu: [
      {
        name: "molten chocolate cake",
        describtion:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptates perspiciatis pariatur, doloremque nisi cumque!",
        price: 6.5,
      },
      {
        name: "cherry cobbler",
        describtion:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptates perspiciatis pariatur, doloremque nisi cumque!",
        price: 5.5,
      },
      {
        name: "black the mousse cake",
        describtion:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptates perspiciatis pariatur, doloremque nisi cumque!",
        price: 6.5,
      },
      {
        name: "carrot cake",
        describtion:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptates perspiciatis pariatur, doloremque nisi cumque!",
        price: 4,
      },
    ],
  },
];
const foodMenu = document.querySelector(".reserv .menu");
function showMenu() {
  const gridContainer = document.createElement("div");
  gridContainer.classList.add("grid-container");
  menuArr.forEach((menu) => {
    const menuColumn = document.createElement("div");
    menuColumn.classList.add("menu-column");
    const menuHeading = document.createElement("h3");
    menuHeading.innerHTML = `${menu.name}`;
    menuColumn.append(menuHeading);
    menu.menu.forEach((item) => {
      const itemContainer = document.createElement("div");
      itemContainer.classList.add("item-container");
      itemContainer.innerHTML = `<div class="item-box">
                  <div class="check-box"></div>
                  <p class="item-name">${item.name}</p>
                  <input type="number" class="quantity" value="1" />
                  ${
                    item.addOns
                      ? `<div><i class="icon-plus add-ons-icon"></i><span class="price">$${item.price}</span></div>`
                      : `<span class="price">$${item.price}</span>`
                  }

                </div>`;
      if (item.addOns) {
        const addOnsList = document.createElement("ul");
        addOnsList.classList.add("add-ons-list");
        item.addOns.forEach((addOn) => {
          const li = document.createElement("li");
          li.innerHTML = `<div class="item-box">
                  <div class="check-box"></div>
                  <p class="item-name">${addOn.name}</p>
                  <input type="number" class="quantity" value="1" />
                  <span class="price">$${addOn.price}</span>
                  </div>
                </div>`;
          addOnsList.append(li);
        });
        itemContainer.append(addOnsList);
      }
      menuColumn.append(itemContainer);
    });
    gridContainer.append(menuColumn);
  });
  foodMenu.append(gridContainer);
}
showMenu();

const totalPriceText = document.querySelector(
  ".order-form .total-price-box .total-price"
).innerHTML;
let totalPrice = Number(totalPriceText.match(/[^$]/g).join(""));
function calculatePrice(add, priceParent) {
  if (add) {
    const totalAddedPriceText = priceParent.querySelector(".price").innerHTML;
    const totalAddedPrice = Number(totalAddedPriceText.match(/[^$]/g).join(""));
    totalPrice += totalAddedPrice;
    const totalPrices = document.querySelectorAll(
      ".total-price-box .total-price"
    );
    totalPrices.forEach((price) => {
      price.innerHTML = `$${totalPrice.toFixed(2)}`;
    });
  }
}
foodMenu.addEventListener("click", (e) => {
  const clicked = e.target;
  if (clicked.classList.contains("add-ons-icon")) {
    clicked.parentElement.nextElementSibling.classList.toggle("active");
  } else if (clicked.classList.contains("check-box")) {
    clicked.classList.toggle("checked");
    calculatePrice(
      clicked.classList.contains("checked"),
      clicked.parentElement
    );
  }
});
