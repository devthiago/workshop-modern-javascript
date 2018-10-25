/**
 * Resposta esperada:
 *
 * > 0
 * > Eu sou uma const
 * > 123
 * > Mudando o valor?
 * > Não tenho acesso a "notChangeable"
 * 
 */

const constNum = 0;
constNum = 1;

const constString = 'Eu sou uma const';
constString = 'WTF?';

console.log(constNum);
console.log(constString);

if (true) {
  const notChangeable = 123;
  console.log(notChangeable);
}

if (true) {
  notChangeable = 'Mudando o valor?';
  console.log(notChangeable);
}

try {
  console.log(notChangeable);
}
catch (err) {
  console.error('Não tenho acesso a "notChangeable"');
}