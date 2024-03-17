function executarCadastro() {
    console.log("Olá")
}

function executarListar() {
    console.log("Olá")

}

async function executarCadastrar() {

    const inputTitulo = document.getElementById("title")
    const valorTitulo = inputTitulo.value

    const inputDescricao = document.getElementById("description")
    const valorDescricao = inputDescricao.value

    const divSucesso = document.getElementById("divSucesso")

    const divErro = document.getElementById("divErro")

    const url = "https://api-aula.up.railway.app/livros"
    const body = {
        title: valorTitulo,
        description: valorDescricao
    }

    const retorno = await postEmAPI(url, body)
    console.log(retorno)

    if (valorTitulo === "" || valorDescricao === "") {
        divErro.style.display = "block"
        divSucesso.style.display = "none"
        alert(retorno)
    }
    else {
        divErro.style.display = "none"
        divSucesso.style.display = "block"
        alert(retorno)
    }
}

async function postEmAPI(url, body) {
    const fetchResposta = await fetch(url, {
        method: "POST",
        body: JSON.stringify(body),
        headers: { "Content-Type": "application/json" }
    });
    const respostaEmJSON = await fetchResposta.json();
    return respostaEmJSON;
}

async function mostrarLivros() {

    const url = "https://api-aula.up.railway.app/livros"

    const resposta = await fetch(url)
    const livros = await resposta.json()

    console.log(livros)

    const divMostrarLivros = document.getElementById("divMostrarLivros")

    divMostrarLivros.style.display = "block"

    for (const livro of livros) {
        divMostrarLivros.innerHTML += "Título: " + livro.title + ", Descrição: " + livro.description + "<br>";
    }
}