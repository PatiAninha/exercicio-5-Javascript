 function tabuada(){
    let inputTabuada= prompt('Digite qual tabuada você quer saber:')

    let tabuada = parseInt(inputTabuada)

    for(let contador = 1; contador <= 10; contador ++){
        let resposta = tabuada * contador
        resultado =  `${tabuada} x ${contador}= ${resposta} <br>`

        document.write(resultado)
    }
}
    

