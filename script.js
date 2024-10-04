let currentPlayer = 1;
let player1Name = '';
let player2Name = '';
let gameStarted = false;
let board = ['', '', '', '', '', '', '', '', ''];

document.getElementById('submit').addEventListener('click', () => {
    player1Name = document.getElementById('player-1').value;
    player2Name = document.getElementById('player-2').value;
    if (player1Name && player2Name) {
        gameStarted = true;
        document.querySelector('.player-names').style.display = 'none';
        document.querySelector('.game-board').style.display = 'block';
        document.querySelector('.message').innerText = `${player1Name}, you're up`;
    }
});

document.querySelectorAll('.cell').forEach((cell) => {
    cell.addEventListener('click', () => {
        const cellIndex = parseInt((link unavailable)) - 1;
        if (gameStarted && board[cellIndex] === '') {
            if (currentPlayer === 1) {
                cell.innerText = 'X';
                board[cellIndex] = 'X';
                currentPlayer = 2;
                document.querySelector('.message').innerText = `${player2Name}, you're up`;
            } else {
                cell.innerText = 'O';
                board[cellIndex] = 'O';
                currentPlayer = 1;
                document.querySelector('.message').innerText = `${player1Name}, you're up`;
            }
            checkWinner();
        }
    });
});

function checkWinner() {
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (let i = 0; i < winningCombinations.length; i++) {
        const [a, b, c] = winningCombinations[i];
        if (board[a] === board[b] && board[b] === board[c] && board[a] !== '') {
            document.querySelector('.message').innerText = `${currentPlayer === 1 ? player1Name : player2Name} congratulations, you won!`;
            gameStarted = false;
        }
    }
}

