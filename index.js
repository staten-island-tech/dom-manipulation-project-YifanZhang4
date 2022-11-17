console.log("connected :)");

const DOMSelectors = {
  button: document.getElementById("submit"),
  name: document.getElementById("name"),
  age: document.getElementById("age"),
  location: document.getElementById("location"),
  box: document.getElementById("box"),
  wd: document.getElementById("wd"),
  erase: document.getElementById("erase"),
};
console.log(DOMSelectors);

DOMSelectors.button.addEventListener("click", function (card) {
  card.preventDefault();
  let name = DOMSelectors.name.value;
  let age = DOMSelectors.age.value;
  let location = DOMSelectors.location.value;
  function makeCard() {
    DOMSelectors.box.insertAdjacentHTML(
      "beforeend",
      `<div class="contain" id="card">
    <img src="user icon.jpg" class="user">
    <h3>Name: ${name}</h3>
    <br />
    <h3>Age: ${age} years old</h3>
    <h3>At: ${location}</h3>
    <button id="erase" class="erase">Erase</button> </div>`
    );
    DOMSelectors.name.value = "";
    DOMSelectors.age.value = "";
    DOMSelectors.location.value = "";
  }
  makeCard();
});

DOMSelectors.wd.addEventListener("click", function () {
  const addCSS = (css) =>
    (document.head.appendChild(document.createElement("style")).innerHTML =
      css);
  addCSS("body{ font-family:wingdings }");
});

DOMSelectors.erase.addEventListener("click", function () {
  const card = document.getElementById("card");
  card.remove();
});
