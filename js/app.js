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
    // console.log(numeroCelle)
    const tabellaArea = numeroCelle ** 2
    // console.log(tabellaArea)
    appendHTML.innerHTML = ''
    for (let i = 1; i < tabellaArea + 1; i++) {
        // console.log(i + 1)
        const createDiv = `<div class="d-flex flex-row flex-nowrap p-2 border justify-content-center align-items-center cella fs-2" style="width: calc(100%/${numeroCelle});aspect-ratio:1">${i}</div>`
        appendHTML.innerHTML += createDiv
    }
    console.log(appendHTML)
    // fino a qui abbiamo generato la tabella richiesta dall'utente 

    // adesso generiamo la lista con le bombe e la loro posizione 
    let quanteBombe = 16
    let numeriElencoBomba = []
    do {
        for (let i = 1; i < quanteBombe + 1; i++) {
            // genero un numero randomico tra i valori della tabella 
            let numeriBomba = parseInt((Math.random() * (100, 1)) * tabellaArea + 1)
            // console.log(numeriBomba)
            if (!numeriElencoBomba.includes(numeriBomba)) {
                numeriElencoBomba.push(numeriBomba)
                // console.log(numeriElencoBomba)
            } else {
                quanteBombe += 1
            }
        }

    } while (numeriElencoBomba.lenght < quanteBombe)
    console.log(numeriElencoBomba)

    // adesso dobbiamo collegare la lista delle bombe alle varie celle per collegarle ai colori rosso o verde 


    const celleElements = document.querySelectorAll('.cella')
    // console.log(celleElements)
    const tabellonePunti = document.querySelector('.points')
    let points = 0
    
    for (let i = 0; i < celleElements.length; i++) {
        let cella = celleElements[i]
        const counter = i + 1
        cella.addEventListener('click', function () {
            if (numeriElencoBomba.includes(counter)){
                cella.classList.add('color-bomb')
                cella = alert('Peccato hai perso. Prova ancora')
                appendHTML.innerHTML = ''
            } else {
                cella.classList.add('color')
                points = points + 5
                console.log(points)
            }
            console.log(i + 1)
        })
        // tabellonePunti.innerHTML = `<input class="mt-3" type="text" placeholder="il tuo punteggio" value="${points}">`
        // HTMLFormControlsCollection.log(tabellonePunti)
    }
})
// adesso dopo aver scelto la difficoltà, deve iniziare il gioco 




    



    
   









