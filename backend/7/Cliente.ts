import Endereco from './Endereco';

class Cliente {
    nome: string;
    dataNascimento: Date; 
    endereco: Endereco;

    getNome(): string{
        return this.nome;
    }

    getIdade(): number{
        return 25;
    }

    calculaIdade(): number {
        return Date.now();
    }
}

export default Cliente;
