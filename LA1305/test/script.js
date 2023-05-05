let frenchmode = document.createElement('btn')
let germanmode = document.createElement('btn')
let englishmode = document.createElement('btn')

let body = document.querySelector('body')

body.append(germanmode, frenchmode, englishmode)

fetch('http://localhost:3000/vocis/')
  .then((response) => response.json())
  .then((data) => {
    console.log(data)
  })
