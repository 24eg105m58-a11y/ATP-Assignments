//create http server
import exp from "express";
const app = exp(); //app is a special variable name used for express app, internally contains http server

//use body parser middleware
app.use(exp.json()); //take and convert json->js

const port = 1424; //any number as port.
app.listen(port, () => console.log(`Server listening to port ${port}...`));

//test data
let users = [];

//create api

//Route to handle GET request of client(http://localhost:1424/users)
app.get("/users", (req, res) => {
  //send resonse to client
  //read all users
  res.json({ message: "All users", payload: users });
});

app.get("/users/:id", (req, res) => {
  //get user id fromurl param
  let idOfUrl = Number(req.params.id);
  //find user
  let user = users.find((userObj) => userObj.id == idOfUrl);
  //if user not found
  if (user == undefined) {
    return res.json({ message: "user not found" });
  }
  //send res
  res.json({ message: "a user", payload: user });
});

//Route to handle POST request of client
app.post("/users", (req, res) => {
  //get user from client
  const newUser = req.body;
  //push user into users
  users.push(newUser);
  //send req
  res.json({ message: "User Created" });
});

//Route to handle PUT request of client
app.put("/users", (req, res) => {
  //get modified user from client
  let modifiedUser = req.body;

  //get index of exixting user in users array
  let index = users.findIndex((userObj) => userObj.id == modifiedUser.id);
  //if user not found
  if (index == -1) {
    return res.json({ message: "User not found" });
  }
  //update user with index
  users.splice(index, 1, modifiedUser);
  //send response
  res.json({ message: "User Updated" });
});

//Route to handle DELETE request of client
app.delete("/users/:id", (req, res) => {
  //get id of user from url parameter
  let idOfUrl = Number(req.params.id);

  //find index of user
  let index = users.findIndex((userObj) => userObj == idOfUrl);

  //if user not found
  if (index == -1) {
    return res.json({ message: "User not found" });
  }
  //delete user by index
  users.splice(index, 1);
  //send response
  res.json({ message: "User Removed" });
});

//create product API with below operations
//create an array for products
let products = [];
//read all products
app.get("/products", (req, res) => {
  //send response
  res.json({ message: "All products", payload: products });
});

//read product by id
app.get("/products/:brand", (req, res) => {
  //get url of brand
  let brandUrl = req.params.brand;
  //find prodcut by brand usinf url(brand)
  let ProductByBrand = products.find((req, res) => req.brand == brandUrl);
  //if brand not found return response not found
  if (ProductByBrand == undefined) {
    return res.json({ message: "That Brand not found" });
  }
  //if found return found and products of that brand
  res.json({ message: "found", payload: products.brand });
});

//adding products to the products array
app.post("/products", (req, res) => {
  //gettinf product from req.http body
  const newProduct = req.body;
  //pushing products into the array
  products.push(newProduct);
  //responding with message and products
  res.json({ message: "Product Added to cart", payload: products });
});

//updating a product
app.put("/products", (req, res) => {
  //to update taking body of put method
  const modifiedProduct = req.body;
  //getting index of product from modifiedproduct
  const indexOfOldProduct = products.findIndex(
    (req) => req.id == modifiedProduct.id,
  );
  //of product not found return not foound response
  if (indexOfOldProduct == -1) {
    return res.json({ message: "not found/ not modified" });
  }
  //using slice method for updating
  products.splice(indexOfOldProduct, 1, modifiedProduct);
  res.json({ message: "product Updated:", payload: products });
});

//delete a product by id
app.delete("/products/:productId", (req, res) => {
  //getting product id from url ,use Number class to make string ->number
  let productUrl = Number(req.params.productId);
  //finding index from product url id
  let productIndex = products.findIndex(
    (reqProduct) => Number(reqProduct.productId) === productUrl,
  );
  //if product not found returnn not response
  if (productIndex === -1) {
    return res.json({ message: "product not found with that id" });
  }
  //using splice method to delete
  products.splice(productIndex, 1);
  //response as product deleted and rest products
  res.json({ message: "product Deleted", payload: products });
});
