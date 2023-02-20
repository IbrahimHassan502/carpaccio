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
      if (veilButton.dataset.veiltarget) {
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
const starters = {
  name: "starters",
  items: [
    {
      name: "chips & dip",
      describtion:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptates perspiciatis pariatur",
      price: 7,
    },
    {
      name: "chicken quesadilla",
      describtion:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptates perspiciatis pariatur",
      price: 10.5,
    },
    {
      name: "loaded nachos",
      describtion:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptates perspiciatis pariatur",
      price: 13.75,
    },
    {
      name: "scotch egg",
      describtion:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptates perspiciatis pariatur",
      price: 7,
    },
    {
      name: "fried pickles",
      describtion:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptates perspiciatis pariatur",
      price: 7,
    },
  ],
};
const meat = {
  name: "meat",
  items: [
    {
      name: "beef with green pepper",
      describtion:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptates perspiciatis pariatur",
      price: 30,
      addOns: [
        {
          name: "Bearnaise Sauce",
          describtion:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptates perspiciatis pariatur, doloremque nisi cumque!",
          price: 5,
        },
        {
          name: "Bordelaise Sauce",
          describtion:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptates perspiciatis pariatur, doloremque nisi cumque!",
          price: 5,
        },
        {
          name: "Gremolata",
          describtion:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptates perspiciatis pariatur, doloremque nisi cumque!",
          price: 5,
        },
      ],
    },
    {
      name: "beef with salay sauce",
      describtion:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptates perspiciatis pariatur",
      price: 30,
      addOns: [
        {
          name: "Bearnaise Sauce",
          describtion:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptates perspiciatis pariatur, doloremque nisi cumque!",
          price: 5,
        },
        {
          name: "Bordelaise Sauce",
          describtion:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptates perspiciatis pariatur, doloremque nisi cumque!",
          price: 5,
        },
        {
          name: "Gremolata",
          describtion:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptates perspiciatis pariatur, doloremque nisi cumque!",
          price: 5,
        },
      ],
    },
    {
      name: "sausage steak",
      describtion:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptates perspiciatis pariatur",
      price: 30,
      addOns: [
        {
          name: "Bearnaise Sauce",
          describtion:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptates perspiciatis pariatur, doloremque nisi cumque!",
          price: 5,
        },
        {
          name: "Bordelaise Sauce",
          describtion:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptates perspiciatis pariatur, doloremque nisi cumque!",
          price: 5,
        },
        {
          name: "Gremolata",
          describtion:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptates perspiciatis pariatur, doloremque nisi cumque!",
          price: 5,
        },
      ],
    },
    {
      name: "hangauian sausage",
      describtion:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptates perspiciatis pariatur",
      price: 30,
      addOns: [
        {
          name: "Bearnaise Sauce",
          describtion:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptates perspiciatis pariatur, doloremque nisi cumque!",
          price: 5,
        },
        {
          name: "Bordelaise Sauce",
          describtion:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptates perspiciatis pariatur, doloremque nisi cumque!",
          price: 5,
        },
        {
          name: "Gremolata",
          describtion:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptates perspiciatis pariatur, doloremque nisi cumque!",
          price: 5,
        },
      ],
    },
    {
      name: "polish sausage",
      describtion:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptates perspiciatis pariatur",
      price: 30,
      addOns: [
        {
          name: "Bearnaise Sauce",
          describtion:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptates perspiciatis pariatur, doloremque nisi cumque!",
          price: 5,
        },
        {
          name: "Bordelaise Sauce",
          describtion:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptates perspiciatis pariatur, doloremque nisi cumque!",
          price: 5,
        },
        {
          name: "Gremolata",
          describtion:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptates perspiciatis pariatur, doloremque nisi cumque!",
          price: 5,
        },
      ],
    },
  ],
};
const soup = {
  name: "soup",
  items: [
    {
      name: "tom yum kung",
      describtion:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptates perspiciatis pariatur",
      price: 6.99,
    },
    {
      name: "pumpkin soup",
      describtion:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptates perspiciatis pariatur",
      price: 6.99,
    },
    {
      name: "tomato soup",
      describtion:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptates perspiciatis pariatur",
      price: 6.99,
    },
    {
      name: "potato soup",
      describtion:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptates perspiciatis pariatur",
      price: 6.99,
    },
  ],
};
const salads = {
  name: "salads",
  items: [
    {
      name: "guacamole salad",
      describtion:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptates perspiciatis pariatur",
      price: 6.99,
    },
    {
      name: "checkin salad",
      describtion:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptates perspiciatis pariatur",
      price: 6.99,
    },
    {
      name: "greek salad",
      describtion:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptates perspiciatis pariatur",
      price: 6.99,
    },
  ],
};
const burgers = {
  name: "burgers",
  items: [
    {
      name: "angus beef burger",
      describtion:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptates perspiciatis pariatur",
      price: 9.95,
    },
    {
      name: "mushroom swiss burger",
      describtion:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptates perspiciatis pariatur",
      price: 11.95,
    },
    {
      name: "kickory burger",
      describtion:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptates perspiciatis pariatur",
      price: 9.5,
    },
    {
      name: "santa fe burger",
      describtion:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptates perspiciatis pariatur",
      price: 11,
    },
  ],
};
const dessert = {
  name: "dessert",
  items: [
    {
      name: "molten chocolate cake",
      describtion:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptates perspiciatis pariatur",
      price: 6.5,
    },
    {
      name: "cherry cobbler",
      describtion:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptates perspiciatis pariatur",
      price: 5.5,
    },
    {
      name: "black the mousse cake",
      describtion:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptates perspiciatis pariatur",
      price: 6.5,
    },
    {
      name: "carrot cake",
      describtion:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptates perspiciatis pariatur",
      price: 4,
    },
  ],
};
const mainMenu = [starters, meat, soup, salads, burgers, dessert];
const foodMenu = document.querySelectorAll(".menu");
function showMenu(menuArr, menuParent) {
  const gridContainer = document.createElement("div");
  gridContainer.classList.add("grid-container");
  menuArr.forEach((menu) => {
    const menuColumn = document.createElement("div");
    menuColumn.classList.add("menu-column");
    const menuHeading = document.createElement("h3");
    menuHeading.innerHTML = `${menu.name}`;
    menuColumn.append(menuHeading);
    menu.items.forEach((item) => {
      const itemContainer = document.createElement("div");
      itemContainer.classList.add("item-container");
      itemContainer.innerHTML = `<div class="item-box">
                  <div class="check-box"></div>
                  <p class="item-name">${item.name}</p>
                  <input type="number" class="quantity" value="1" />
                  ${
                    item.addOns
                      ? `<div>
                          <i class="icon-plus add-ons-icon"></i>
                          <span class="price">$${item.price}</span>
                        </div>`
                      : `<span class="price">$${item.price}</span>`
                  }
                  ${
                    item.describtion
                      ? `<p class="item-description">${item.describtion}</p>`
                      : ``
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
                  ${
                    addOn.describtion
                      ? `<p class="item-description">${addOn.describtion}</p>`
                      : ``
                  }
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
  menuParent.append(gridContainer);
}
const reservMenu = document.querySelector(".reserv .menu");
showMenu(mainMenu, reservMenu);

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
foodMenu.forEach((menu) => {
  menu.addEventListener("click", (e) => {
    const clicked = e.target;
    if (clicked.classList.contains("add-ons-icon")) {
      clicked
        .closest(".item-box")
        .nextElementSibling.classList.toggle("active");
    } else if (clicked.classList.contains("check-box")) {
      clicked.classList.toggle("checked");
      calculatePrice(
        clicked.classList.contains("checked"),
        clicked.parentElement
      );
    }
  });
});
// initiate offers of the week carousel
$(".offer-carousel").owlCarousel({
  loop: true,
  margin: 5,
  nav: true,
  items: 3,
  center: true,
  dots: false,
  navText: [
    `<div><i class='icon-angle-left'></i><span>pr<br />ev</span></div>`,
    `<div><span>ne<br />xt</span><i class='icon-angle-right'></i></div>`,
  ],
});
// menu categories
const menuCategories = document.querySelector(".menu-categories");
const menuCategoriesMenu = document.querySelector(".menu-categories .menu");
menuCategories.addEventListener("click", (e) => {
  if (e.target.classList.contains("veil-btn")) {
    const menuName = e.target.dataset.name;
    const singleMenu = mainMenu.find((menu) => menu.name === menuName);
    showMenu([singleMenu], menuCategoriesMenu);
  }
});
