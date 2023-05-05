const frenchmode: HTMLButtonElement | null = document.createElement('button')
const germanmode: HTMLButtonElement | null = document.createElement('button')
const englishmode: HTMLButtonElement | null = document.createElement('button')


let app: HTMLDivElement = document.querySelector('#app')!

app.textContent = "Test"

app.append(germanmode, frenchmode, englishmode)

fetch('http://localhost:3000/vocis/')
  .then((response) => response.json())
  .then((data) => {
    console.log(data)
  })
