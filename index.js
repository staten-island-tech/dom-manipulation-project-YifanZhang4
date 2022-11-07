console.log("connected :)");

const DOMSelectors = {
  button: document.getElementById("button"),
  buttonA: document.getElementById("buttona"),
  input: document.getElementById("input"),
  box: document.getElementById("box"),
  img: document.getElementById("img"),
};
console.log(DOMSelectors);

function what() {
  DOMSelectors.button.addEventListener("click", function () {
    const input = DOMSelectors.input.value;
    DOMSelectors.box.insertAdjacentHTML("beforeend", `<p>${input}</p>`);
    DOMSelectors.input.value = "";
    SVGAnimateMotionElement;
  });

  DOMSelectors.buttonA.addEventListener("click", function () {
    delete DOMSelectors.input.value;
  });
}

what();
