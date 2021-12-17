let rodada = 1

function jogar() {
  if (rodada % 2 == 0) {
    jogador1 = false
    jogador2 = true
  } else {
    jogador1 = true
    jogador2 = false
  }

  let square = event.target
  if (square.innerHTML == '') {
    if (jogador1) {
      square.innerHTML = `
      <div class="o"><div>
    `
    } else {
      square.innerHTML = `
      <div class="x"><div>
    `
    }
  }

  rodada++
}
