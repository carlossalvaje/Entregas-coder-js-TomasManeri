const productsInCart = JSON.parse(localStorage.getItem("products-in-cart"));

const ContainerEmptyCart = document.querySelector("#empty-cart");
const ContainerCartProducts = document.querySelector("#products-cart");
const ContainerCartActions = document.querySelector("#cart-actions");
const ContainerPurchasedCart = document.querySelector("#purchased-cart");


if (productsInCart) {

    ContainerEmptyCart.classList.add("disabled");
    ContainerCartProducts.classList.remove("disabled");
    ContainerCartActions.classList.remove("disabled");
    ContainerPurchasedCart.classList.add("disabled");

    ContainerCartProducts.innerHTML = "";

    productsInCart.forEach(product => {

        const div = document.createElement("div");
        div.classList.add("product-cart");
        div.innerHTML = `
            <img class="image-product-cart" src="${product.image}" alt="${product.title}">
            <div class="name-product-cart">
                <small>Title</small>
                <h3>${product.title}</h3>
            </div>
            <div class="quantity-product-cart">
                <small>Quantity</small>
                <p>${product.amount}</p>
            </div>
            <div class="price-product-cart">
                <small>Price</small>
                <p>${product.price}</p>
            </div>
            <div class="subtotal-product-cart">
                <small>Subtotal</small>
                <p>${product.price * product.amount}</p>
            </div>
            <button class="delete-product-cart" id="${product.id}"><i   class="bi bi-trash3-fill"></i></button>
        `;

        ContainerCartProducts.append(div);
    })


} else {

}



/* <div class="product-cart">
            <img class="image-product-cart" src="../img/rare-sneakers-01.jpg" alt="">
            <div class="name-product-cart">
                <small>Title</small>
                <h3> Rare Sneaker 01</h3>
            </div>
            <div class="quantity-product-cart">
                <small>Quantity</small>
                <p>1</p>
            </div>
            <div class="price-product-cart">
                <small>Price</small>
                <p>$400</p>
            </div>
            <div class="subtotal-product-cart">
                <small>Subtotal</small>
                <p>$400</p>
            </div>
            <button class="delete-product-cart"><i class="bi bi-trash3-fill"></i></button>
    </div> */