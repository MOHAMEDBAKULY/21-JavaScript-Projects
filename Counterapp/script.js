let counting = 0;

const buttons = document.querySelectorAll('.one');
const number = document.querySelector('#count');

buttons.forEach((btn) => {
   btn.addEventListener('click', (e) => {
     const styles = e.currentTarget.classList;

     if (styles.contains('add')){
        counting++;
     } 
     else if (styles.contains('subtract')) {
        counting--;
     }
     else {
        counting = 0;
     }

     if(counting > 0) {
        number.style.color = 'green'
     }
      if ( counting < 0) {
       number.style.color = 'red'
     }
      if (counting === 0) {
        number.style.color = 'orange'
     }

     number.textContent = counting;
   })
})