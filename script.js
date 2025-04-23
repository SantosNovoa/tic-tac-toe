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
    let winnerFound = false;


    for (let i = 0; i < 3; i++) {
      //checking row
      if (
        this.gameboard[i][0] === playerOne.marker &&
        this.gameboard[i][1] === playerOne.marker &&
        this.gameboard[i][2] === playerOne.marker
      ) {
        console.log(`${playerOne.name} won by row.`);
        winnerFound = true;
        this.resetBoard()
      } else if (
        this.gameboard[i][0] === playerTwo.marker &&
        this.gameboard[i][1] === playerTwo.marker &&
        this.gameboard[i][2] === playerTwo.marker
      ) {
        console.log(`${playerTwo.name} won by row.`);
        winnerFound = true;
        this.resetBoard()
      }
      //checking column
      if (
        this.gameboard[0][i] === playerOne.marker &&
        this.gameboard[1][i] === playerOne.marker &&
        this.gameboard[2][i] === playerOne.marker
      ) {
        console.log(`${playerOne.name} won by column.`);
        winnerFound = true;
        this.resetBoard()
      } else if (
        this.gameboard[0][i] === playerTwo.marker &&
        this.gameboard[1][i] === playerTwo.marker &&
        this.gameboard[2][i] === playerTwo.marker
      ) {
        console.log(`${playerTwo.name} won by column.`);
        winnerFound = true;
        this.resetBoard()
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
      winnerFound = true;
      this.resetBoard()
    } else if (
      (this.gameboard[0][0] === playerTwo.marker &&
        this.gameboard[1][1] === playerTwo.marker &&
        this.gameboard[2][2] === playerTwo.marker) ||
      (this.gameboard[0][2] === playerTwo.marker &&
        this.gameboard[1][1] === playerTwo.marker &&
        this.gameboard[2][0] === playerTwo.marker)
    ) {
      console.log(`${playerTwo.name} won by diagonal.`);
      winnerFound = true;
      this.resetBoard()
    }
    if (!winnerFound && this.isDraw()) {
      this.resetBoard()
      console.log("It's a draw")
    }
  },
  turn: 1,
  determineTurn: function (row, col) {
    if (Gameboard.turn === 1) {
      this.placeMarker(row, col, playerOne);
      this.determineWinner();
      Gameboard.turn = 2;
    } else if (Gameboard.turn === 2) {
      this.placeMarker(row, col, playerTwo);
      this.determineWinner();
      Gameboard.turn = 1;
    }
  },
  resetBoard: function () {
    this.gameboard = [
      ["-", "-", "-"],
      ["-", "-", "-"],
      ["-", "-", "-"],
    ];
    this.turn = 1;
    console.log("\nBoard reset.");
    this.displayGameboard();
  },
  isDraw: function() {
    for (let row of this.gameboard) {
      if (row.includes("-")) {
        return false;
      }
    } 
    return true;
  }
};

const playerOne = {
  name: "Player 1",
  marker: "X",
  winner: true,
};

const playerTwo = {
  name: "Player 2",
  marker: "O",
  winner: true,
};

// Gameboard.placeMarkerPlayerTwo(1, 0);
// Gameboard.placeMarkerPlayerTwo(1, 1);
// Gameboard.placeMarkerPlayerTwo(2, 2);
// Gameboard.placeMarkerPlayerTwo(1, 2);

