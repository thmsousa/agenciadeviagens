// verificação de autenticação.
const verificarAutenticacao = localStorage.getItem('verificarAutenticacao');

if (!verificarAutenticacao) {
    // Se não estiver autenticado, redirecionar para a página de login/cadastro.
    window.location.href = 'register.html';
    alert('Você precisa estar logado para acessar esse conteúdo.');
}

// Função para calcular o custo da viagem.
function calcularCusto(precoId, destinationId, stayDurationId, numPeopleId, accommodationId) {

    const destination = document.getElementById(destinationId).value;
    const stayDuration = parseInt(document.getElementById(stayDurationId).value);
    const numPeople = parseInt(document.getElementById(numPeopleId).value);
    const accommodation = document.getElementById(accommodationId).value;

    // Valores base dos destinos.
    const precosBase = {
        paris: 1500,
        newyork: 1300,
        atenas: 1250,
        bangkok: 1350,
        berlin: 1220,
        cairo: 1280,
        london: 1200,
        roma: 1180,
        shanghai: 1420,
        tokyo: 1370,
        dubai: 2000,
        cusco: 1445,
    };

    // Lógica de cálculo do preço base
    let precoBase = precosBase[destination] || 0;

    // Lógica de cálculo do custo total com base no tipo de acomodação
    if (accommodation === "hotel") {
        precoBase += 500;
    } else if (accommodation === "apartment") {
        precoBase += 900;
    }
    // o preco da acomodação é adicionada ao preço base do destino. Ou seja, precoBase = precoBase + acomdação, então a partir desse valor calcula-se o custo total. 

    // Cálculo do custo total
    const custoTotal = precoBase * stayDuration * numPeople;

    // Atualiza a página com o custo final.
    document.getElementById(precoId).textContent = `Custo Total: $${custoTotal}`;
}

// Remoção/Limpeza para os dados de login. (logout)
const logoutButton = document.getElementById('logoutButton');

logoutButton.addEventListener('click', function() {
    localStorage.removeItem('verificarAutenticacao'); // Remove a informação de autenticação.
    localStorage.removeItem('usuarioDados'); // Remove os dados de registro.

    window.location.href = 'login.html'; // Redireciona para a página de login após o logout.
});