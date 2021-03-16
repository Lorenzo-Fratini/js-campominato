function mineField(){

  var numsLength = 5; //16
  var comNumMin = 1;
  var comNumMax = 10; //100

  // Bonus scelta difficoltà

  // var difficulty = ['facile', 'medio', 'difficile'];
  //
  // do {
  //   var userChoise = prompt('Scegli una difficoltà (facile, medio o difficile)');
  //
  //   if (!difficulty.includes(userChoise)){
  //     alert('Scelta non valida');
  //   }
  // } while (!difficulty.includes(userChoise));
  //
  //
  // switch (userChoise){
  //
  //   case difficulty[0]:
  //   comNumMax = 50;
  //   break;
  //
  //   case difficulty[1]:
  //   comNumMax = 80;
  //   break;
  //
  //   case difficulty[2]:
  //   comNumMax = 100;
  //   break;
  // }

  var comNums = getRnds(comNumMin, comNumMax, numsLength);

  console.log(comNums);

  function gameStart() {
    var userNums = [];
    var userControl = true;
    var round = 0;

    do {
      var userNum = parseInt(prompt('Inserisci un numero tra ' + comNumMin + ' e ' + comNumMax ));

      if (userNum > comNumMax || userNum < comNumMin) {
        alert('Numero inserito non compreso tra ' + comNumMin + ' e ' + comNumMax );
      }

      if (userNums.includes(userNum)){
        alert('Scelta non valida o numero già inserito');
      } else {
        userNums.push(userNum);
        round++;
      }

      if (comNums.includes(userNum)){
        console.log('Hai perso!');
        userControl = false;
      }
    } while (userControl && (round != comNumMax - numsLength));

    if (userControl){
      console.log('Hai inserito ' + round + ' numeri corretti e hai vinto!');
    }
  }

  var start = document.getElementById('start');
  start.addEventListener('click', gameStart);

}

mineField()
