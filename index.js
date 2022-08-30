const readline = require("readline-sync");

let valores = [];

const isCero = (num) => {
  if (Number(num) === 0) {
    return true;
  }
  return false;
};

const validateNumber = (num) => {
  if (Number(num) && Number(num) >= 1) {
    return true;
  } else {
    return false;
  }
};

const isMayor = (newNumber, callback) => {
    
  if (!callback(newNumber)) {
    return false;
  }

  valores.push(Number(newNumber));
  return true;
};

const printResult = (arr) =>{
    let numMax = Math.max(...arr);
    let count = arr.filter(n => Number(n)===Number(numMax));
    return `El numero máximo es ${numMax} y se repitió ${count.length} veces`;
}

while (true) {
  const num = readline.question("Write a number: ");

  if (isCero(num)) {
    console.log(printResult(valores));
    break;
  }

  if (!isMayor(num, validateNumber)) {
    console.log("entrada invalida");
  }
}
