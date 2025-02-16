// NodeList object
const el = document.querySelectorAll(".red-square");

// Convert NodeList to array
const elArray = Array.from(el);

console.log(el);
console.log(elArray);

// Loop over the elements and change the background-color of each.
for (let index = 0; index < elArray.length; index++) {
  const element = el[index];
  element.style.backgroundColor = "limegreen";
}

// textContent vs innerText vs innerHTML
// innerText returns the text content of the element while ignoring any hidden content

// textContent returns ALL the content of the element including hidden ones.

const p = document.querySelector("#myP")
const demo = document.querySelector("#demo")

console.log(p.textContent)
console.log(p.innerText)
console.log(p.innerHTML)
p.innerHTML = "<strong>HELLO     WORLD</strong>"
demo.textContent = p.textContent

// CLASSLIST
const firstDiv = document.querySelector("div")
firstDiv.classList.add("border-style", "djdj", "dsjsjjsjdj")
firstDiv.classList.remove("red-square")