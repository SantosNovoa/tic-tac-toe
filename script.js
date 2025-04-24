
// reset btn event listener 

document.querySelector(".reset-button").addEventListener("click", () => {
  const squares = document.querySelectorAll(".col");
  const status = document.querySelector(".status");
  squares.forEach((square) => {
    square.textContent = "";

    //when the reset btn is clicked, allow the squares on the grid to be clickable.
    square.removeAttribute("style");
  });
  status.textContent = "";
  Gameboard.resetBoard();
});



const playerOne = {
  name: "Player 1",
  marker: "X",
};

const playerTwo = {
  name: "Player 2",
  marker: "O",
};


const Gameboard = {
  gameboard: [
    ["-", "-", "-"],
    ["-", "-", "-"],
    ["-", "-", "-"],
  ],
  displayGameboard: function () {
    //console gameboard display
    for (let i = 0; i < this.gameboard.length; i++) {
      console.log(this.gameboard[i].join("|"));
    }
  },
  placeMarker: function (row, col, player) {
    if (this.gameboard[row][col] === "-") {
      this.gameboard[row][col] = player.marker;
      //turning the 2d array index into a single array index
      const index = row * 3 + col;
      const squares = document.querySelectorAll(".col");
      //indexing by 1d array
      squares[index].textContent = player.marker;
      console.log("\n");
      this.displayGameboard();
      return true;
    } else {
      console.log("Error, spot filled.");
      const status = document.querySelector(".status");
      status.textContent = "That spot is already taken!";
      return false;
    }
  },
  determineWinner: function () {
    let winnerFound = false;

    //dom elements
    const winner = document.querySelector(".status");
    const squares = document.querySelectorAll(".col");


    for (let i = 0; i < 3; i++) {
      //checking row
      if (
        this.gameboard[i][0] === this.players.one.marker &&
        this.gameboard[i][1] === this.players.one.marker &&
        this.gameboard[i][2] === this.players.one.marker
      ) {
        winner.textContent = `${this.players.one.name} won.`;
        console.log(`${this.players.one.name} won by row.`);
        winnerFound = true;
        this.gameOver = true;
        //if a winner is found disable the user from clicking on the squares
        squares.forEach((square) => (square.style.pointerEvents = 'none'));
        this.resetBoard();
      } else if (
        this.gameboard[i][0] === this.players.two.marker &&
        this.gameboard[i][1] === this.players.two.marker &&
        this.gameboard[i][2] === this.players.two.marker
      ) {
        winner.textContent = `${this.players.two.name} won.`;
        console.log(`${this.players.two.name} won by row.`);
        winnerFound = true;
        this.gameOver = true;
        //if a winner is found disable the user from clicking on the squares
        squares.forEach((square) => (square.style.pointerEvents = 'none'));
        this.resetBoard();
      }
      //checking column
      if (
        this.gameboard[0][i] === this.players.one.marker &&
        this.gameboard[1][i] === this.players.one.marker &&
        this.gameboard[2][i] === this.players.one.marker
      ) {
        winner.textContent = `${this.players.one.name} won.`;
        console.log(`${this.players.one.name} won by column.`);
        winnerFound = true;
        this.gameOver = true;
        //if a winner is found disable the user from clicking on the squares
        squares.forEach((square) => (square.style.pointerEvents = 'none'));
        this.resetBoard();
      } else if (
        this.gameboard[0][i] === this.players.two.marker &&
        this.gameboard[1][i] === this.players.two.marker&&
        this.gameboard[2][i] === this.players.two.marker
      ) {
        winner.textContent = `${this.players.two.name} won.`;
        console.log(`${this.players.two.name} won by column.`);
        winnerFound = true;
        this.gameOver = true;
        //if a winner is found disable the user from clicking on the squares
        squares.forEach((square) => (square.style.pointerEvents = 'none'));
        this.resetBoard();
      }
    }
    //checking diagonal
    if (
      (this.gameboard[0][0] === this.players.one.marker &&
        this.gameboard[1][1] === this.players.one.marker &&
        this.gameboard[2][2] === this.players.one.marker) ||
      (this.gameboard[0][2] === this.players.one.marker &&
        this.gameboard[1][1] === this.players.one.marker &&
        this.gameboard[2][0] === this.players.one.marker)
    ) {
      winner.textContent = `${this.players.one.name} won.`;
      console.log(`${this.players.one.name} won by diagonal.`);
      winnerFound = true;
      this.gameOver = true;
      //if a winner is found disable the user from clicking on the squares
      squares.forEach((square) => (square.style.pointerEvents = 'none'));
      this.resetBoard();
    } else if (
      (this.gameboard[0][0] === this.players.two.marker &&
        this.gameboard[1][1] === this.players.two.marker &&
        this.gameboard[2][2] === this.players.two.marker) ||
      (this.gameboard[0][2] === this.players.two.marker &&
        this.gameboard[1][1] === this.players.two.marker &&
        this.gameboard[2][0] === this.players.two.marker)
    ) {
      winner.textContent = `${this.players.two.name} won by diagonal.`;
      console.log(`${this.players.two.name} won by diagonal.`);
      winnerFound = true;
      this.gameOver = true;
      //if a winner is found disable the user from clicking on the squares
      squares.forEach((square) => (square.style.pointerEvents = 'none'));
      this.resetBoard();
    }
    if (!winnerFound && this.isDraw()) {
      winner.textContent = "It's a draw!";
      console.log("It's a draw!");
      this.gameOver = true;
      //if a winner is found disable the user from clicking on the squares
      squares.forEach((square) => (square.style.pointerEvents = 'none'));
      this.resetBoard();
    }
  },
  turn: 1,
  determineTurn: function (row, col) {
    if (this.gameOver) return;

    if (this.turn === 1) {
      console.log("Player 1 turn");
      const placed = this.placeMarker(row, col, this.players.one);
      if (placed) {
        this.determineWinner();
        this.turn = 2;
      }
    } else {
      const placed = this.placeMarker(row, col, this.players.two);
      console.log("Player 2 turn");
      if (placed) {
        this.determineWinner();
        this.turn = 1;
      }
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
    // squares.forEach((square) => (square.textContent = ""));
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
  players: {
    one: playerOne,
    two: playerTwo
  },
};

// Gameboard.placeMarkerPlayerTwo(1, 0);
// Gameboard.placeMarkerPlayerTwo(1, 1);
// Gameboard.placeMarkerPlayerTwo(2, 2);
// Gameboard.placeMarkerPlayerTwo(1, 2);
