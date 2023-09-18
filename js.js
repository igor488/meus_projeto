// Inicializa uma lista vazia para armazenar os objetos

var lista = []

/**vamos abrir o while para o usuario poder fazer sua escolha */

while (true) {
    var opcao = prompt(`
    bem vindo ao cadastro de produto :)
           o que o senhor deseja 

    1- cadastrar novo produuto
    2- editar produto
    3- remover produto
    4- visualizar todos os produtos
    `)
    /**o if sera usado para o usuario escolher qual opçao ele quer usar  */
    if (opcao == 1) {
        adcionar()

        // adcionar produto

    } else if (opcao == 2) {
        editar()

        //editar produto

    } else if (opcao == 3) {
        alert("passou")

        //remover produto

    } else if (opcao == 4) {
        ver()

        // ver quais produtos estao disponiveis

    } else {
        alert("vc nao selecionou nenhum dos meus item")
    }

    // Função para adicionar um objeto à lista
    function adcionar() {

        // Cria um objeto vazio com propriedades nome, marca e preço

        var objeto = {
            nome: "",
            marca: "",
            preco: "",
        }

        // Solicita ao usuário que insira valores para as propriedades do objeto
        objeto.nome = prompt("nome");
        objeto.marca = prompt("marca");
        objeto.preco = prompt("preço");

        // Adiciona o objeto preenchido à lista
        lista.push(objeto);

    }
}

//abrimos a 2 funçao para adcionar produto

function editar() {
    // Verifica se a lista está vazia

    if (lista.length === 0) {
        alert("não a nada na lista.")
        return; // Sair da função
    }

    // Exibe a lista de produtos para o usuário escolher qual editar
    var listaProdutos = "produtos para ediçao\n";

    /**vamos usar o loop para a lista
     * 
     * Ó laço i for menor que o tamanho da lista (`lista.lengthlista.length), 
     * garantindo que todos os produtos sejam processados.
     * 
     *  "|" é usado para melhorar a legibilidade e a formatação de informações 
     * ao criar uma representação textual com várias partes distintas.
     * 
     * listaProdutos += i + 1é usado para numerar os produtos na lista,
     *  adicionando "i + 1" à variável listaProdutos, onde ié o índice atual do loop. 
     * Isso permite que os produtos sejam organizados com números sequenciais (1, 2, 3, ...)
     *  ao invés de começarem em 0.
      */
     
    for (let i = 0; i < lista.length; i++) {
        listaProdutos += i + 1 + "- Nome: " + lista[i].nome + " | Marca: " + lista[i].marca + " | Preço: " + lista[i].preco + "\n";
    }

    var edit = prompt(listaProdutos + "Digite o número do produto que quer editar:");

    /**  Verifica se o edit é válido 
     * 
     * É usado para combinar duas ou 
     * mais condições lógicas e verdadeiro retorna (true)
     *  se pelo menos uma das condições for verdadeira.
    */

    if ( edit < 1 || edit > lista.length) {
        alert(" esse peoduto nao tem");
        return; // Sai da função
    }

    // Solicita ao usuário os novos valores para o produto
    var novoNome = prompt("Digite o novo nome do produto:");
    var novaMarca = prompt("Digite a nova marca do produto:");
    var novoPreco = prompt("Digite o novo preço do produto:");

    // Atualiza as informações do produto escolhido
    lista[edit - 1].nome = novoNome;
    lista[edit - 1].marca = novaMarca;
    lista[edit - 1].preco = novoPreco;

    alert("Produto editado com sucesso!");
}




/**Função para visualizar os objetos 
 * na lista pela funçao "adcionar"*/
function ver() {
    var texto = ""

    // Percorre a lista de objetos e formata as informações em uma string
    for (let i = 0; i < lista.length; i++) {
        texto += `nome: ${lista[i].nome} - marca: ${lista[i].marca} - preço ${lista[i].preco} \n `
    }

    // Exibe um alerta com as informações dos objetos
    alert(texto)
}