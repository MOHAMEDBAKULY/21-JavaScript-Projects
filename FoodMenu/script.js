const menu = [
    {
        id:1,
        title: "Matobosha",
        category: "Breakfast",
        price: 300,
        img: "./code.png",
        description: `Lorem ipsum dolor, sit amet consectetur 
        adipisicing elit. Itaque architecto 
        quidem quae expedita, cumque officia!`
    },
    {
        id:2,
        title: "Chapati Borohowa",
        category: "Breakfast",
        price: 100,
        img: "./code.png",
        description: `Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Itaque architecto 
        quidem quae expedita, cumque officia!`
    },
    {
        id:3,
        title: "Ugali Matumbo",
        category: "Lunch",
        price: 220,
        img: "./code.png",
        description: `Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Itaque architecto 
        quidem quae expedita, cumque officia!`
    },
    {
        id:4,
        title: "Wali Mchuzi wa kuku",
        category: "Lunch",
        price: 210,
        img: "./code.png",
        description: `Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Itaque architecto 
        quidem quae expedita, cumque officia!`
    },
    {
        id:5,
        title: "Matobosha",
        category: "Breakfast",
        price: 300,
        img: "./code.png",
        description: `Lorem ipsum dolor, sit am
        adipisicing elit. Itaque architecto 
        quidem quae expedita, cumque officia!`
    },
    {
        id:6,
        title: "Chapati Borohowa",
        category: "Breakfast",
        price: 100,
        img: "./code.png",
        description: `Lorem ipsum dolor, sit am
        adipisicing elit. Itaque architecto 
        quidem quae expedita, cumque officia!`
    },
    {
        id:7,
        title: "Ugali Matumbo",
        category: "Lunch",
        price: 220,
        img: "./code.png",
        description: `Lorem ipsum dolor, sit am
        adipisicing elit. Itaque architecto 
        quidem quae expedita, cumque officia!`
    },
    {
        id:8,
        title: "Wali Mchuzi wa kuku",
        category: "Lunch",
        price: 210,
        img: "./code.png",
        description: `Lorem ipsum dolor, sit am
        adipisicing elit. Itaque architecto 
        quidem quae expedita, cumque officia!`
    },
    {
        id:9,
        title: "Milk shake",
        category: "Shakes",
        price: 230,
        img: "./code.png",
        description: `Lorem ipsum dolor, sit am
        adipisicing elit. Itaque architecto 
        quidem quae expedita, cumque officia!`
    },
    {
        id:10,
        title: "Kahawa",
        category: "Shakes",
        price: 510,
        img: "./code.png",
        description: `Lorem ipsum dolor, sit am
        adipisicing elit. Itaque architecto 
        quidem quae expedita, cumque officia!`
    }
]

// Get all Elements from the DOM
const SectionCenter = document.querySelector('.section-center');
const fitlterBtn = document.querySelectorAll('.filter-btn');
const btnConatiner = document.querySelector('.btn-container')

// LOAD ITEMS
window.addEventListener('DOMContentLoaded', () => {
   displayMenuItems(menu)
   
//    const categories = menu.map((item) => {
//        return item.category
//     })
//     console.log(categories)


   const categories = menu.reduce((curr, acc) => {
     if(!curr.includes(acc.category)){
        curr.push(acc.category)
     }
    return curr;
   },
   ['all']
);


   const categoryBtns = categories.map((category) => {
       return ` <!-- <button 
        type="button"
        class="filter-btn" data-id="${category}">
        ${category}
        </button> --> `
   }).join('');
   btnConatiner.innerHTML = categoryBtns;
});



const displayMenuItems = (menuItems) => {
    let displayMenu = menuItems.map( (Item) => {
        // console.log(Item)

        return `<article class="Menu-item">
        <img src=${Item.img} class="photo"  alt=${Item.title}>
        <div class="item-info">
            <header>
                <h4>${Item.title}</h4>
                <h4 class="price">${Item.price}KES</h4>
            </header>
            <p class="item-text"> 
            ${Item.description} 
            </p>
        </div>
    </article>`
    });
    displayMenu = displayMenu.join('');
    
    SectionCenter.innerHTML = displayMenu;
}

// FILTER BUTTONS

fitlterBtn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
    const category = e.currentTarget.dataset.id;
    const menuCategory = menu.filter((menuItem) => {
            
        if(menuItem.category === category){
            return menuItem;
        }
    });
       if(category === 'all'){
          displayMenuItems(menu)
       }
       else {
        displayMenuItems(menuCategory)
       }
    });
})

