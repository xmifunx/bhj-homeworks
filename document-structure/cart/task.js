const valueChanger = document.querySelectorAll('.product__quantity-control');
const addButtons = document.querySelectorAll('.product__add');

valueChanger.forEach(element => {
    element.addEventListener('click', changeValue);
})

 addButtons.forEach(element => {
    element.addEventListener('click', addToCart);
})
 
function changeValue() {
    const valueInChanger = this.parentElement.querySelector('.product__quantity-value');
    
    if (this.classList.contains('product__quantity-control_dec')) {
        if (Number(valueInChanger.innerText) > 1) {
            valueInChanger.innerText = Number(valueInChanger.innerText) - 1;
        } else {
            return;
        }
    } else {
        valueInChanger.innerText = Number(valueInChanger.innerText) + 1;
    }
}
 
function addToCart() {
    const chosenProduct = this.closest('.product');
    const productId = chosenProduct.dataset.id;
    const productQuantity = Number(chosenProduct.querySelector('.product__quantity-value').innerText);
    var productInCart = false;
    
    document.querySelectorAll('.cart__product').forEach(product => {
        if (product.dataset.id === productId) {
            const countValue = product.querySelector('.cart__product-count');
            countValue.innerText = Number(countValue.innerText) + productQuantity;
            productInCart = true;
        }
    });

    if (productInCart) {
        return;
    }

    const productImage = chosenProduct.querySelector('.product__image').src;
    const addProduct = document.createElement('div');
    
    addProduct.classList.add("cart__product");
    addProduct.dataset.id = productId;
    addProduct.innerHTML = `
       <img class="cart__product-image" src=${productImage}>
       <div class="cart__product-count">${productQuantity}</div>
    `;
    document.querySelector('.cart__products').insertAdjacentElement("beforeEnd", addProduct);
 }