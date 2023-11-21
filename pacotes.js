function calcularCusto(precoId, destinationId, stayDurationId, numPeopleId, accommodationId) {

    const destination = document.getElementById(destinationId).value;
    const stayDuration = parseInt(document.getElementById(stayDurationId).value);
    const numPeople = parseInt(document.getElementById(numPeopleId).value);
    const accommodation = document.getElementById(accommodationId).value;

    // Mapeamento de destinos para preços base
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

    // Atualiza o elemento HTML com o resultado
    document.getElementById(precoId).textContent = `Custo Total: $${custoTotal}`;
}


logoutButton.addEventListener('click', function() {
    // Logout (limpa os dados de autenticação)

    document.cookie = 'loggedIn=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';

    // Redireciona para a página de login após o logout.
    window.location.href = 'login.html';
});