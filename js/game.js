// esse código cuida da parte lógica do jogo

// array para representar cdaa posição do tabuleiro
// inicialmente ele está vazio, mas será preenchido com "x" ou "o" dependendo do jogador
let board = ['', '', '', '', '', '', '', '', '']

// variável para controlar de quem é a vez
// vamos começar com o jogador 1 (que é o 0)
let playerTime = 0

// símbolos que irão preencher o array board
let symbols = ['o', 'x']

// variável para encerrer o jogo
let gameOver = false

// array que contém as possibilidades de vitória
let winStates = [
  // os números são as posições do tabuleiro
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

function move(position) {
  if (gameOver) {
    return
  }

  // o array board na posição "position" receberá o símbolo de acordo com a vez do jogador. Se for o jogador 1 receberá "o", se for o 2 receberá "x"
  if (board[position] == '') {
    board[position] = symbols[playerTime]

    // verifica se houve um vencedor
    gameOver = isWin()

    // mudar a vez do jogador
    if (gameOver == false) {
      // se playerTime for igual a 0 é atribuído o valor 1, senão o valor 0
      playerTime = playerTime == 0 ? 1 : 0
    }
  }
  return gameOver
}

function isWin() {
  // percorre o array winStates
  for (let i = 0; i < winStates.length; i++) {
    let seq = winStates[i]

    let pos1 = seq[0]
    let pos2 = seq[1]
    let pos3 = seq[2]

    // verifica se os elementos da linha coluna ou vertical são iguais. Se for, retorna true e o jogo acaba
    if (
      board[pos1] == board[pos2] &&
      board[pos1] == board[pos3] &&
      board[pos1] != ''
    ) {
      return true
    }
  }
  return false
}
