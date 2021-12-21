// esse código cuida da parte visual do jogo e portanto faz a comunicação HTML com JS

function play() {
  let square = event.target
  let position = square.id

  if (move(position)) {
    // atrasa um pouco para aparecer o alert, pois senão o último emoji não aparece
    setTimeout(() => {
      alert(`O jogo acabou! O vencedor foi o jogador ${playerTime}`)
    }, 10)
  }
  updateSquare(position)
}
