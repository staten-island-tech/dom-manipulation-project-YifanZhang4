console.log("connected :)");

const DOMSelectors = {
  button: document.getElementById("button"),
  input: document.getElementById("input"),
  box: document.getElementById("box"),
};
console.log(DOMSelectors);

// function objectCreate() {
//   const operator = {
//     aliveOrNot: "alive",
//     printIntroduction: function () {
//       DOMSelectors.box.insertAdjacentHTML(
//         "beforeend",
//         `<p>My name is ${this.name}. I am ${this.aliveOrNot} and seriously unhappy to be working with you, Doctor.</p>`
//       );
//     },
//   };
//   const recruitment = Object.create(operator);

//   recruitment.name = "W";
//   recruitment.aliveOrNot = "alive";
//   recruitment.printIntroduction();
// }

// objectCreate();
// DOMSelectors.button.addEventListener("click", function () {
//   let input = DOMSelectors.input.value;
//   DOMSelectors.box.insertAdjacentHTML("beforeend", `<p>${input}</p>`);
//   DOMSelectors.input.value = "";
// });
