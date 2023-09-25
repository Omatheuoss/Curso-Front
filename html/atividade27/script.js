// const KEY_OPENAI = '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'

// let mensagem = 'Quais são as capitais do Brasil?'

// fetch("https://api.openai.com/v1/completions",{
//     method:'POST',
//     headers:{
//         Accept: "application/json",
//         "Content-type":  "application/json",
//         Authorization: `Bearer ${KEY_OPENAI}`
//     },
//     body: JSON.stringify({
//         model: "text-daVinci-003",
//         prompt: mensagem, 
//         max_tokens: 2048,
//         temperatura: 0.5
//     })
    
// })
// .then(response => response.json())
// .then(data => {

// })
// .catch(erro =>{
//     console.log(errou)
// })

fetch('https://fakestoreapi.com/products?limit=5')
            .then(res=>res.json())
            .then(json=>console.log(json))