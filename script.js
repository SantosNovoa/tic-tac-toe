console.log("hello world");

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
  placeMarkerPlayerOne: function (row, col) {
    if (this.gameboard[row][col] === "-") {
      this.gameboard[row][col] = playerOne.marker;
      console.log("\n");
      Gameboard.displayGameboard();
    } else {
      console.log("Error, spot filled.");
    }
  },
  placeMarkerPlayerTwo: function (row, col) {
    if (this.gameboard[row][col] === "-") {
      this.gameboard[row][col] = playerTwo.marker;
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
        this.gameboard[0][i] === playerOne.marker &&
        this.gameboard[1][i] === playerOne.marker &&
        this.gameboard[2][i] === playerOne.marker
      ) {
        console.log(`${playerTwo.name} won by column.`);
      }
    }
    //checking diagonal
    if (
      this.gameboard[0][0] === playerOne.marker &&
      this.gameboard[1][1] === playerOne.marker &&
      this.gameboard[2][2] === playerOne.marker
    ) {
      console.log(`${playerOne.name} won by diagonal.`);
    } else if (
      this.gameboard[0][0] === playerTwo.marker &&
      this.gameboard[1][1] === playerTwo.marker &&
      this.gameboard[2][2] === playerTwo.marker
    ) {
      console.log(`${playerTwo.name} won by diagonal.`);
    }
  },
};

const playerOne = {
  name: "Player one",
  marker: "X",
};

const playerTwo = {
  name: "Player two",
  marker: "O",
};

Gameboard.placeMarkerPlayerTwo(1, 0);
Gameboard.placeMarkerPlayerTwo(1, 1);
Gameboard.placeMarkerPlayerTwo(2, 2);
Gameboard.placeMarkerPlayerTwo(1, 2);
Gameboard.determineWinner();
