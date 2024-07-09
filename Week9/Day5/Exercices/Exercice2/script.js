let playerSymbol = '';
let computerSymbol = '';
let board = Array(9).fill('');
let gameOver = false;
const winCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2]
];

function chooseSymbol(symbol) {
    playerSymbol = symbol;
    computerSymbol = symbol === 'X' ? 'O' : 'X';
    document.getElementById('message').textContent = `You are ${playerSymbol}. Computer is ${computerSymbol}.`;
}

function makeMove(index) {
    if (board[index] || gameOver) return;

    board[index] = playerSymbol;
    document.getElementById(index).textContent = playerSymbol;
    if (checkWin(playerSymbol)) {
        endGame(`${playerSymbol} wins!`);
        return;
    }
    if (board.every(cell => cell)) {
        endGame('Tie game!');
        return;
    }

    setTimeout(computerMove, 500); // Delay for realism
}

function computerMove() {
    let move;
    if (Math.random() < 0.5) {
        // Easy mode: random move
        const emptyCells = board.map((cell, i) => cell === '' ? i : null).filter(i => i !== null);
        move = emptyCells[Math.floor(Math.random() * emptyCells.length)];
    } else {
        // Hard mode: try to win or block
        move = findBestMove();
    }
    board[move] = computerSymbol;
    document.getElementById(move).textContent = computerSymbol;
    if (checkWin(computerSymbol)) {
        endGame(`${computerSymbol} wins!`);
        return;
    }
    if (board.every(cell => cell)) {
        endGame('Tie game!');
        return;
    }
}

function findBestMove() {
    // Try to win
    for (let combo of winCombos) {
        const [a, b, c] = combo;
        if (board[a] === computerSymbol && board[b] === computerSymbol && !board[c]) return c;
        if (board[a] === computerSymbol && !board[b] && board[c] === computerSymbol) return b;
        if (!board[a] && board[b] === computerSymbol && board[c] === computerSymbol) return a;
    }
    // Try to block
    for (let combo of winCombos) {
        const [a, b, c] = combo;
        if (board[a] === playerSymbol && board[b] === playerSymbol && !board[c]) return c;
        if (board[a] === playerSymbol && !board[b] && board[c] === playerSymbol) return b;
        if (!board[a] && board[b] === playerSymbol && board[c] === playerSymbol) return a;
    }
    // Random move
    const emptyCells = board.map((cell, i) => cell === '' ? i : null).filter(i => i !== null);
    return emptyCells[Math.floor(Math.random() * emptyCells.length)];
}

function checkWin(symbol) {
    return winCombos.some(combo => combo.every(index => board[index] === symbol));
}

function endGame(message) {
    gameOver = true;
    document.getElementById('message').textContent = message;
    document.getElementById('restart').classList.remove('hidden');
}

function restartGame() {
    board = Array(9).fill('');
    gameOver = false;
    document.getElementById('board').querySelectorAll('.cell').forEach(cell => cell.textContent = '');
    document.getElementById('message').textContent = '';
    document.getElementById('restart').classList.add('hidden');
}
