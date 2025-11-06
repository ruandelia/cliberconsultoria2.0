
const modal = document.querySelector(".modal-login-cadastrar");
const closeBotao = document.querySelector(".close-modal");
const linkLogin = document.querySelector(".link-login");
// Removida: const linkCadastrar = document.querySelector(".link-cadastrar");


// LÓGICA DE ABRIR (Apenas para o botão Login)
linkLogin.addEventListener("click", (event) => {
    event.preventDefault();
    modal.classList.add("displayBlock"); // Abre o modal
});


// LÓGICA DE FECHAR (Botão X)
closeBotao.addEventListener("click", (e) => {
    e.preventDefault();
    modal.classList.remove("displayBlock"); // Fecha o modal
});


// FECHAR AO CLICAR FORA (Lógica ajustada para apenas o linkLogin)
document.addEventListener("click", (e) => {
    const estaAberto = modal.classList.contains("displayBlock");

    // 1. O clique NÃO ocorreu dentro do modal?
    const clicouForaDoModal = !modal.contains(e.target);

    // 2. O clique NÃO foi no botão que ABRE o modal (Login)?
    const clicouNoBotaoAbrir = linkLogin.contains(e.target);

    // Se estiver aberto E clicou fora do modal E não clicou no botão Login
    if (estaAberto && clicouForaDoModal && !clicouNoBotaoAbrir) {
        modal.classList.remove("displayBlock");
    }
});


// NOVO: Fechar ao pressionar a tecla ESC
document.addEventListener("keydown", (e) => {
    // Verifica se o modal está visível
    const estaAberto = modal.classList.contains("displayBlock");

    // Verifica se a tecla pressionada foi a 'Escape' (código 'Escape' ou 'Esc')
    // 'e.key' é mais moderno e legível que 'e.keyCode' ou 'e.which'
    if (estaAberto && e.key === "Escape") {
        modal.classList.remove("displayBlock"); // Fecha o modal
    }
})