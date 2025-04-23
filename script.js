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
      const index = row * 3 + col;
      const squares = document.querySelectorAll(".col");
      squares[index].textContent = player.marker;
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
        const winner = document.querySelector(".status");
        winner.textContent = `${playerOne.name} won.`;
        console.log(`${playerOne.name} won by row.`);
        winnerFound = true;
        this.gameOver = true;
        setTimeout(() => this.resetBoard(), 1000);
      } else if (
        this.gameboard[i][0] === playerTwo.marker &&
        this.gameboard[i][1] === playerTwo.marker &&
        this.gameboard[i][2] === playerTwo.marker
      ) {
        const winner = document.querySelector(".status");
        winner.textContent = `${playerTwo.name} won.`;
        console.log(`${playerTwo.name} won by row.`);
        winnerFound = true;
        this.gameOver = true;
        setTimeout(() => this.resetBoard(), 1000);
      }
      //checking column
      if (
        this.gameboard[0][i] === playerOne.marker &&
        this.gameboard[1][i] === playerOne.marker &&
        this.gameboard[2][i] === playerOne.marker
      ) {
        const winner = document.querySelector(".status");
        winner.textContent = `${playerOne.name} won.`;
        console.log(`${playerOne.name} won by column.`);
        winnerFound = true;
        this.gameOver = true;
        setTimeout(() => this.resetBoard(), 1000);
      } else if (
        this.gameboard[0][i] === playerTwo.marker &&
        this.gameboard[1][i] === playerTwo.marker &&
        this.gameboard[2][i] === playerTwo.marker
      ) {
        const winner = document.querySelector(".status");
        winner.textContent = `${playerTwo.name} won.`;
        console.log(`${playerTwo.name} won by column.`);
        winnerFound = true;
        this.gameOver = true;
        setTimeout(() => this.resetBoard(), 1000);
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
      const winner = document.querySelector(".status");
      winner.textContent = `${playerOne.name} won.`;
      console.log(`${playerOne.name} won by diagonal.`);
      winnerFound = true;
      this.gameOver = true;
      setTimeout(() => this.resetBoard(), 1000);
    } else if (
      (this.gameboard[0][0] === playerTwo.marker &&
        this.gameboard[1][1] === playerTwo.marker &&
        this.gameboard[2][2] === playerTwo.marker) ||
      (this.gameboard[0][2] === playerTwo.marker &&
        this.gameboard[1][1] === playerTwo.marker &&
        this.gameboard[2][0] === playerTwo.marker)
    ) {
      const winner = document.querySelector(".status");
      winner.textContent = `${playerTwo.name} won by diagonal.`;
      console.log(`${playerTwo.name} won by diagonal.`);
      winnerFound = true;
      this.gameOver = true;
      setTimeout(() => this.resetBoard(), 1000);
    }
    if (!winnerFound && this.isDraw()) {
      const status = document.querySelector(".status");
      status.textContent = "It's a draw!";
      console.log("It's a draw!");
      this.gameOver = true;
      setTimeout(() => this.resetBoard(), 1000);
    }
  },
  turn: 1,
  determineTurn: function (row, col) {
    if (this.gameOver) return;

    if (this.turn === 1) {
      console.log("Player 1 turn");
      this.placeMarker(row, col, playerOne);
      this.determineWinner();
      this.turn = 2;
    } else {
      console.log("Player 2 turn");
      this.placeMarker(row, col, playerTwo);
      this.determineWinner();
      this.turn = 1;
    }
  },
  resetBoard: function () {
    this.gameboard = [
      ["-", "-", "-"],
      ["-", "-", "-"],
      ["-", "-", "-"],
    ];
    this.gameOver = false;
    this.turn = 1;
    console.log("\nBoard reset.");
    this.displayGameboard();
    const squares = document.querySelectorAll(".col");
    squares.forEach((square) => (square.textContent = ""));
  },
  isDraw: function () {
    for (let row of this.gameboard) {
      if (row.includes("-")) {
        return false;
      }
    }
    return true;
  },
  gameOver: false,
};

const playerOne = {
  name: "Player 1",
  marker: "X",
};

const playerTwo = {
  name: "Player 2",
  marker: "O",
};

// Gameboard.placeMarkerPlayerTwo(1, 0);
// Gameboard.placeMarkerPlayerTwo(1, 1);
// Gameboard.placeMarkerPlayerTwo(2, 2);
// Gameboard.placeMarkerPlayerTwo(1, 2);
