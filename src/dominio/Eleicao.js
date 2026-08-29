import { Candidato } from './Candidato.js'
 
export class Eleicao {
  constructor() {
    this.candidatos = []
    this.votos = []
  }
 
  cadastrar(nome, numero) {
    const jaExiste = this.candidatos.find((c) => c.numero === numero)
 
    if (jaExiste) {
      throw new Error(`o numero ${numero} ja esta em uso`)
    }
 
    const id = this.candidatos.length + 1
    const candidato = new Candidato(id, nome, numero)
 
    this.candidatos.push(candidato)
 
    return candidato
  }
  registrarVoto(candidatoId) {
    this.votos.push({ id: this.votos.length + 1, candidatoId })
  }
 
  apurar() {
    return this.candidatos.map((candidato) => {
      const recebidos = this.votos
        .filter((v) => v.candidatoId === candidato.id)
 
      return {
        numero: candidato.numero,
        nome: candidato.nome,
        votos: recebidos.length,
      }
    })
  }
 


}
