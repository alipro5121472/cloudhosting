document.addEventListener("DOMContentLoaded", function() {
  const collapsibles = document.querySelectorAll(".collapsible");
  console.log(collapsibles);
  collapsibles.forEach((item) =>
    item.addEventListener("click", function () {
      console.log("Click is working...");
      this.classList.toggle("collapsible--expanded");
    })
  );
});

