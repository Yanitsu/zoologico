// Aguarda até que o DOM esteja completamente carregado
document.addEventListener("DOMContentLoaded", function() {
    // Seleciona o elemento do formulário com o id "form-ingresso" e o armazena na variável 'form'
    const form = document.getElementById("form-ingresso");
    
    // Seleciona o elemento com o id "aviso-compra" (onde o aviso de compra será exibido) e o armazena na variável 'avisoCompra'
    const avisoCompra = document.getElementById("aviso-compra");
    
    // Seleciona o elemento com o id "aviso-texto" (onde o texto do aviso de compra será exibido) e o armazena na variável 'avisoTexto'
    const avisoTexto = document.getElementById("aviso-texto");

    // Adiciona um ouvinte de evento para o formulário, escutando o evento de submissão
    form.addEventListener("submit", function(event) {
        // Evita o comportamento padrão de envio do formulário (evita que a página seja recarregada)
        event.preventDefault();

        // Aguarda 1,5 segundos (1500 milissegundos) antes de executar o conteúdo dentro da função
        setTimeout(function() {
            // Obtém o valor do campo de entrada de data do formulário e armazena-o na variável 'dataSelecionada'
            const dataSelecionada = form.data.value;
            
            // Define o texto do elemento 'avisoTexto' para informar ao usuário que a compra foi concluída, exibindo a data selecionada
            avisoTexto.textContent = `Compra concluída para a data ${dataSelecionada}!`;
            
            // Define o estilo do elemento 'avisoCompra' para torná-lo visível, exibindo o aviso de compra concluída
            avisoCompra.style.display = "block";
        }, 500); // Simula um tempo de espera de 1,5 segundos antes de executar o conteúdo da função
    });
});

