console.log("connected :)");

const DOMSelectors = {
  button: document.getElementById("button"),
  name: document.getElementById("name"),
  age: document.getElementById("age"),
  location: document.getElementById("location"),
  box: document.getElementById("box"),
};
console.log(DOMSelectors);

function user(name, age, location) {
  this.name = name;
  this.age = age;
  this.location = location;
}

document.getElementById("name").value;
document.getElementById("age").value;
document.getElementById("location").value;
DOMSelectors.button.addEventListener("click", function () {
  let name = DOMSelectors.name.value;
  DOMSelectors.box.insertAdjacentHTML("beforeend", `<p> Your name is ${name}.`);
  DOMSelectors.input.value = ``;
  let age = DOMSelectors.age.value;
  DOMSelectors.box.insertAdjacentHTML(
    "beforeend",
    `<p> You are ${age} year(s) old.`
  );
  DOMSelectors.input.value = ``;
});
DOMSelectors.button.addEventListener("click", function () {
  let age = DOMSelectors.age.value;
  DOMSelectors.box.insertAdjacentHTML(
    "beforeend",
    `<p> You are ${age} year(s) old.`
  );
  DOMSelectors.input.value = ``;
});
DOMSelectors.button.addEventListener("click", function () {
  let location = DOMSelectors.location.value;
  DOMSelectors.box.insertAdjacentHTML(
    "beforeend",
    `<p> You are at ${location}.`
  );
  DOMSelectors.input.value = ``;
});

function removeInput(h) {
  h.remove();
}
