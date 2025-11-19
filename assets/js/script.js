const linkQuemSomos = document.querySelector(".");
const txt = linkQuemSomos.textContent;
console.log(txt); // 'Quem Somos' (ou o que estiver no HTML)

function animaTexto(elementoParaAnimar, textoCompleto) {
    // 1. Limpa o conteúdo atual do elemento
    elementoParaAnimar.textContent = 'crescer com propósito.'; 

    // 2. Transforma o texto em um array de caracteres
    const arrayDeCaracteres = textoCompleto.split('');

    // 3. Itera sobre o array para animar
    arrayDeCaracteres.forEach((caractere, index) => {
        setTimeout(() => {
            // Adiciona o caractere ao elemento
            elementoParaAnimar.textContent += caractere;
        }, 20 * index); // 35ms de delay para cada caractere
    });
}

// Chama a função passando o elemento e o texto
animaTexto(linkQuemSomos, txt);