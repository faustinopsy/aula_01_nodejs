export class Voto {
  constructor(id, candidatoId) {
    if (!candidatoId) {
      throw new Error('voto precisa de um candidatoId')
    }
 
    this.id = id
    this.candidatoId = candidatoId
  }
}
