
const gameBoard = document.getElementById("board")

window.addEventListener("DOMContentLoaded", function () {
    setupCanvasSize()
    console.log("hi")


});

function setupCanvasSize() {
    for (let i = 0; i < (15 * 15); i++) {
      gameBoard.innerHTML += "<div class='board_space'</div>";
    }
}

function allowDrop(ev) {
  //  console.log("allowdrop", ev)
    ev.preventDefault();
  }
  
  function drag(ev) {
    console.log("drat", ev.target.class)
    ev.dataTransfer.setData("text", ev.target.class);
  }
  
  function drop(ev) {
    console.log("drop", ev)
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    console.log(data)
    ev.target.appendChild(document.getElementById(data));
  }



  //https://www.javascripttutorial.net/web-apis/javascript-drag-and-drop/