const btnConverse = document.querySelector(".btn-converse");
const textoEscondido = document.querySelector(".texto-escondido");
// Selecionando a imagem da seta
const animaBtn = document.querySelector(".anima-btn"); 

btnConverse.addEventListener("click", (e) => {
    e.preventDefault();
    
    // Liga/Desliga o texto
    textoEscondido.classList.toggle("ativo");
    
    // Liga/Desliga a rotação da seta
    animaBtn.classList.toggle("ativado");
});

document.addEventListener("click", (e) => {
    const clicouForaDoBotao = !btnConverse.contains(e.target);
    const clicouForaDoTexto = !textoEscondido.contains(e.target);

    if (clicouForaDoBotao && clicouForaDoTexto) {
        textoEscondido.classList.remove("ativo");
        // Se fechar clicando fora, a seta também deve voltar ao normal
        animaBtn.classList.remove("ativado");
    }
});