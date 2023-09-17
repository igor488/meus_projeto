// Inicializa uma lista vazia para armazenar os objetos

var lista = []

/**vamos abrir o while para o usuario poder fazer sua escolha */

while(true){
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
        alert("passou")
    
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
          
        var objeto ={
            nome:"",
            marca:"",
            preco:"",
        }

  // Solicita ao usuário que insira valores para as propriedades do objeto
        objeto.nome = prompt("nome");
        objeto.marca = prompt("marca");
        objeto.preco = prompt("preço");

         // Adiciona o objeto preenchido à lista
        lista.push(objeto);

     }
}


/**Função para visualizar os objetos 
 * na lista pela funçao "adcionar"*/
     function ver () {
    var texto = ""

        // Percorre a lista de objetos e formata as informações em uma string
    for(let i = 0; i < lista.length; i++) {
        texto += `nome ${lista[i].nome} - marca: ${lista[i].marca} - preço ${lista[i].preco} \n `
}

   // Exibe um alerta com as informações dos objetos
alert(texto)
     }

