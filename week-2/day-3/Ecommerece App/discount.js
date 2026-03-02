const coupons = {
  WELCOME10: { type: "percentage", value: 10, minAmount: 1000 },
  FLAT500: { type: "flat", value: 500, minAmount: 5000 },
  ELECTRONICS20: {
    type: "percentage",
    value: 20,
    minAmount: 10000,
    category: "electronics",
  },
};
let valid,message;
export function validateCoupon(couponCode, cartTotal, cartItems) {
  // 1. Check if coupon exists
  if(!coupons.couponCode){
    return false
  }
  // 2. Check minimum amount requirement
  if(!coupons.minAmount){
    return false
  }
  // 3. Check category requirement (if any)
  // Return { valid: true/false, message: '...' }
  if(!coupons.ELECTRONICS20.category){
    return false
   }
   return valid=true,message="it is valid"
}

export function calculateDiscount(couponCode, cartTotal) {
  // Calculate discount amount based on coupon type
  // Return discount amount
  if(couponCode==WELCOME10){
    discount=10/100*cartTotal
  }else if(couponCode==FLAT500){
    discount=500
  }
  else if(couponCode==ELECTRONICS20){
    discount=20/100*cartTotal
  }
  return discount
}

export function applyDiscount(cartTotal, couponCode, cartItems) {
  // 1. Validate coupon
  if(validateCoupon){
    return true
  }
  // 2. If valid, calculate discount
  if(valid){
    calculateDiscount(couponCode,cartTotal)
  }
  // 3. Return final amount and discount details
  // Return {
  //   originalTotal: ...,
  //   discount: ...,
  //   finalTotal: ...,
  //   message: '...'
  // }
  return {
    originalTotal:cartTotal,
  discount,
  finalTotal: discount - cartTotal,
  message
  }
}
