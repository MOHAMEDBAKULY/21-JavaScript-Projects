const ModalBtn = document.querySelector('.modal-btn')
const Overlay = document.querySelector('.modal-overlay')
const CloseBtn = document.querySelector('.close-btn')

ModalBtn.addEventListener('click', () => {
    Overlay.classList.add('open-modal')
})

CloseBtn.addEventListener('click', () => {
    Overlay.classList.remove('open-modal')
})