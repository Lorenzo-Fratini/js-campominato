// Numero random tra max e min
function getRnd(min, max){

  var minRnd = min;
  var maxRnd = max - minRnd + 1;

  var rnd = parseInt(Math.floor(Math.random() * maxRnd) + minRnd);
  return rnd;
}

// quantity di numeri random diversi tra un numMin e un numMax in un array
function getRnds(numMin, numMax, quantity){
  var numRnds = []

  do {
    var numRnd = getRnd(numMin, numMax);
    if (!numRnds.includes(numRnd)){
      numRnds.push(numRnd);
    }
  } while (numRnds.length != quantity);

  return numRnds;
}
