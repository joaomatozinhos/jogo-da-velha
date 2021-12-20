function play() {
  let square = event.target
  let position = square.id
  move(position)
  updateSquares()
}

// função para preencher o tabuleiro
function updateSquares() {
  let squares = document.querySelectorAll('.square')

  squares.forEach(square => {
    let position = square.id
    let symbol = board[position]

    if (symbol != '') {
      square.innerHTML = `<div class='${symbol}'></div>`
    }
  })
}
