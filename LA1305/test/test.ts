const frenchmode: HTMLButtonElement | null = document.createElement('button')
const germanmode: HTMLButtonElement | null = document.createElement('button')
const englishmode: HTMLButtonElement | null = document.createElement('button')


let body = document.querySelector('body')

body.append(germanmode, frenchmode, englishmode)

fetch('http://localhost:3000/vocis/')
  .then((response) => response.json())
  .then((data) => {
    console.log(data)
  })
