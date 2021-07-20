//evento de click na tela inteira
document.body.addEventListener('keyup', (event) => {
  playSound(event.code.toLowerCase());
});

//Selecionando botao e adicionando evento de click
document.querySelector('.composer button').addEventListener('click', () => {
  //pegando o que foi digitado com .value
  let song = document.querySelector('#input').value;
  if (song !== '') {
    //cada letra da string vira um item do array
    let songArray = song.split('');
    playComposition(songArray);
  }
});

function playSound(sound) {
  //selecionando audio de acordo com a tecla pressionada
  let audioElement = document.querySelector(`#s_${sound}`);
  //selecionando a tecla pressionada
  let keyElement = document.querySelector(`div[data-key="${sound}"]`);

  if (audioElement) {
    //zerando ponteiro do audio para pressionar varias vezes
    audioElement.currentTime = 0;
    audioElement.play();
  }

  if (keyElement) {
    keyElement.classList.add('active');
    setTimeout(() => {
      keyElement.classList.remove('active');
    }, 100);
  }
}

function playComposition(songArray) {
  let wait = 0;

  for (let songItem of songArray) {
    setTimeout(() => {
      playSound(`key${songItem}`);
    }, wait);
    wait += 250;
  }
}
