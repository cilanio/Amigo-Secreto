//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Array para armazenar os amigos
let amigos = [];

// Função para adicionar amigos
function adicionarAmigo() {
    // Captura o valor do campo de entrada
    const amigoInput = document.getElementById('amigo');
    const nome = amigoInput.value.trim();  // Remove espaços extras

    // Validação para garantir que o campo não esteja vazio
    if (nome === '') {
        alert('Por favor, insira um nome.');  // Exibe um alerta se o campo estiver vazio
        return;  // Interrompe a execução da função se o nome for vazio
    }

    // Atualiza o array de amigos
    amigos.push(nome);

    // Limpa o campo de entrada
    amigoInput.value = '';

    // Atualiza a lista exibida na página
    renderizarLista();
}

// Função para renderizar a lista de amigos
function renderizarLista() {
    // Captura o elemento da lista onde os nomes serão exibidos
    const listaAmigos = document.getElementById('listaAmigos');
    
    // Limpa a lista antes de atualizar
    listaAmigos.innerHTML = '';

    // Adiciona cada amigo à lista
    amigos.forEach(amigo => {
        const listItem = document.createElement('li');
        listItem.textContent = amigo;  // Insere o nome do amigo na lista
        listaAmigos.appendChild(listItem);  // Adiciona o item na lista HTML
    });
}

// Função para renderizar a lista de amigos
function renderizarLista() {
    // Obtém o elemento da lista onde os amigos serão exibidos
    const listaAmigos = document.getElementById('listaAmigos');
    
    // Limpa a lista existente
    listaAmigos.innerHTML = '';

    // Percorre o array de amigos e cria um <li> para cada nome
    for (let i = 0; i < amigos.length; i++) {
        const amigo = amigos[i]; // Obtém o nome do amigo na posição 'i'
        
        // Cria um novo elemento <li>
        const listItem = document.createElement('li');
        
        // Define o texto do item de lista como o nome do amigo
        listItem.textContent = amigo;
        
        // Adiciona o item à lista na página
        listaAmigos.appendChild(listItem);
    }
}

// Função para sortear um amigo aleatoriamente
function sortearAmigo() {
    // Verifica se há amigos na lista
    if (amigos.length === 0) {
        alert('Não há amigos para sortear. Adicione ao menos um amigo!');
        return;  // Interrompe a execução se o array estiver vazio
    }

    // Gera um índice aleatório entre 0 e o tamanho do array menos 1
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtém o nome do amigo sorteado usando o índice aleatório
    const amigoSorteado = amigos[indiceAleatorio];

    // Atualiza o conteúdo do elemento de resultado para exibir o amigo sorteado
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `O amigo secreto sorteado é: <strong>${amigoSorteado}</strong>`;
}

