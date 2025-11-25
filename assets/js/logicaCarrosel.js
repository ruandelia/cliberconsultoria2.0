// 1. Seleção dos Elementos (Não mudou)
const carroselDesktop = document.querySelector('#carouselExampleDesktop');
const carroselTablet = document.querySelector('#carouselExampleTablet');
const carroselMobile = document.querySelector('#carouselExampleMobile');

// 2. Função Auxiliar: Debounce (Não mudou)
function debounce(func, delay = 300) {
    let timeout;
    
    return function() {
        const context = this;
        const args = arguments; 

        // Limpa o temporizador anterior
        clearTimeout(timeout);

        // Configura um novo temporizador
        timeout = setTimeout(() => {
            func.apply(context, args);
        }, delay);
    };
}

// 3. Função Principal: Lógica de Adaptação (ajustarCarrosseis)
// Esta função é o que realmente faz a troca dos carrosséis
function ajustarCarrosseis() {
    const larguraPG = window.innerWidth; 

    // Oculta todos os carrosséis
    carroselDesktop.classList.add("displayNone");
    carroselTablet.classList.add("displayNone");
    carroselMobile.classList.add("displayNone");

    // Lógica para decidir qual carrossel exibir
    if (larguraPG >= 1440) {
        carroselDesktop.classList.remove("displayNone");
    } else if (larguraPG >= 1024) {
        carroselTablet.classList.remove("displayNone");
    } else {
        carroselMobile.classList.remove("displayNone");
    }
}

// 4. Inicialização e Listener (A parte mais importante)

// A) Executa na carga (imediato)
ajustarCarrosseis(); 

// B) Listener de Resize:
// O Debounce garante que a função só será executada 300ms depois
// que o usuário PARAR de redimensionar, o que é o comportamento esperado
// para OTIMIZAÇÃO de performance.
window.addEventListener('resize', debounce(ajustarCarrosseis, 300));

// Se você realmente quer que o slide mude no MEIO do redimensionamento,
// você precisaria remover o debounce:
/*
// Opção Sem Debounce (Não recomendado para performance):
window.addEventListener('resize', ajustarCarrosseis);
*/