console.log('ciao')


// const numeroCelle = 10
// console.log(numeroCelle)
// const tabellaArea = numeroCelle**2 
// console.log(tabellaArea)

// const appendHTML = document.querySelector('.row')

// const btnElement = document.querySelector('.btn')
// console.log(btnElement)
// btnElement.addEventListener('click', function(){
//     appendHTML.innerHTML = ''
//     for (let i = 0; i < tabellaArea; i++){
//         console.log(i+1)
//         const createDiv = `<div class="d-flex flex-row flex-nowrap p-2 border justify-content-center align-items-center cella fs-2" style="width: calc(100%/${numeroCelle});aspect-ratio:1">${i+1}</div>`
//         appendHTML.innerHTML += createDiv    
//     }
//     console.log(appendHTML)
//     const celleElements = document.querySelectorAll('.cella')
//       console.log(celleElements)

//     for (let i = 0; i < celleElements.length; i++) {
// 	const cella = celleElements[i]

// 	cella.addEventListener('click', function () {
//         cella.classList.add('color')
// 		console.log(i + 1)
// 	})
// }
// })



// Fase due esercizio 
let quanteBombe = 8
let  numeriElencoBomba = []
do{
    for (let i=1; i < quanteBombe; i++){
        // genero un numero randomico tra i valori della tabella 
        const numeriBomba = parseInt((Math.random()*(100,1)) * 100)
        console.log(numeriBomba)
        numeriElencoBomba.push(numeriBomba)
        console.log(numeriBomba)
        console.log(numeriElencoBomba)
        // devo verificare se ci sono dei numeri doppi per eliminarli 
        if (numeriElencoBomba === numeriBomba){
        console.log (numeriElencoBomba,numeriBomba)
        }
    }
} while (numeriElencoBomba.lenght< quanteBombe)

















