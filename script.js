let listPainting = [
    {
        categoria: 'Paintings',
        imagem: './assets/img/painting/clock.jpg',
        nome: 'Relógio',
        preco: 'R$ 25.00'
    },
    {
        categoria: 'Paintings',
        imagem: './assets/img/painting/gamepad.jpg',
        nome: 'Controle de PS4',
        preco: 'R$ 10.00'
    },
    {
        categoria: 'Paintings',
        imagem: './assets/img/painting/personagem.jpg',
        nome: 'C3PO',
        preco: 'R$ 20.00'
    }
    
]

let listActionFigure = [
    {
        categoria: 'Action Figure',
        imagem: './assets/img/actions/animewoman.jpg',
        nome: 'Animewoman',
        preco: 'R$ 50.00'
    },
    {
        categoria: 'Action Figure',
        imagem: './assets/img/actions/dragonballpersonagem.jpg',
        nome: 'Boneco Goku',
        preco: 'R$ 70.00'
    },
    {
        categoria: 'Action Figure',
        imagem: './assets/img/actions/starwarspersonagem.jpg',
        nome: 'Boneco Yoda',
        preco: 'R$ 100.00'
    }
]


function createActionItem(categoria, imagem, nome, preco){
    if(categoria == 'Action Figure'){
        let objeto = {
            categoria: categoria,
            imagem: imagem,
            nome: nome,
            preco: preco
        }
        listActionFigure.push(objeto)

        return objeto
    }
}
createActionItem()
// console.log(listActionFigure)

function createPaintingIem(categoria, imagem, nome, preco){
    if(categoria == 'Paintings'){
        let objeto = {
            categoria: categoria,
            imagem: imagem,
            nome: nome,
            preco: preco
        }
        listPainting.push(objeto)

        return objeto
    }
}
createPaintingIem()
// console.log(listPainting)

let secaoListPainting = document.getElementsByClassName('paint')

let secaoListFigure = document.getElementsByClassName('action')

// console.log(secaoListFigure)

for(let i = 0; i < listPainting.length; i++){

    let elementoLista = document.createElement('li')
    let imagem = document.createElement('img')
    let nome = document.createElement('p')
    let preco = document.createElement('span')

    imagem.src = listPainting[i].imagem
    nome.innerText = listPainting[i].nome
    preco.innerText = listPainting[i].preco

    elementoLista.append(imagem, nome, preco)

    secaoListPainting[0].appendChild(elementoLista)
}



for(let i = 0; i < listActionFigure.length; i++){
  
    let elementoLista = document.createElement('li')
    let imagem = document.createElement('img')
    let nome = document.createElement('p')
    let preco = document.createElement('span')
    // console.log(elementoLista)

    imagem.src = listActionFigure[i].imagem
    nome.innerText = listActionFigure[i].nome
    preco.innerText = listActionFigure[i].preco

    elementoLista.append(imagem, nome, preco)

    secaoListFigure[0].appendChild(elementoLista)
}