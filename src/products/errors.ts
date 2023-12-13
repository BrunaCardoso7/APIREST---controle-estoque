export class NotFoundError extends Error {
  constructor(mensagem: string) {
    super(mensagem);
    this.message = 'NotFoundError';
  }
}
