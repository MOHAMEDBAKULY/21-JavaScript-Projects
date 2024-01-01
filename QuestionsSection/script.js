// Using selectors inside the element
const question = document.querySelectorAll('.questions')

question.forEach((Quiz) => {
    const Btn = Quiz.querySelector('.question-btn')
    
    Btn.addEventListener('click', () => {
        
        question.forEach((Item) => {
            if(Item !== Quiz){
                Item.classList.remove('show-text')
            }
        });
        
        Quiz.classList.toggle('show-text')
    });
})


// Traversing the dom// 
// const Buttons = document.querySelectorAll('.question-btn')
// Buttons.forEach((btn) => {

//     btn.addEventListener('click', (e) => {
//         const Question = e.currentTarget.parentElement.parentElement;
//         Question.classList.toggle('show-text')
//     })
// })

