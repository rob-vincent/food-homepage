const data = [
  {
    id: 1,
    image: "../images/Burger.png",
    name: { main: "jaw-breaker", category: "burger" },
    rating: 4.9,
    maker: "Rob Vincent",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus laudantium officiis incidunt deleniti cum, vero sed nihil iste id consequuntur!",
  },
  {
    id: 2,
    image: "../images/Pizza.png",
    name: { main: "pepperoni", category: "pizza" },
    rating: 3.7,
    maker: "Wency Kayle",
    details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto facere vitae nemo.",
  },
  {
    id: 3,
    image: "../images/Plain-Burger.png",
    name: { main: "cheese burger", category: "burger" },
    rating: 4.3,
    maker: "Ian Denmark",
    details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam tempore nemo et voluptates repellendus impedit.",
  },
  {
    id: 4,
    image: "../images/Veggies.png",
    name: { main: "salad", category: "veggies" },
    rating: 4.1,
    maker: "Cherry",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae officia tenetur beatae doloremque dolorum vero, velit similique maxime.",
  },
];

const featured = document.getElementsByClassName("food-featured")[0];
const info = document.getElementsByClassName("food-info")[0];
const ratings = document.getElementsByClassName("food-ratings")[0];
const slider = document.getElementsByClassName("food-slider")[0];
const right = document.getElementById("arrowRight");
const left = document.getElementById("arrowLeft");
let index = 0;

slider.addEventListener("click", (e) => {
  if (e.target === slider) return;
  index = +e.target.dataset.index;
  clearRender();
  render();
});

right.addEventListener("click", () => {
  newIndex = (index + 1) % data.length;
  index = newIndex;
  clearRender();
  render();
});

left.addEventListener("click", () => {
  newIndex = index === 0 ? data.length - 1 : (index - 1) % data.length;
  index = newIndex;
  clearRender();
  render();
});

const render = () => {
  data.forEach((food, foodIndex) => {
    const {
      image,
      name: { main, category },
      rating,
      maker,
      details,
    } = food;

    const position = foodIndex === index ? "active" : "";

    featured.innerHTML += `<img src=${image} alt=${main} class='${position}' />`;

    info.innerHTML += `<div class= '${position}'><h1>${main}</h1><h3>${category}</h3><p>${details}</p><div class="underline"></div></div>`;

    slider.innerHTML += `<img src=${image} alt=${main} class='${position}' data-index='${foodIndex}'/>`;

    ratings.innerHTML += `<div class='${position}'>
    <section>
      <h1>${rating}</h1><h4>By chef: ${maker}</h4>
    </section>
    <section>
      <p>${details}</p>
    </section>
    </div> `;
  });
};

const clearRender = () => {
  featured.innerHTML = "";
  info.innerHTML = "";
  slider.innerHTML = "";
  ratings.innerHTML = "";
};

render();
