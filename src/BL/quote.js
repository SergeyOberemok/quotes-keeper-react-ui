export class Quote {
  constructor(params) {
    this.id = params.id || 0;
    this.phrase = params.phrase || '';
    this.author = params.author || '';
  }
}