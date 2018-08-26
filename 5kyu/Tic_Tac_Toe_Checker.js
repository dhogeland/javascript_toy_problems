function isSolved(board) {
  if (board[0][0] == 1 && board[1][1] == 1 && board[2][2] == 1) return 1;
  if (board[0][0] == 2 && board[1][1] == 2 && board[2][2] == 2) return 2;
  if (board[0][2] == 1 && board[1][1] == 1 && board[2][0] == 1) return 1;
  if (board[0][2] == 2 && board[1][1] == 2 && board[2][0] == 2) return 2;
  for (var i = 0; i < board.length; i++) {
    if (board[0][i] == 1 && board[1][i] == 1 && board[2][i] == 1) return 1;
    if (board[0][i] == 2 && board[1][i] == 2 && board[2][i] == 2) return 2;
    if (!board[i].includes(0) && !board[i].includes(2)) return 1;
    if (!board[i].includes(0) && !board[i].includes(1)) return 2;
  }
  if (board[0].includes(0) || board[1].includes(0) || board[2].includes(0)) return -1;
  return 0;
}
