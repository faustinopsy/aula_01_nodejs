import { candidatos, votos } from '../src/dados/index.js';
let nominais = 0;
let brancos = 0;
let nulos = 0;
for (const voto of votos) {
  if (voto.tipo === 'nominal') {
    nominais = nominais + 1;
  } else if (voto.tipo === 'branco') {
    brancos = brancos + 1;
  } else {
    nulos = nulos + 1;
  }
}
for (const candidato of candidatos) {
  let recebidos = 0;
  for (const voto of votos) {
    if (voto.tipo === 'nominal' && voto.candidatoId === candidato.id) {
      recebidos = recebidos + 1;
    }
  }

  const percentual = votos.length === 0  ? 0 : (recebidos / votos.length) * 100;
  console.log(`${candidato.numeroUrna} ${candidato.nome} ${recebidos} Porcentual ${percentual}%`);
}
console.log(`Brancos ${brancos}  Nulos  ${nulos}`);