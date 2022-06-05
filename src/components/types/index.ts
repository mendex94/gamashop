export interface Users {
    id: number,
    nome: string,
    cpf: string,
    endereco: string,
    email: string,
    telefone: string
};

export interface Fornecedor {
    id: number,
    razaoSocial: string,
    cnpj: string,
    endereco: string,
    email: string,
    telefone: string
};

export interface Entregas {
    id: number,
    transportadora: string,
    cnpj: string,
    endereco: string,
    email: string,
    telefone: string
}

export interface Produtos {
    id: number,
    nome: string,
    descricao: string,
    preco: number,
    quantidade: number
}