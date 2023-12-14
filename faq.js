const doc = document.querySelectorAll(".question-title");

doc.forEach(function (item) {
  const _btn = item.querySelector(".btn");
  const details = item.querySelector(".details");
  if (_btn && details) {
    _btn.addEventListener("click", function () {
      details.classList.toggle("show-text");
    });
  }
});