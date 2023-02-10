console.log('ciao')


const numeroCelle = 10
console.log(numeroCelle)
const tabellaArea = numeroCelle**2 
console.log(tabellaArea)

const appendHTML = document.querySelector('.row')

const btnElement = document.querySelector('.btn')
console.log(btnElement)
btnElement.addEventListener('click', function(){
    appendHTML.innerHTML = ''
    for (let i = 0; i < tabellaArea; i++){
        console.log(i+1)
        const createDiv = `<div class="d-flex flex-row flex-nowrap p-2 border justify-content-center align-items-center cella fs-2" style="width: calc(100%/${numeroCelle});aspect-ratio:1">${i+1}</div>`
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








