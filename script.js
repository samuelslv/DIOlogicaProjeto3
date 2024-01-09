class heroi {
    constructor(Nome, Idade, Tipo) {
        this.nome = Nome
        this.idade = Idade
        this.tipo = Tipo
    }

    atacar() {    
        if (this.tipo == "mago") {
            console.log(`o ${this.tipo} atacou usando magia`)
        } else if (this.tipo == "guerreiro") {
            console.log(`o ${this.tipo} atacou usando espada`)
        } else if (this.tipo == "monge") {
            console.log(`o ${this.tipo} atacou usando artes maciais`)
        } else if (this.tipo == "ninja") {
            console.log(`o ${this.tipo} atacou usando shuriken`)
        }else{
            console.log('O personagem não tem um tipo')
        }
    }
}

let guerreiro = new heroi("Samuel", 25, "mago")

guerreiro.atacar()