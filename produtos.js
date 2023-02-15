const inputProduto = document.querySelector('#addproduto')
const btn = document.querySelector('button')
const produtoUl = document.querySelector('.produto-ul')

const criarLi = () =>{
    const li = document.createElement('li')
    return li;
}

const btnDel = (li) =>{
    li.innerText += " "
    const btnDel = document.createElement('button')
    btnDel.innerText = 'del'
    btnDel.setAttribute('class', 'deletar')
    
    li.appendChild(btnDel)
}

const criarProduto = (textoInput)=> {
    const li = criarLi()
    li.innerText = textoInput;
    produtoUl.appendChild(li)
    btnDel(li)
}

btn.addEventListener('click', () =>{
    if(!inputProduto.value) return
    inputProduto.value.Tou
    criarProduto(inputProduto.value)
    salvarLi()
})

document.addEventListener('click', (e) =>{
    const search = e.target

    if(search.classList.contains('deletar')){
       search.parentElement.remove()
    }
})

const salvarLi = () =>{
    const produtosLi = produtoUl.querySelectorAll('li')
    const listaProdutos = []

    for(let produtos of produtosLi){
        let produtosTexto = produtos.innerText;
        produtosTexto = produtosTexto.replace('del',' ').trim()
        listaProdutos.push(produtosTexto)
        console.log(listaProdutos)
    }
    const produtosJSON = JSON.stringify(listaProdutos);
    localStorage.setItem('Produto', produtosJSON)

}

const salvarLiback = () =>{
    const produtos = localStorage.getItem('Produto')
    const listaProdutos = JSON.parse(produtos)

    for(let produto of listaProdutos){
        criarProduto(produto)
        console.log(produto)
    }
}

salvarLiback()
