const container = document.querySelector('.container')




fetch('https://fakestoreapi.com/products?limit=5')
            .then(res=>res.json())
            .then(json=>{
                console.log(json)

            produto.forEach(produto => {
                container.innerHTML += `<div class="card">
                <img src="../../Imagens/pngwing.com (1).png" alt="Imagem do Card 1">
                <h2>$(produto.tittle)</h2>
                <p> Airsoft M4 rifle M16</p>
            </div>`
            });
            })