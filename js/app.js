console.log('ciao')




const appendHTML = document.querySelector('.row')
const playHTML = document.querySelector('.play')
playHTML.innerHTML= `<select id="select" name="level" style="width: 100px" class="d-flex flex-row" >
                         <option value="first">Easy</option>
                         <option value="middle">Medium</option>
                         <option value="strong">Hard</option>
                    </select>`
const btnElement = document.querySelector('.btn')
let numeroCelle = ''





btnElement.addEventListener('click', function () {
    let levelSelector = document.getElementById('select').value
    if (levelSelector == 'first'){
        numeroCelle = 10;
    } else if (levelSelector == 'middle'){
        numeroCelle = 9;
    } else if (levelSelector == 'strong'){
        numeroCelle = 7;
    }
    console.log(levelSelector,numeroCelle)
    console.log(numeroCelle)
    const tabellaArea = numeroCelle ** 2
    console.log(tabellaArea)
    appendHTML.innerHTML = ''
    for (let i = 0; i < tabellaArea; i++) {
        console.log(i + 1)
        const createDiv = `<div class="d-flex flex-row flex-nowrap p-2 border justify-content-center align-items-center cella fs-2" style="width: calc(100%/${numeroCelle});aspect-ratio:1">${i + 1}</div>`
        appendHTML.innerHTML += createDiv
    }
    console.log(appendHTML)
    const celleElements = document.querySelectorAll('.cella')
    console.log(celleElements)
    for (let i = 0; i < celleElements.length; i++) {
        const cella = celleElements[i]

        cella.addEventListener('click', function () {
            cella.classList.add('color')
            console.log(i + 1)
        })
    }
})
// adesso dopo aver scelto la difficoltà, deve iniziare il gioco 




    



    
   





// Fase due esercizio 
// let quanteBombe = 16
// let  numeriElencoBomba = []
// do{
//     for (let i=0; i < quanteBombe; i++){
//         // genero un numero randomico tra i valori della tabella 
//         const numeriBomba = parseInt((Math.random()*(100,1)) * 100)
//         console.log(numeriBomba)
//         if (!numeriElencoBomba.includes(numeriBomba)){
//             numeriElencoBomba.push(numeriBomba)
//             console.log (numeriElencoBomba)
//         } else {
//             quanteBombe += 1
//         }
//     }
    
// } while (numeriElencoBomba.lenght < quanteBombe)
// console.log(numeriElencoBomba)



