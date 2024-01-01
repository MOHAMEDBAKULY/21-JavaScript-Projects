const ToggleBtn = document.querySelector('.side-bar')
const CloseToggle = document.querySelector('.close-toggle')
const sideNavBar = document.querySelector('.side-navBar')

ToggleBtn.addEventListener('click', () => {
    sideNavBar.classList.toggle('show-sidebar')
})

CloseToggle.addEventListener('click', () => {
    sideNavBar.classList.remove('show-sidebar')
})











// if(sideNavBar.classList.contains('show-sidebar')){
//     sideNavBar.classList.remove('show-sidebar')
// } else{
//     sideNavBar.classList.add('show-sidebar')
// }