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
  card.preventDefault()
  let name = DOMSelectors.name.value;
  let age = DOMSelectors.age.value;
  let location = DOMSelectors.location.value;
  function makeCard() {
    DOMSelectors.box.insertAdjacentHTML(
      "beforeend",
      `<div class="contain">
    <img src="user icon.jpg">
    <h2>Name: ${name}</h2>
    <br />
    <h2>Age: ${age} years old</h2>
    <br />
    <h2>At: ${location}</h2>
    <br />
    <button onclick="removeParent(this.parentNode)>Erase</button></div>`
    );
  }
  makeCard()
});

function removeParent(card) {
  card.remove();
}
