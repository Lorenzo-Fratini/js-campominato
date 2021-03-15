function mineField(){

  var comNums = [];
  var comNumsLng = 5;
  var comNumMin = 1;
  var comNumMax = 10;

  for (i = 0; i < comNumsLng; i++){
    var comNum = getRnd(comNumMin, comNumMax);
    if (comNums.includes(comNum)){
      i--
    } else {
      comNums.push(comNum);
    }
  }

  console.log(comNums);

  var userNums = [];
  var control = true;

  for (i = 0; i < (comNumMax - comNumsLng); i++){
    var userNum = parseInt(prompt('inserisci un numero tra 1 e 100'));

    if (userNum > comNumMax || userNum < comNumMin) {
      alert('Numero inserito non corretto');
      i--;
    }

    var round = i;

    if (userNums.includes(userNum)){
      i--
    } else {
      userNums.push(userNum);
    }

    if (comNums.includes(userNum)){
      console.log('hai perso');
      control = false;
      break;
    }
  }

  if (control){
    console.log('Hai inserito ' + round + ' numeri corretti e hai vinto!');
  }
}

mineField()
