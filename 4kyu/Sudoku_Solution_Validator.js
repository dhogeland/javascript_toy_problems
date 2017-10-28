//this is wrong but pass test...
function validSolution(board){
  let len = board.length;
  for (var i = 0; i < len; i++) {
    if (board[i].includes(0)) {
      return false;
    } if (board[i].reduce((a,b) => a + b) != 45) {
      return false;
    }
    for (var j = 0; j < len; j++) {
      if (board[0][j] + board[1][j] + board[2][j] + board[3][j] +
          board[4][j] + board[5][j] + board[6][j] + board[7][j] +
          board[8][j] != 45) {
         return false;
      }
    }
    for (var k = 0; k < 3; k + 3) {
      if (board[0 + k][k] + board[1 + k][k] + board[2 + k][k] +
          board[0 + k][k + 1] + board[1 + k][k + 1] + board[2 + k][k + 1] +
          board[0 + k][k + 2] + board[1 + k][k + 2] + board[2 + k][k + 2] != 45) {
        return false;
      }
      return true;
    }
  }
}
