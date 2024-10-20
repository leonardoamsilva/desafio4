const container = document.querySelector('.container');
const tentativas = document.querySelector('.tentativas');
const h2 = document.querySelector('h2');
const num = document.querySelector('.num');
const btn = document.querySelector('button');

let numTentativas = 0;

function jogoAdvinha() {
  const numEscolhido = Math.floor(Math.random() * 11);
  console.log(numEscolhido)
  btn.addEventListener('click', () => {
    if (num.value === '') return alert('Digite um número, por favor.');
    advinha(numEscolhido);
    if (numTentativas > 3) return finish('você perdeu. tente novamente.');
  });
}

function advinha(numEscolhido) {
  if (num.value != numEscolhido) {
    tentativas.innerText = `Tentativas: ${numTentativas}`
  } else {
    tentativas.innerText = `Tentativas: ${numTentativas}`
    finish(`acertou, o número era o ${numEscolhido}. parabéns!`);
  }
  numTentativas++;
}

function finish(msg) {
  num.style.display = 'none';
  btn.style.display = 'none';
  h2.innerText = msg;
  const btnRestart = document.createElement('button');
  btnRestart.innerText = 'jogar novamente';
  container.appendChild(btnRestart);
  btnRestart.addEventListener('click', () => location.reload());
}

jogoAdvinha();