import { getProductById, checkStock,products } from "./product.js";

let cartItems = [];
export function addToCart(productId, quantity) {
  // 1. Get product details
 
  // 2. Check stock availability
  checkStock(productId,quantity)

  // 3. Check if product already in cart
  //    - If yes, update quantity
  //    - If no, add new item
  for(let productElement=0;productElement<cartItems.length;productElement++){
    if(cartItems[productElement].id==productId){
      cartItems[productElement].quantity+=quantity
      return cartItems[productElement].quantity
    }
  }
  // 4. Return success/error message
return cartItems.length!=0?"success":"error"
}
export function removeFromCart(productId) {
  // Remove product from cart
  cartItems.splice(cartItems[productId+1],1)
}

export function updateQuantity(productId, newQuantity) {
  // Update quantity of product in cart
  // Check stock before updating
  checkStock(productId, newQuantity);
  products[productId].quantity=newQuantity;
}

export function getCartItems() {
  // Return all cart items with product details
  return cartItems
}

export function getCartTotal() {
  // Calculate total price of all items in cart
  // Return total
let cartTotal=products.reduce((pre,post)=>pre+post.price*post.quantity,0)
return cartTotal
}

export function clearCart() {
  // Empty the cart
  return cartItems.splice(0,cartItems.length)
}
