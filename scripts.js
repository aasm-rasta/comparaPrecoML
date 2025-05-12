/*
--------LÓGICA DE PROGRAMAÇÃO -------------

[x] Pegar os dados do input, quando o botão for clicado
[] Ir até o servidor na API e trazer os produtos
[] Colocar os produtos na tela
[] Criar o gráfico de preços


*/
// pegando os dados do input
const searchForm = document.querySelector('.search-form')
searchForm.addEventListener('submit', async function(event){
    //evita que após o evento submit não reinicie 
    event.preventDefault()
    const inputValue = event.target[0].value
    const data = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${inputValue}`)
    const products = await data.json
    console.log(products)
})