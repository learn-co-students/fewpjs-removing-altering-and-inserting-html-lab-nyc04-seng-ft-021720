// Write your code here!
const main = document.querySelector("#main");
main.remove();

const h1 = document.createElement("h1");
h1.id = "victory";
document.body.append(h1);

let newHeader = document.querySelector("h1#victory");
newHeader.textContent = "me is the champion"