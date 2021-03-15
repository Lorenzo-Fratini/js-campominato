// Numero random tra max e min
function getRnd(min, max){

  var minRnd = min;
  var maxRnd = max - minRnd + 1;

  var rnd = parseInt(Math.floor(Math.random() * maxRnd) + minRnd);
  return rnd;
}

// Verifico se il numero è pari o dispari
function isPair(value){
  if (value % 2 == 0){
    return true;
  } else {
    return false;
  }
}

// Verifico se una parola è palindroma
function isPalindrom(str){
  var reverseStr = str.toLowerCase().split('').reverse( ).join('');

  if (str == reverseStr){
    return true;
  } else {
    return false;
  }
}
