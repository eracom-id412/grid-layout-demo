function changeGrid(event) {
    var thisgridlayout = event.target;
    var element = document.getElementById("gridContainer");
    var buttons = document.querySelectorAll(".buttonStyle");
    element.className = "";
    element.classList.add("gridlayout");
    element.classList.add(thisgridlayout.innerHTML);
    buttons.forEach((button) => {
        button.classList.remove("activebutton");
    });
    thisgridlayout.classList.add("activebutton");
  }