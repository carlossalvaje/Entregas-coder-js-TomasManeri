const products = [

    {
        id: "RareSneaker-01",
        title: "Rare Sneaker 01",
        image: "./img/rare-sneakers-01.jpg",
        category: {
            name: "Rare Sneaker",
            id: "RareSneaker"
        },
        price: 400
    },

    {
        id: "RareSneaker-02",
        title: "Rare Sneaker 02",
        image: "./img/rare-sneakers-02.jpg",
        category: {
            name: "Rare Sneaker",
            id: "RareSneaker"
        },
        price: 480
    },

    {
        id: "RareSneaker-03",
        title: "Rare Sneaker 03",
        image: "./img/rare-sneakers-04.jpg",
        category: {
            name: "Rare Sneaker",
            id: "RareSneaker"
        },
        price: 380
    },

    {
        id: "RareSneaker-04",
        title: "Rare Sneaker 04",
        image: "./img/rare-sneakers-04.jpg",
        category: {
            name: "Rare Sneaker",
            id: "RareSneaker"
        },
        price: 185
    },

    {
        id: "RareSneaker-05",
        title: "Rare Sneaker 05",
        image: "./img/rare-sneakers-05.jpg",
        category: {
            name: "Rare Sneaker",
            id: "RareSneaker"
        },
        price: 200
    },

    {
        id: "sporty-sneaker-01",
        title: "Sporty Sneaker 01",
        image: "./img/sporty-sneakers-01.jpg",
        category: {
            name: "Sporty Sneaker",
            id: "SportySneaker"
        },
        price: 700
    },

    {
        id: "sporty-sneaker-02",
        title: "Sporty Sneaker 02",
        image: "./img/sporty-sneakers-02.jpg",
        category: {
            name: "Sporty Sneaker",
            id: "SportySneaker"
        },
        price: 350
    },

    {
        id: "sporty-sneaker-03",
        title: "Sporty Sneaker 03",
        image: "./img/sporty-sneakers-03.jpg",
        category: {
            name: "Sporty Sneaker",
            id: "SportySneaker"
        },
        price: 175
    },

    {
        id: "sporty-sneaker-04",
        title: "Sporty Sneaker 04",
        image: "./img/sporty-sneakers-04.jpg",
        category: {
            name: "Sporty Sneaker",
            id: "SportySneaker"
        },
        price: 500
    },

    {
        id: "sporty-sneaker-05",
        title: "Sporty Sneaker 05",
        image: "./img/sporty-sneakers-05.jpg",
        category: {
            name: "Sporty Sneaker",
            id: "SportySneaker"
        },
        price: 280
    },

    {
        id: "urban-sneaker-01",
        title: "Urban Sneaker 01",
        image: "./img/urban-style-sneakers-01.jpg",
        category: {
            name: "Urban Sneaker",
            id: "UrbanSneaker"
        },
        price: 650
    },

    {
        id: "urban-sneaker-02",
        title: "Urban Sneaker 02",
        image: "./img/urban-style-sneakers-02.jpg",
        category: {
            name: "Urban Sneaker",
            id: "UrbanSneaker"
        },
        price: 780
    },

    {
        id: "urban-sneaker-03",
        title: "Urban Sneaker 03",
        image: "./img/urban-style-sneakers-03.jpg",
        category: {
            name: "Urban Sneaker",
            id: "UrbanSneaker"
        },
        price: 360
    },

    {
        id: "urban-sneaker-04",
        title: "Urban Sneaker 04",
        image: "./img/urban-style-sneakers-04.jpg",
        category: {
            name: "Urban Sneaker",
            id: "UrbanSneaker"
        },
        price: 220
    },

    {
        id: "urban-sneaker-05",
        title: "Urban Sneaker 05",
        image: "./img/urban-style-sneakers-05.jpg",
        category: {
            name: "Urban Sneaker",
            id: "UrbanSneaker"
        },
        price: 480
    },

];













const productsContainer = document.querySelector("#products-container");
const categoryButton = document.querySelectorAll(".category-button");

function productsLoad(chooseProducts) {

    productsContainer.innerHTML = "";

    chooseProducts.forEach(product => {

        const div = document.createElement("div");
        div.classList.add("product");
        div.innerHTML = `
            <img class="product-image" src="${product.image}" alt="${product.title}">
            <div class="product-details">
                <h3 class="product-title">${product.title}</h3>
                <p class="product-price">${product.price}</p>
                <button class="product-add"  id="${product.id}">Add</button>
            </div>
        `;

        productsContainer.append(div);
    
    })  

}

productsLoad(products);

categoryButton.forEach(button => {
    button.addEventListener("click", (e) => {
        
        categoryButton.forEach(button => button.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "allproducts") {
            const buttonProducts = products.filter(product => product.category.id === e.currentTarget.id);
        productsLoad(buttonProducts);
        } else {
            productsLoad(products);
        }
        
    })
})






















































/*
const productsContainer = document.querySelector("#products-container");
const categoryButton = document.querySelectorAll(".category-button");


function productsLoad(chooseProducts) {

    productsContainer.innerHTML = "";

    chooseProducts.forEach(product => {

        const div = document.createElement("div");
        div.classList.add("product");
        div.innerHTML = `
            <img class="product-image" src="${product.image}" alt="${product.title}">
            <div class="product-details">
                <h3 class="product-title">${product.title}</h3>
                <p class="product-price">${product.price}</p>
                <button id="${product.id}" class="product-add">Add</button>
            </div>
        `;

        productsContainer.append(div);
    })
}

productsLoad(productsArray);

categoryButton.forEach(button =>{
    button.addEventListener("click", (e) =>{

        categoryButton.forEach(button => button.classList.remove("active")); 
        e.currentTarget.classList.add("active");

        if(e.currentTarget.id != "all-products") {

            const categoryProducts = productsArray.find(productsArray => product.category.id === e.currentTarget.id);
            
            principalTitle.innerHTML = "All the products!"; 

            const buttonProducts = productsArray.filter(productsArray => product.category.id === e.currentTarget.id);
            productsLoad(buttonProducts);
        } else {
            principalTitle.innerHTML = "All the products!";
            productsLoad(productsArray);
        }

        

    })
}) 
*/