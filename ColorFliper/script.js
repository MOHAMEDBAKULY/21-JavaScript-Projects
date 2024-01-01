const colors = ['blue', '#B37a23', rgba(234, 67, 89), 'Yellow', 'Green']

const Btn = document.querySelector('#btn');
const random = document.querySelector('.random');

Btn.addEventListener('click', () => {
    const randomNumber = getRandomNumber()
    document.body.style.backgroundColor = colors[randomNumber]
    random.textContent = colors[randomNumber]
});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length)
}