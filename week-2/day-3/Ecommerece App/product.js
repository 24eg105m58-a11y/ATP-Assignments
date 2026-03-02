export const products = [
  { id: 1, name: 'Laptop', price: 50000, stock: 10, category: 'electronics' },
  { id: 2, name: 'Phone', price: 30000, stock: 15, category: 'electronics' },
  { id: 3, name: 'Headphones', price: 2000, stock: 25, category: 'accessories' },
  { id: 4, name: 'Mouse', price: 500, stock: 50, category: 'accessories' },
  { id: 5, name: 'Keyboard', price: 1500, stock: 30, category: 'accessories' }
  ];

export function getProductById(id) {
// Find and return product by ID
const findById=products.find((product)=>product.id==id)
return findById
}
                          
export function getAllProducts() {
// Return all products
return products
}
                          
export function getProductsByCategory(category) {
// Filter products by category
const getByCategory=products.filter((categoryElement)=>categoryElement.category==category)
return getByCategory
}
                          
export function searchProducts(query) {
// Search products by name (case-insensitive)
const getByName=products.find((productName)=>productName.name==query)
return getByName
}
                          
export function checkStock(productId, quantity) {
// Check if product has enough stock
// Return true/false
const productIdStock=products.find((prodId)=>prodId.id==productId && prodId.stock)
return productIdStock
}
                          
export function reduceStock(productId, quantity) {
// Reduce product stock after purchase
const reduceStock=products.reduce((decrement, previous)=>previous.productId-decrement,quantity)
return reduceStock
}
