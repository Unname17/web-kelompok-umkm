function ViewMore() {
  var hiddenElement = document.querySelectorAll(
    ".menu-list :nth-child(1n + 4)"
  );
  hiddenElement.forEach(function (element) {
    element.style.display = "contents";
    element.style.opacity = 1;
  });
}
