
const n1 = document.querySelector('#n1');
const n2 = document.querySelector('#n2');
const n3 = document.querySelector('#n3');
const n4 = document.querySelector('#n4');
const n5 = document.querySelector('#n5');
const n6 = document.querySelector('#n6');

preencherNumeros = () => {
  let n;
  let numeros = [];

  while (numeros.length < 6) {
    n = gerarNumero();
    if (!numeros.includes(n)) {
      numeros.push(n);
      numeros.sort(function (a, b) { return a - b });
    }
  }

  return formatarNumeros(numeros);
}

gerarNumero = () => {
  return Number((Math.random() * (60 - 1) + 1).toFixed(0));
}

formatarNumeros = (numeros) => {
  let numerosCorrigidos = [];

  for (const n of numeros) {
    if (n < 10) {
      numerosCorrigidos.push(('0' + n).toString());
    } else {
      numerosCorrigidos.push(n.toString());
    }
  }

  return numerosCorrigidos;
}

gerarJogo = () => {
  const numeros = preencherNumeros();
  n1.innerHTML = numeros[0];
  n2.innerHTML = numeros[1];
  n3.innerHTML = numeros[2];
  n4.innerHTML = numeros[3];
  n5.innerHTML = numeros[4];
  n6.innerHTML = numeros[5];
}
