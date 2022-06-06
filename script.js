const gra = function(min, max) {
  return Math.random() * (max - min) + min;
};
const init = function() {
  let items = document.querySelectorAll("li");
  for (let i = 0; i < items.length; i++) {
    items[i].style.minHeight = "100vh";
  }
};
document.onreadystatechange = function () {
  if (document.readyState === "interactive") {
    init();
  }
}
