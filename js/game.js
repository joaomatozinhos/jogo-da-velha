// array para representar cdaa posição do tabuleiro
// inicialmente ele está vazio, mas será preenchido com "x" ou "o" dependendo do jogador
let board = ['', '', '', '', '', '', '', '', '']

// variável para controlar de quem é a vez
// vamos começar com o jogador 1 (que é o 0)
let playerTime = 0

// símbolos que irão preencher o array board
let symbols = ['o', 'x']

function move(position) {
  // o array board na posição "position" receberá o símbolo de acordo com a vez do jogador. Se for o jogador 1 receberá "o", se for o 2 receberá "x"
  if (board[position] == '') {
    board[position] = symbols[playerTime]

    // mudar a vez do jogador
    if (playerTime == 0) {
      playerTime = 1
    } else {
      playerTime = 0
    }
  }
}
