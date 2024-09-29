//your JS code here. If required.
const player1Input = document.getElementById('player-1');
const player2Input = document.getElementById('player-2');
const submitButton = document.getElementById('submit');
const inputSection = document.getElementById('inputSection');
const gameSection = document.getElementById('gameSection');
const messageDiv = document.getElementById('message');
const cells = document.querySelectorAll('.cell');

let currentPlayer = 'X';
let player1, player2;
let board = ['', '', '', '', '', '', '', '', ''];
let isGameActive = true;

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

submitButton.addEventListener('click', () => {
    player1 = player1Input.value;
    player2 = player2Input.value;
    
    if (player1 && player2) {
        inputSection.style.display = 'none';
        gameSection.style.display = 'block';
        messageDiv.innerText = `${player1}, you're up!`;
    }
});

cells.forEach((cell, index) => {
    cell.addEventListener('click', () => handleCellClick(index));
});

function handleCellClick(index) {
    if (board[index] !== '' || !isGameActive) return;

    board[index] = currentPlayer;
    cell.innerText = currentPlayer;

    checkResult();
}

function checkResult() {
    let roundWon = false;
    
    for (let i = 0; i < winningConditions.length; i++) {
        const [a, b, c] = winningConditions[i];
        if (board[a] === '' || board[b] === '' || board[c] === '') continue;
        if (board[a] === board[b] && board[a] === board[c]) {
            roundWon = true;
            break;
        }
    }

    if (roundWon) {
        messageDiv.innerText = currentPlayer === 'X' ? `${player1} congratulations you won!` : `${player2} congratulations you won!`;
        isGameActive = false;
        return;
    }

    if (!board.includes('')) {
        messageDiv.innerText = "It's a draw!";
        isGameActive = false;
        return;
    }

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    messageDiv.innerText = currentPlayer === 'X' ? `${player1}, you're up!` : `${player2}, you're up!`;
}
