const grupoA = 100;
const grupoB = 300;

const vencedor = grupoA > grupoB ? 'Grupo A venceu' : 'Grupo B venceu';

console.log(vencedor);

const numeros = [2, 5, 7, 25, 37, 15];
const total = numeros.filter((numero) => numero > 4);

console.log(total);

const active = true;

const button = active && 'Botão está ativo';

console.log(button);
