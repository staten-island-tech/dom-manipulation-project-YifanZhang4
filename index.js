console.log("connected :)");

const DOMSelectors = {
  button: document.getElementById("submit"),
  name: document.getElementById("name"),
  age: document.getElementById("age"),
  location: document.getElementById("location"),
  box: document.getElementById("box"),
  wd: document.getElementById("wd"),
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
      `<div class="contain">
    <img src="user icon.jpg" class="user">
    <h3>Name: ${name}</h3>
    <h3>Age: ${age} years old</h3>
    <h3 id="city">At: ${location}</h3>
    <button class="erase">Erase</button> </div>`
    );
    DOMSelectors.name.value = "";
    DOMSelectors.age.value = "";
    DOMSelectors.location.value = "";
  }
  function erase() {
    let remove = document.querySelectorAll(".erase");
    remove.forEach((eachRemove) => {
      eachRemove.addEventListener("click", (event => {
        event.target.parentElement.remove();
      }));
    });
  }
  makeCard();
  erase();
});

DOMSelectors.wd.addEventListener("click", function () {
  const addCSS = (css) =>
    (document.head.appendChild(document.createElement("style")).innerHTML =
      css);
  addCSS("body{ font-family:wingdings }");
});
