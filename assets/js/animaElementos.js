// 1. Seleciona todos os elementos no documento que possuem a classe 'hidden'.
const elementosParaAnimar = document.querySelectorAll('.hidden');

// 2. Define a função que o Observer irá chamar
//    sempre que um dos elementos cruzar o limiar de visibilidade.
const observerCallback = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // APENAS remove a classe 'hidden'
      entry.target.classList.remove('hidden');
      
      // Otimização: Para de observar este elemento
      observer.unobserve(entry.target); 
    }
  });
};

// O resto do JS fica o mesmo (criação do observer, options, etc.)

// 3. Configura as opções do Observer
const observerOptions = {
  // O 'root' (raiz) é 'null' por padrão, significando que é a viewport do navegador.
  // 'threshold: 0.1' significa que o callback será chamado quando 10% do elemento
  // estiver visível na tela.
  threshold: 0.1 
};

// 4. Cria a instância do IntersectionObserver
const observer = new IntersectionObserver(observerCallback, observerOptions);

// 5. Inicia a observação: o código percorre a lista de elementos e
//    configura o observer para monitorar cada um deles.
elementosParaAnimar.forEach(element => {
  observer.observe(element);
});