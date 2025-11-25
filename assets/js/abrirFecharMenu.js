const menuAberto = document.querySelector(".menu-tablet")
const btnAbrir = document.querySelector(".bntAbrir")
const btnFechar = document.querySelector(".btnFechar")

/* console.log("Menu Aberto:" + menuAberto + "\nbtnAbrir: " + btnAbrir + "\nbtnFechar: " + btnFechar); */

btnAbrir.addEventListener("click", (event) => {
    event.preventDefault()
    menuAberto.classList.remove("displayNone"); // Abre o modal
    btnAbrir.classList.add("displayNone")
    btnFechar.classList.remove("displayNone")
})

btnFechar.addEventListener("click", (evento) => {
    evento.preventDefault()
    menuAberto.classList.add("displayNone")
    btnFechar.classList.add("displayNone")
    btnAbrir.classList.remove("displayNone")
})

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
        btnFechar.classList.add("displayNone"); 
        btnAbrir.classList.remove("displayNone");
        
        // Se você não está usando "displayBlock" em lugar nenhum, pode remover esta linha:
        // menuAberto.classList.remove("displayBlock");
    }
})