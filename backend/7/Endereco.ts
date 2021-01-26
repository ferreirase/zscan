class Endereco {
   logradouro: string;
   complemento: string;

    getLogradouro(): string{
        return this.logradouro;
    }

    getComplemento(): string{
        return this.complemento;
    }

    getEmderecoCompleto(): string {
        return this.logradouro + this.complemento;
    }
}

export default Endereco;
