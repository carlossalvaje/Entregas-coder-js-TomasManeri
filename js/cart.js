const productsInCart = JSON.parse(localStorage.getItem("products-in-cart"));

const ContainerEmptyCart = document.querySelector("#empty-cart");
const ContainerCartProducts = document.querySelector("#products-cart");
const ContainerCartActions = document.querySelector("#cart-actions");
const ContainerPurchasedCart = document.querySelector("#purchased-cart");


if (productsInCart) {

    ContainerEmptyCart.classList.add("disabled");
    ContainerCartProducts.classList.remove("disabled");
    ContainerCartActions.classList.remove("disabled");
    ContainerPurchasedCart.classList.remove("disabled");

} else {

}