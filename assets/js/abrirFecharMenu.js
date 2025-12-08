const menuAberto = document.querySelector(".menu-tablet")
const btnAbrir = document.querySelector(".bntAbrir")
const btnFechar = document.querySelector(".btnFechar")

/* console.log("Menu Aberto:" + menuAberto + "\nbtnAbrir: " + btnAbrir + "\nbtnFechar: " + btnFechar); */

btnAbrir.addEventListener("click", (event) => {
    event.preventDefault();
    // Ação principal: Adicionar a classe que dispara a animação (translateX(0))
    menuAberto.classList.add("displayBlock"); 
    
    // Ações do botão: Esconde o botão de Abrir e mostra o de Fechar
    btnAbrir.classList.add("displayNone");
    btnFechar.classList.remove("displayNone");
});

btnFechar.addEventListener("click", (evento) => {
    evento.preventDefault();
    // Ação principal: Remover a classe que dispara a animação (ele volta para translateX(100%))
    menuAberto.classList.remove("displayBlock");
    
    // Ações do botão: Esconde o botão de Fechar e mostra o de Abrir
    btnFechar.classList.add("displayNone");
    btnAbrir.classList.remove("displayNone");
});

document.addEventListener("click", (event) => {
    // 1. O clique não pode ser nos botões de abrir/fechar,
    //    pois eles já têm seus próprios eventos para funcionar.
    const isBotao = btnAbrir.contains(event.target) || btnFechar.contains(event.target);

    // 2. Verifica se o menu está atualmente aberto (ou seja, NÃO tem a classe "displayNone")
    const estaAberto = !menuAberto.classList.contains("displayNone"); 

    // 3. Verifica se o clique foi fora da área do menu (o menu não contém o alvo do clique)
    const cliqueFora = !menuAberto.contains(event.target); 

    // Se estiver aberto E clicou fora E não foi em um dos botões, ele fecha.
    if(estaAberto && cliqueFora && !isBotao){
        // Ações para fechar o menu:
        menuAberto.classList.add("displayNone");
        menuAberto.classList.remove("displayBlock");
        btnFechar.classList.add("displayNone"); 
        btnAbrir.classList.remove("displayNone");
        
        // Se você não está usando "displayBlock" em lugar nenhum, pode remover esta linha:
        // menuAberto.classList.remove("displayBlock");
    }
})