const btnCv = document.querySelector('.btn-cv');
const modalMsg = document.querySelector('.modal-msg-ferramenta')
const closeModal = document.querySelector('.close-modal');
const timerContainer = document.querySelector('.timer-container');

btnCv.addEventListener('click', () => {
    modalMsg.showModal(); // Abre o modal nativamente
    
    const progresso = document.querySelector('.timer-progress');
    progresso.classList.add('animar-timer'); // Dispara a barra de progresso

    // Desafio: Como fechar após 5 segundos?
    setTimeout(() => {
        modalMsg.close(); // Método nativo para fechar <dialog>
        progresso.classList.remove('animar-timer'); // Reseta para a próxima vez
    }, 5000); // 5000ms = 5 segundos
});

closeModal.addEventListener('click', () => {
    modalMsg.close()
})