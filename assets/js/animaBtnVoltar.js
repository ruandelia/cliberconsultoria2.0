const btnVoltar = document.querySelector(".btn-voltar");
        // Se você está usando o <a>, o link é o próprio btnVoltar
        const urlDestino = btnVoltar.getAttribute("href"); // Pega o valor de "home.html"
        const limitador = document.querySelector(".limitador-btn-voltar");
        const duracaoAnimacao = 200; // Defina aqui a duração da sua animação em milissegundos (ex: 500ms)

        btnVoltar.addEventListener("click", (e) => {
            e.preventDefault(); // 1. IMPEDE a navegação imediata

            limitador.classList.add("is-active"); // 2. INICIA a animação no CSS

            // 3. AGUARDA a duração da animação
            setTimeout(() => {
                // 4. FORÇA a navegação APÓS a animação terminar
                window.location.href = urlDestino;
            }, duracaoAnimacao);

        });