const itensLista = [...document.querySelectorAll('li')]
const botao = document.querySelector('button')
const lista1 = document.getElementById('lista1')
const lista2 = document.getElementById('lista2')

// criando a classe select
itensLista.forEach((item)=>{
    item.addEventListener('click', () =>{

        item.classList.toggle('select')

    })
})

botao.addEventListener('click', ()=>{

    const primeiraLista = document.querySelector('.primeira')
    const segundaLista = document.querySelector('.segunda')

    const selectPrimeira = [...primeiraLista.querySelectorAll('.select')]
    const selectSegunda = [...segundaLista.querySelectorAll('.select')]

    selectPrimeira.forEach((item)=>{
        item.classList.remove('select')
        lista2.appendChild(item)
    })

    selectSegunda.forEach((item)=>{
        item.classList.remove('select')
        lista1.appendChild(item)
    })
})