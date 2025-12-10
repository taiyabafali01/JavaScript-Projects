// Tic Tac Toe Game Logic

// This array represents the 9 cells on the board.
// We will store "X", "O", or null in each position.
let board = [null, null, null, null, null, null, null, null, null];

// Variable to keep track of the current player ("X" starts the game).
let currentPlayer = "X";

// This flag will help us know if the game is still going or finished.
let gameActive = true;

// All possible winning combinations using cell indexes.
const winningCombinations = [
    [0, 1, 2], // top row
    [3, 4, 5], // middle row
    [6, 7, 8], // bottom row
    [0, 3, 6], // left column
    [1, 4, 7], // middle column
    [2, 5, 8], // right column
    [0, 4, 8], // diagonal top-left to bottom-right
    [2, 4, 6]  // diagonal top-right to bottom-left
];

// Get references to DOM elements that we need to update.
const cells = document.querySelectorAll(".square");
const statusText = document.getElementById("status");
const resetButton = document.getElementById("resetBtn");

// Sound effects
const placeSound = new Audio("media/place.mp3");
const winSound   = new Audio("media/winGame.mp3");
const tieSound   = new Audio("media/tie.mp3");

// Add a click event listener to each cell so we know when a user clicks it.
cells.forEach(cell => {
    cell.addEventListener("click", handleCellClick);
});

// Add a click event listener to the reset button to restart the game.
resetButton.addEventListener("click", resetGame);

/**
 * This function runs when a cell is clicked.
 * It handles the main gameplay for each move.
 */
function handleCellClick(event) {
    const cell = event.target;
    const index = cell.getAttribute("data-index");

    // If the game is over or the cell already has a value, do nothing.
    if (!gameActive || board[index] !== null) {
        return;
    }

    // Place the current player's symbol into the board array.
    board[index] = currentPlayer;

    // Show X or O image by adding a CSS class ("x" or "o")
    cell.classList.add(currentPlayer.toLowerCase());

    // Play place sound
    placeSound.currentTime = 0;
    placeSound.play().catch(() => {});

    // Check if this move caused a win.
    if (checkWinner()) {
        statusText.textContent = "Player " + currentPlayer + " wins!";
        gameActive = false;
        disableBoard();

        winSound.currentTime = 0;
        winSound.play().catch(() => {});
        return;
    }

    // Check for a draw.
    if (checkDraw()) {
        statusText.textContent = "It's a draw!";
        gameActive = false;

        tieSound.currentTime = 0;
        tieSound.play().catch(() => {});
        return;
    }

    // If game continues, switch to the other player.
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    statusText.textContent = "Player " + currentPlayer + "'s turn";
}

/**
 * This function checks all winning combinations to see if
 * the current player has three in a row.
 */
function checkWinner() {
    for (let combo of winningCombinations) {
        const [a, b, c] = combo;

        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return true;
        }
    }
    return false;
}

/**
 * This function checks if all cells are filled and there is no winner.
 * If so, the game is a draw.
 */
function checkDraw() {
    return board.every(cell => cell !== null);
}

/**
 * This function disables the board visually by adding a "disabled" class
 * so the user knows the game is over.
 */
function disableBoard() {
    cells.forEach(cell => {
        cell.classList.add("disabled");
    });
}

/**
 * This function resets the game to the initial state so that
 * a new match can be played.
 */
function resetGame() {
    // Reset the board array to all nulls.
    board = [null, null, null, null, null, null, null, null, null];

    // Set current player back to "X".
    currentPlayer = "X";

    // Mark the game as active again.
    gameActive = true;

    // Clear cell visuals and remove classes.
    cells.forEach(cell => {
        cell.classList.remove("disabled", "x", "o");
    });

    // Reset the status message.
    statusText.textContent = "Player X's turn";
}
