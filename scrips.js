class Familia{
    constructor(nombre, apellido, edad){
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
    }
}

const grupoFamiliar = []

const form = document.getElementById(`idForm`)
const button = document.getElementById(`buttonFamily`)
const family = document.getElementById(`divFamilia`)

form.addEventListener(`submit`, (event) => {
    event.preventDefault()

    let nombre = document.getElementById(`idNombre`).value
    let apellido = document.getElementById(`idApellido`).value
    let edad = document.getElementById(`idEdad`).value

    const familia = new Familia(nombre, apellido, edad)
    grupoFamiliar.push(familia)
    console.log(grupoFamiliar)
    form.reset()

})

button.addEventListener(`click`, () => {
    grupoFamiliar.forEach(familias => {
        family.innerHTML += `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${familias.nombre}</h5>
                <p class="card-text">${familias.apellido}</p>
                <p class="card-text">${familias.edad}</p>
            </div>
        </div>
        `
    })
})



















