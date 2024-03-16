function executarCadastro() {
    console.log("Olá")
}

function executarListar() {
    console.log("Olá")

}

function executarCadastrar() {

    const inputTitulo = document.getElementById("title")
    const valorTitulo = inputTitulo.value

    const inputDescricao = document.getElementById("description")
    const valorDescricao = inputDescricao.value

    const divSucesso = document.getElementById("divSucesso")

    const divErro = document.getElementById("divErro")

    if (valorTitulo === "" || valorDescricao === "") {
        divErro.style.display = "block"
    }
    else {
        divSucesso.style.display = "block"
    }

    console.log("Título:", valorTitulo);
    console.log("Descrição:", valorDescricao);

}

