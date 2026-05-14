export const products = [
  { id: 1, name: "Laptop", price: 50000, stock: 10, category: "electronics" },
  { id: 2, name: "Phone", price: 30000, stock: 15, category: "electronics" },
  { id: 3, name: "Headphones", price: 2000, stock: 25, category: "accessories" },
  { id: 4, name: "Mouse", price: 500, stock: 50, category: "accessories" },
  { id: 5, name: "Keyboard", price: 1500, stock: 30, category: "accessories" }
];

// Get product by ID
export function getProductById(id) {
  return products.find(p => p.id === id);
}

// Get all products
export function getAllProducts() {
  return products;
}

// Filter by category
export function getProductsByCategory(category) {
  return products.filter(p => p.category === category);
}

// Search products (case-insensitive)
export function searchProducts(query) {
  return products.filter(p =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );
}

// Check stock availability
export function checkStock(productId, quantity) {
  const product = getProductById(productId);
  return product && product.stock >= quantity;
}

// Reduce stock after purchase
export function reduceStock(productId, quantity) {
  const product = getProductById(productId);

  if (product && product.stock >= quantity) {
    product.stock -= quantity;
    return true;
  }

  return false;
} return product.stock >= requestedQuantity;

export function reduceStock(productId, quantity) {
  const product = getProductById(productId);
  const requestedQuantity = Number(quantity);
  if (!product) return false;
  if (!Number.isInteger(requestedQuantity) || requestedQuantity <= 0) return false;
  if (product.stock < requestedQuantity) return false;

  product.stock -= requestedQuantity;
  return true;
}
