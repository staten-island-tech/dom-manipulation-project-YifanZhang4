console.log("connected :)");

const DOMSelectors = {
  button: document.getElementById("submit"),
  name: document.getElementById("name"),
  age: document.getElementById("age"),
  location: document.getElementById("location"),
  box: document.getElementById("box"),
  ew: document.getElementById("ew"),
};
console.log(DOMSelectors);

function user(name, age, location) {
  this.name = name;
  this.age = age;
  this.location = location;
}

document.getElementById("form").addEventListener("submit", function (insert) {
  insert.preventDefault;
  document.getElementById("name").value;
  document.getElementById("age").value;
  document.getElementById("location").value;
  DOMSelectors.submit.addEventListener(
    "click",
    function createCard(name, age, location) {
      let newCardContain = document.createElement("div");
      let newCard = document.createTextNode("bleh");
      newCardContain.appendChild(newCard);
      let cardInsert = document.getElementById("box");
      document.body.insertBefore(newCardContain, cardInsert);
    }
  );
});

createCard();
