

const Gameboard = {
  gameboard: [
    ["-", "-", "-"],
    ["-", "-", "-"],
    ["-", "-", "-"],
  ],
  displayGameboard: function () {
    for (let i = 0; i < this.gameboard.length; i++) {
      console.log(this.gameboard[i].join("|"));
    }
  },
  placeMarker: function (row, col, player) {
    if (this.gameboard[row][col] === "-") {
      this.gameboard[row][col] = player.marker;
      console.log("\n");
      Gameboard.displayGameboard();
    } else {
      console.log("Error, spot filled.");
    }
  },
  determineWinner: function () {
    for (let i = 0; i < 3; i++) {
      //checking row
      if (
        this.gameboard[i][0] === playerOne.marker &&
        this.gameboard[i][1] === playerOne.marker &&
        this.gameboard[i][2] === playerOne.marker
      ) {
        console.log(`${playerOne.name} won by row.`);
      } else if (
        this.gameboard[i][0] === playerTwo.marker &&
        this.gameboard[i][1] === playerTwo.marker &&
        this.gameboard[i][2] === playerTwo.marker
      ) {
        console.log(`${playerTwo.name} won by row.`);
      }
      //checking column
      if (
        this.gameboard[0][i] === playerOne.marker &&
        this.gameboard[1][i] === playerOne.marker &&
        this.gameboard[2][i] === playerOne.marker
      ) {
        console.log(`${playerOne.name} won by column.`);
      } else if (
        this.gameboard[0][i] === playerTwo.marker &&
        this.gameboard[1][i] === playerTwo.marker &&
        this.gameboard[2][i] === playerTwo.marker
      ) {
        console.log(`${playerTwo.name} won by column.`);
      }
    }
    //checking diagonal
    if (
      (this.gameboard[0][0] === playerOne.marker &&
        this.gameboard[1][1] === playerOne.marker &&
        this.gameboard[2][2] === playerOne.marker) ||
      (this.gameboard[0][2] === playerOne.marker &&
        this.gameboard[1][1] === playerOne.marker &&
        this.gameboard[2][0] === playerOne.marker)
    ) {
      console.log(`${playerOne.name} won by diagonal.`);
    } else if (
      (this.gameboard[0][0] === playerTwo.marker &&
        this.gameboard[1][1] === playerTwo.marker &&
        this.gameboard[2][2] === playerTwo.marker) ||
      (this.gameboard[0][2] === playerTwo.marker &&
        this.gameboard[1][1] === playerTwo.marker &&
        this.gameboard[2][0] === playerTwo.marker)
    ) {
      console.log(`${playerTwo.name} won by diagonal.`);
    }
  },
  turn: 1,
  determineTurn: function(row, col) {
    if (Gameboard.turn === 1) {
      this.placeMarker(row, col, playerOne);
      Gameboard.turn = 2
    }  else if (Gameboard.turn === 2) {
      this.placeMarker(row, col, playerTwo);
      Gameboard.turn = 1;
    }
  }
};

const playerOne = {
  name: "Player 1",
  marker: "X",
  winner: true
};

const playerTwo = {
  name: "Player 2",
  marker: "O",
  winner: true
};

// Gameboard.placeMarkerPlayerTwo(1, 0);
// Gameboard.placeMarkerPlayerTwo(1, 1);
// Gameboard.placeMarkerPlayerTwo(2, 2);
// Gameboard.placeMarkerPlayerTwo(1, 2);

