function changeGrid(event) {
    var thisgridlayout = event.target; // le bouton que vous cliquez
    var buttons = document.querySelectorAll(".buttonStyle"); // tous les boutons
    var element = document.getElementById("gridContainer"); // le grid container
    element.className = ""; //enlève toutes les classes du grid container
    element.classList.add("gridlayout"); // ajoute la classe de base au container
    element.classList.add(thisgridlayout.innerHTML); // ajoute la classe du style spécifique en se base sur le nom écrit du bouton
    buttons.forEach((button) => {
        button.classList.remove("activebutton");
    }); // enlève la classe active à tous les boutons même si ils ne l'ont pas
    thisgridlayout.classList.add("activebutton"); // ajoute au bouton sur lequel on clique la classe active
  }