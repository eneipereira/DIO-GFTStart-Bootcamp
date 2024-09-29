class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let tipoDeAtaque = '';

    switch (this.tipo) {
      case 'mago':
        tipoDeAtaque = 'magia';
        break;
      case 'monge':
        tipoDeAtaque = 'artes marciais';
        break;
      case 'ninja':
        tipoDeAtaque = 'shuriken';
        break;
      default:
        tipoDeAtaque = 'espada';
        break;
    }

    console.log(`O ${this.nome}, que é um ${this.tipo}, atacou usando ${tipoDeAtaque}`);
  }
}
