   const opcoes = document.querySelectorAll(".opcoes-container");

        opcoes.forEach((e) => {
            e.addEventListener("click", () => {
                // 1. Primeiro, removemos a classe "ativo" de TODOS
                opcoes.forEach(card => card.classList.remove("ativo"));
                console.log(e);

                // 2. Depois, adicionamos apenas no que foi clicado
                e.classList.add("ativo");

                // Dica: Aqui você também deve marcar o input radio como checked via JS!
                // Dentro do seu addEventListener:
                const radio = e.querySelector('input[type="radio"]');
                if (radio) {
                    radio.checked = true;
                }
            });
        });