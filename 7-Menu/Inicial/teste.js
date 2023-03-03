// items
const menu = [
  {
    id: 1,
    title: "Pancakes",
    category: "breakfast",
    price: 10.99,
    img: "/img/breakfast-panqueca.png",
    desc: "Breakfast, ipsum dolor sit amet consectetur adipisicing elit. Neque quos a et voluptatum.",
  },
  {
    id: 2,
    title: "Macarrão",
    category: "lunch",
    price: 19.99,
    img: "/img/lunch-macarrao.png",
    desc: "lunch, ipsum dolor sit amet consectetur adipisicing elit. Neque quos a et voluptatum macarrao zika.",
  },
  {
    id: 3,
    title: "Hamburger",
    category: "dinner",
    price: 29.99,
    img: "/img/dinner-hambur.png",
    desc: "dinner, ipsum dolor sit amet consectetur adipisicing elit. Neque quos a et voluptatum hamburger monstro.",
  },
  {
    id: 4,
    title: "Pão de Queijo",
    category: "breakfast",
    price: 4.99,
    img: "/img/breakfast-queijo.png",
    desc: "Breakfast, ipsum dolor sit amet consectetur adipisicing elit. Neque quos a et voluptatum pão de queijo delicioso.",
  },
  {
    id: 5,
    title: "costela",
    category: "lunch",
    price: 49.99,
    img: "/img/lunch-costela.png",
    desc: "lunch, ipsum dolor sit amet consectetur adipisicing elit. Neque quos a et voluptatum costela.",
  },
  {
    id: 6,
    title: "lasanha",
    category: "dinner",
    price: 1549.99,
    img: "/img/dinner-lasanha.png",
    desc: "dinner, ipsum dolor sit amet consectetur adipisicing elit. Neque quos a et voluptatum MELHOR PRATO QUE TEMOS.",
  },
  {
    id: 7,
    title: "strogonof",
    category: "lunch",
    price: 499.9,
    img: "/img/lunch-strogo.png",
    desc: "Breakfast, ipsum dolor sit amet consectetur adipisicing elit. Neque quos a et voluptatum MELHOR ALMOÇO.",
  },
  {
    id: 8,
    title: "misto quente",
    category: "breakfast",
    price: 199.99,
    img: "/img/breakfast-misto.png",
    desc: "lunch, ipsum dolor sit amet consectetur adipisicing elit. Neque quos a et voluptatum MELHOR CAFE DA MANHA.",
  },
  {
    id: 9,
    title: "pizza",
    category: "dinner",
    price: 149.9,
    img: "/img/dinner-pizza.png",
    desc: "dinner, ipsum dolor sit amet consectetur adipisicing elit. Neque quos a et voluptatum PIZZA.",
  },
  {
    id: 10,
    title: "bolo",
    category: "breakfast",
    price: 50.0,
    img: "/img/breakfast-bolo.png",
    desc: "dinner, ipsum dolor sit amet consectetur adipisicing elit. Neque quos a et voluptatum PIZZA.",
  },
  {
    id: 11,
    title: "agua",
    category: "drink",
    price: 50.00,
    img: "/img/drink-agua.png",
    desc: "dinner, ipsum dolor sit amet consectetur adipisicing elit. Neque quos a et voluptatum PIZZA."
},
{
    id: 12,
    title: "vinho",
    category: "drink",
    price: 50.00,
    img: "/img/drink-vinho.png",
    desc: "dinner, ipsum dolor sit amet consectetur adipisicing elit. Neque quos a et voluptatum PIZZA."
},
{
    id: 13,
    title: "milk shake",
    category: "drink",
    price: 50.00,
    img: "/img/drink-milk.png",
    desc: "dinner, ipsum dolor sit amet consectetur adipisicing elit. Neque quos a et voluptatum PIZZA."
}
];

const sectionCenter = document.querySelector(".section-center");
const container = document.querySelector(".filter-container");

window.addEventListener("DOMContentLoaded", () => {
  displayMenuItems(menu);
  addButtons();
  filter();
});

// função para adicionar botão para filtro da comida
function addButtons(categories) {
  categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );

  const categoryBtns = categories
    .map(function (category) {
      return `
        <button type="button" class="filter-btn" data-id=${category}>${category}</button>
        `;
    })
    .join("");

  container.innerHTML = categoryBtns;
}

function filter(filterButton) {
  filterButton = document.querySelectorAll(".filter-btn");
  filterButton.forEach(function (btn) {
    btn.addEventListener("click", (e) => {
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "all") {
        displayMenuItems(menu);
      } else {
        displayMenuItems(menuCategory);
      }
    });
  });
}

function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    return `
        <article class="menu-item">
            <img src=${item.img} class="photo" alt=${item.title}>
            <div class="item-info">
                <header>
                    <h3>${item.title}</h3>
                    <h3 class="price">${item.price}</h3>
                </header>
                <p class="item-text">${item.desc}</p>
            </div>
        </article>`;
  });
  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;
}
