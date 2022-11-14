console.log("connected :)");

const DOMSelectors = {
  button: document.getElementById("submit"),
  name: document.getElementById("name"),
  age: document.getElementById("age"),
  location: document.getElementById("location"),
  box: document.getElementById("box"),
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
    <br />
    <h3>Name: ${name}</h3>
    <br />
    <h3>Age: ${age} years old</h3>
    <br />
    <h3>At: ${location}</h3>
    <br />
    <button onclick="removeParent(this.parentNode)" class="erase">Erase</button> </div>`
    );
    DOMSelectors.name.value = "";
    DOMSelectors.age.value = "";
    DOMSelectors.location.value = "";
  }
  makeCard();
});

function removeParent(card) {
  card.remove();
}
