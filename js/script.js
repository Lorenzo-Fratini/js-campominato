function mineField(){

  var comNums = [];
  var numsLength = 5;
  var comNumMin = 1;
  var comNumMax = 10;

  do {
    var comNum = getRnd(comNumMin, comNumMax);
    if (!comNums.includes(comNum)){
      comNums.push(comNum);
    }
  } while (comNums.length != numsLength);

  console.log(comNums);

  var userNums = [];
  var userControl = true;
  var round = 0;

  do {
    var userNum = parseInt(prompt('inserisci un numero tra 1 e 100'));

    console.log(userNum);

    console.log('round', round);

    if (userNum > comNumMax || userNum < comNumMin) {
      alert('Numero inserito non compreso tra 1 e 100');
    }

    if (userNums.includes(userNum)){
      alert('Numero già inserito');
    } else {
      userNums.push(userNum);
      round++;
    }

    if (comNums.includes(userNum)){
      console.log('hai perso');
      userControl = false;
    }
  } while (userControl && (round != comNumMax - numsLength));

  if (userControl){
    console.log('Hai inserito ' + round + ' numeri corretti e hai vinto!');
  }
}

mineField()
