import { reduceStock } from "./product.js";
import { getCartItems, getCartTotal, clearCart } from "./cart.js";
import { applyDiscount } from "./discount.js";

export function processPayment(paymentMethod, couponCode = null) {
  // 1. Get cart items and total
  const items=products.name
  const total=products.reduce((totalAmount,next)=>totalAmount+next, 0)

  // 2. Apply discount if coupon provided
  if(couponCode!=null){
    return discount=total-total*couponCode
  }

  // 3. Validate payment method (card/upi/cod)
  if(paymentMethod!=""){
    return paymentMethod
  }

  // 4. Process payment (simulate)
  if(paymentMethod!=""){
    return simulating
  }

  // 5. Reduce stock for all items
  reduceStock(getProductById,quantity)

  // 6. Clear cart
  
  
  // 7. Generate order summary
  // Return order summary:
  // {
  //   orderId: ...,
  //   items: [...],
  //   subtotal: ...,
  //   discount: ...,
  //   total: ...,
  //   paymentMethod: ...,
  //   status: 'success/failed',
  //   message: '...'
  // }
}

export function validatePaymentMethod(method) {
  // Check if method is valid (card/upi/cod)
}

function generateOrderId() {
  // Generate random order ID
  return "ORD" + Date.now();
}
