/**
 * Resposta esperada:
 *
 * > Não tenho acesso a "i"
 * > Não tenho acesso a "key"
 * 
 */

try {
  let obj = { x: 1, y: 2, z: 3 };
  let arr = Object.keys(obj); // [ 'x', 'y', 'z' ]
  for (var i = 0; i < arr.length; i++) {}

  console.log(i);
}
catch (err) {
  console.error('Não tenho acesso a "i"');
}

try {
  for (var key in obj) {}

  console.log(key);
}
catch (err) {
  if (err.message.indexOf('obj') > -1) {
    console.error(err);
  } else {
    console.error('Não tenho acesso a "key"');
  }
}