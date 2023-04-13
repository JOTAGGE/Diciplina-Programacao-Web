const inputItem = document.getElementById("inputItem");
const inputQuantidade = document.getElementById("inputQuantidade");
const inputPreco = document.getElementById("inputPreco");

const btAdicionar = document.getElementById("btAdicionar");
const btLimpar = document.getElementById("btLimpar");

const lista = document.getElementById("lista");

let listaItems = [];

const redesenhaLista = (lista, listaItems) => {

  lista.innerHTML = "";

  for (let index = 0; index < listaItems.length; ++index) {
    
    const itemText = document.createTextNode(listaItems[index]);
    const listItem = document.createElement("table");

    listItem.appendChild(itemText);
    lista.appendChild(listItem);
    
  }
};

const handleBtAdicionarClick = () => {
  const item = inputItem.value;
  if (!item) {
    alert("Necessário digitar um item!");
    return;
  }
  const quantidade = inputQuantidade.value;
  if (!quantidade) {
    alert("Necessário digitar uma quantidade");
    return;
  }
  const preco = inputPreco.value;
  if (!preco) {
    alert("Necessário digitar um preço");
    return;
  }
  listaItems.push("ITEM: " + item +  "         |   QUANTIDADE: " + quantidade + "          |     VALOR: R$ " + preco + ",00" );
  

  inputItem.value = "";
  inputItem.focus();

  inputQuantidade.value = "";
  inputQuantidade.focus();
  
  inputPreco.value = "";
  inputPreco.focus();

  redesenhaLista(lista, listaItems);
};

const handleBtLimparClick = () => {
  listaItems = [];
  lista.innerHTML = "";
  inputItem.focus();
  inputQuantidade.focus();
  inputPreco.focus();
};

btAdicionar.onclick = handleBtAdicionarClick;
btLimpar.onclick = handleBtLimparClick;