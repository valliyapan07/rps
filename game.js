function clean(node) {
  for (var n = 0; n < node.childNodes.length; n++) {
    var child = node.childNodes[n];
    if (child.nodeType === 8 || (child.nodeType === 3 && !/\S/.test(child.nodeValue))) {
      node.removeChild(child);
      n--;
    } else if (child.nodeType === 1) {
      clean(child);
    }
  }
}
clean(document);
document.querySelector(".rules").addEventListener("click", rulebox);
document.querySelector(".head-close").addEventListener("click", rulebox);
var x = document.querySelectorAll(".elem");
for (i = 0; i < x.length; i++) {
  x[i].addEventListener("click", state2);
}
function rulebox() {
  document.querySelector(".overlay").classList.toggle("visible");
}
function state2(eve) {
  var cls = eve.target.classList[0];
  var rep = document.querySelector("." + cls);
  document.querySelector(".bot-1").classList.toggle("hide");
  document.querySelector(".game-container").classList.toggle("game-container2");
  var z = document.querySelector(".top-2");
  z.removeChild(z.childNodes[0]);
  z.removeChild(z.childNodes[0]);
  z.appendChild(rep);
}
