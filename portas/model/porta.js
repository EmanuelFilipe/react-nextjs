export default class Porta {
    // atributos privados
    #numero
    #temPresente
    #selecionada
    #estaAberta

    constructor(numero, temPresente = false, 
                selecionada = false, estaAberta = false) {
        this.#numero = numero
        this.#temPresente = temPresente
        this.#selecionada = selecionada
        this.#estaAberta = estaAberta
    }

    get numero() {
        return this.#numero
    }
    get temPresente() {
        return this.#temPresente
    }
    get selecionada() {
        return this.#selecionada
    }
    get estaAberta() {
        return this.#estaAberta
    }

    desselecionar() {
        const selecionada = false
        return new Porta(this.numero, this.temPresente, selecionada, this.estaAberta)
    }

    alternarSelecao() {
        const selecionada = !this.selecionada
        return new Porta(this.numero, this.temPresente, selecionada, this.estaAberta)
    }
    
    abrir() {
        const aberta = true
        return new Porta(this.numero, this.temPresente, this.selecionada, aberta)
    }
}