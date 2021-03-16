// Numero random tra max e min
function getRnd(numMin, numMax){

  var minRnd = numMin;
  var maxRnd = numMax - minRnd + 1;

  var rnd = parseInt(Math.floor(Math.random() * maxRnd) + minRnd);
  return rnd;
}

// quantity di numeri random diversi tra un numMin e un numMax in un array
function getRnds(numMin, numMax, quantity){
  var numRnds = [];

  while (numRnds.length != quantity){
    var numRnd = getRnd(numMin, numMax);
    if (!numRnds.includes(numRnd)){
      numRnds.push(numRnd);
    }
  }

  return numRnds;
}
