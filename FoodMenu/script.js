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
    }
]

const SectionCenter = document.querySelector('.section-center')

window.addEventListener('DOMContentLoaded', () => {
    let displayMenu = menu.map( (Item) => {
        // console.log(Item)

        return ` 
         <article class="Menu-item">
        <img src=${Item.img} class="Photo"  alt=${Item.title}>
        <div class="item-info">
            <header>
                <h4>${Item.title}</h4>
                <h4 class="price">${Item.price}KES</h4>
            </header>
            <p class="item-text"> ${Item.description} </p>
        </div>
    </article>`
    });
    displayMenu = displayMenu.join(' ')
    SectionCenter.innerHTML = displayMenu
})