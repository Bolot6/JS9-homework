
const input = document.querySelector('#input')
const submit = document.querySelector('#submit')
const name= document.querySelector('#name')
const color= document.querySelector('#hair_color')
const vehicle =document.querySelector('#vehicle')
const model = document.querySelector('#model')
const manufacture = document.querySelector('#manufacture')
submit.addEventListener('click', () => {
    let value = input.value
    fetch(`https://swapi.dev/api/people/${value}`)
        .then(res => res.json())
        .then(json =>{
            name.innerHTML = json.name
            color.innerHTML = json.hair_color
            vehicleUrl = json.vehicles[0]
            fetch(`https://swapi.dev/api/vehicles/${value}`)
                .then(res => res.json())
                .then(json =>{
                    vehicle.innerHTML = json.name
                    model.innerHTML = json.model
                    manufacture.innerHTML = json.manufacturer
                })
        })
})
