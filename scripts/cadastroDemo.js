import { Candidato  } from "../src/dominio/Candidato.js"
const brutos = [
  { id: 1, nome: 'Ana Souza', numero: '10' },
  { id: 2, nome: 'Bruno Lima', numero: '20' },
  { id: 3, nome: 'Al', numero: '30' },
  { id: 4, nome: 'Carla Dias', numero: '007' },
]
 
let cadastrados = 0
let recusados = 0
 
for (const bruto of brutos) {
  try {
    new Candidato(bruto.id, bruto.nome, bruto.numero)
    cadastrados = cadastrados + 1
  } catch (erro) {
    console.log('recusado:', bruto.nome, '->', erro.message)
    recusados = recusados + 1
  }
}
console.log(`Total Cadastrados:${cadastrados}, Recusados: ${recusados}`)
