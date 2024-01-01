// Get all elements 

const toggleBtn = document.querySelector('.Toggle-button')
const link = document.querySelector('.links')


toggleBtn.addEventListener('click', () => {
    link.classList.toggle('show-links')
})



// link.classList.contains('links')
    
// if(link.classList.contains('show-links')){
    // link.classList.remove('show-links')
// }else {
    // link.classList.add('show-links')
// }