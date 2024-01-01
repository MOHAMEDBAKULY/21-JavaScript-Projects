const reviews = [ 
    {
        id: 1,
        author: 'Lubnah Rahsid',
        job: 'Nurse',
        img: './Rectangle 1.png',
        info: '   The joy of serving patients allows me to be happay at my job and serve the nation everyday'
    },
{
    id: 2,
    author: 'Odhiambo Anwar',
    job: 'Lawyer',
    img: './RORO.png',
    info: '  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium odio voluptate quo eveniet iste! Dignissimos?'
},
{
    id: 3,
    author: 'Omar kahushu',
    job: 'Advocate',
    img: './Rectangle 6.png',
    info: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, sapiente? Laborum doloremque molestiae molestias!'
}

]

//  Getting all DOM elements
const image = document.querySelector('#image-One');
const author = document.querySelector('#Author');
const job = document.querySelector('.job');
const info = document.querySelector('.info');
const rightBtn = document.querySelector('.right')
const leftBtn = document.querySelector('.left')
const randomBtn = document.querySelector('.random')

// Setting starting Item
let currentItem = 0;

// Loading content when opening the website
window.addEventListener("DOMContentLoaded", () => {
      showPerson();
})

// Function for Counting items 
function showPerson() {
    const item = reviews[currentItem];
    image.src = item.img;
    author.textContent = item.author;
    job.textContent = item.job;
    info.textContent = item.info;
}

// Right Button

rightBtn.addEventListener('click', () => {
    currentItem++;
    if(currentItem > reviews.length - 1){
        currentItem = 0
    }
    showPerson()
})

// Left Button 

leftBtn.addEventListener('click', () => {
    currentItem--;
    if(currentItem < 0){
        currentItem = reviews.length - 1;
    }
    showPerson()
})


// Random Button 

randomBtn.addEventListener('click', () => {
    currentItem =  Math.floor(Math.random() * reviews.length)
     showPerson()
})







// button.forEach((btn) => {
    // btn.addEventListener( (e) => {
    // const styles = e.currentTarget.classList;
    // 
    // if (styles.contains('left')){
    //    currentItem++;
    // if(currentItem > reviews.length - 1){
        // currentItem = 0;
    // }
    // showPerson(currentItem);
    // }
    //  
    // if(styles.contains('right')) {
    //    currentItem--;
    // if(currentItem < 0) {
        // currentItem = reviews.length - 1;
    //  }
    // showPerson(currentItem);
    // }
        // 
    // if (styles.contains('random')) {
            // return Math.floor(Math.random() * reviews.length)
    // }
// 
    // })
// })