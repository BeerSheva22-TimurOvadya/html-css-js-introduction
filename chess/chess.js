function chessBoardMatrix(rows, columns){
    rows = 8;
    columns = 8;
    return Array.from({ length: rows }, (_, i) =>
    Array.from({ length: columns }, (_, j) => (i + j) % 2)
  ); 

}

function renderChessBoard(matrix){
    const chessBoard = document.getElementById('chess-board');
    chessBoard.innerHTML = matrix.map(row => 
      row.map(cell => `<div class="${cell ? 'cell black' : 'cell white'}"></div>`).join('')
    ).join('');
}

renderChessBoard(chessBoardMatrix(8, 8));

