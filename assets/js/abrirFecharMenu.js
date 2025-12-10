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
    // 1. O clique não pode ser nos botões de abrir/fechar.
    const isBotao = btnAbrir.contains(event.target) || btnFechar.contains(event.target);

    // CORREÇÃO: Verifica se o menu está aberto olhando para a classe CORRETA ("displayBlock")
    const estaAberto = menuAberto.classList.contains("displayBlock"); 

    // 3. Verifica se o clique foi fora da área do menu
    const cliqueFora = !menuAberto.contains(event.target); 

    // Se estiver aberto E clicou fora E não foi em um dos botões, ele fecha.
    if(estaAberto && cliqueFora && !isBotao){
        
        // Ação 1: Remove a classe para iniciar a animação de FECHAMENTO (desliza para fora)
        menuAberto.classList.remove("displayBlock");
        
        // Ação 2: Usa setTimeout para adicionar o 'display: none' APÓS A ANIMAÇÃO (1s)
        // Isso remove o elemento do layout e resolve o problema de rolagem horizontal
        setTimeout(() => {
            menuAberto.style.display = 'none';
        }, 1000); // <-- 1000ms deve ser igual à sua transição CSS (1s)

        // Ações de botão
        btnFechar.classList.add("displayNone"); 
        btnAbrir.classList.remove("displayNone");
    }
});