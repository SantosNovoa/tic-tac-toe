console.log("hello world");

const Gameboard = {
  gameboard: [
    ["-", "-", "-"],
    ["-", "-", "-"],
    ["-", "-", "-"]
  ],
  placeMarker: function(row, col) {
    if (this.gameboard[row][col] === "-") {
        this.gameboard[row][col] = playerOne.marker;
    }
  }
};

const playerOne = {
    name: "player one",
    marker: "X"
};

const playerTwo = {
    name: "player two",
    marker: "O"
};





