# Zappos-Backend
## BASE_URL
- https://zappos.cyclic.app

## Products Data
- You can find products data in data folder.
  ```
    {
      "_id": "63833499efc6c6cb0b1dc69a",
      "imageurl": "https://m.media-amazon.com/images/I/61SFAqf9EDL._AC_SR255,340_.jpg",
      "brand": "Madewells",
      "desc": "Round Neck Plain White  T-Shirt ",
      "ratings": "196",
      "price": 98.11,
      "category": "menscloths",
      "gender": "men"
    }
  ```


## Login SignUp
- 
  - SignUp Post Request
    ```
      # user will be like

      const user = {
                      name : "Umesh",
                      email:"royanosh777@gmail.com",
                      password:"umesh@123"
                   }

      fetch(`${BASE_URL}/user/signup`, {
            method: "POST",
            body: JSON.stringify(user),
            headers: {
              "Content-type": "application/json",
            },
          })
    ```
   - Login Post Request
      ```
        fetch(`${BASE_URL}/user/login`, {
          method: "POST",
          body: JSON.stringify({
            email: email,
            password: password,
          }),
          headers: {
            "Content-type": "application/json",
          },
        })
      ```
## Product Page
- Get Products
  ```
  https://zappos.cyclic.app/products
  ```
- Get Single Product
  ```
  https://zappos.cyclic.app/products/:id
  ```
## Filter Search Sorting Pagination
- Search
  ```
  https://zappos.cyclic.app/products?q=searchValue
  ```
- Sort And Order
  ```
  https://zappos.cyclic.app/products?sort=price&order=asc
  # you can change price and asc with other category and order
  ```
- Range
  ```
  https://zappos.cyclic.app/products?range=price&lte=200&gte=50
  # lte for less than equal
  # gte for greater than equal
  # range for on which category
  ```
- Pagination
  ```
  https://zappos.cyclic.app/products?page=2&limit=5
  # page for which page's products we want to access
  # limit for per page products limit
  ```
- Filter
  ```
  https://zappos.cyclic.app/products?category=mix
  # category can be replace with price, gender, ratings, brand. It will work fully dynamically.
  # mix is value here
  ```
## Full Package
- You can use all together it will work fantastic 😁😁
  ```
  https://zappos.cyclic.app/products?category=mix&sort=price&order=asc&range=price&gte=0&lte=200&page=1&limit=3
  ```
## Cart (Dynamic For Every user)
- Get Cart Products
  ```
    https://zappos.cyclic.app/cart/:userId
    fetch(
      `https://zappos.cyclic.app/cart/${userId}`
    )
    # When successfully loged in, you will found userId in response user._id 
  ```
- Add to Cart
  ```
    https://zappos.cyclic.app/cart/:productId
    fetch(`https://zappos.cyclic.app/cart/${id}`, {
          method: "POST",
          body: JSON.stringify({
            userId: userid,
          }),
          headers: {
            "Content-type": "application/json",
          },
        })
    # Need to provide userId also
  ```
- Delete From Cart
  ```
    https://zappos.cyclic.app/cart/:productId
    fetch(`https://zappos.cyclic.app/cart/${id}`, {
             method: "DELETE",
             body: JSON.stringify({
             userId: userId,
             }),
             headers: {
               "Content-type": "application/json",
             },
          }
    )
    # Need to provide userId also
  ```
- Patch
  ```
    https://zappos.cyclic.app/cart/:productId
    fetch(`https://zappos.cyclic.app/cart/${id}`, {
             method: "PATCH",
             body: JSON.stringify({
             userId: userId,
             quantity:quantity,
             }),
             headers: {
               "Content-type": "application/json",
             },
          }
    )
    # Need to provide userId also
  ```
- Clear Cart
  ```
  https://zappos.cyclic.app/cart/deleteAll
  fetch(`https://zappos.cyclic.app/cart/deleteAll`, {
        method: "DELETE",
        body: JSON.stringify({
          userId: userId,
        }),
        headers: {
          "Content-type": "application/json",
        },
      })
  # Need to provide userId also
  ```
  

# Zappos Frontend


## Functionalities

- Our website is fully responsive for small, medium and large screen.

- Register and login functionality working, and all the logic written in redux to handle authentication status across website. Each and every error message like user exists already or not, password mismatch, etc. are working properly.

- User can be able to search products on our website using search bar.

- Dynamic pages for men's and women's shopping

- User can be able to filter products according to their need and all filters working with each other combinedly.

- User can be able to add products in their cart and also increase or decrease or remove product in cart, all these crud operations working and handled with redux so that state will be maintained across website.

- User can be able to checkout using credit card details on checkout page and we take care of all authentications required on this page.

- After checkout success message will be shown with your order details and address.

- User can be able to access their order history for order history page we are managing this page with redux.

- User can be able to logout by using logout button then we change user authentication state in redux as false.

- All the data on our website is stored in JSON Server which we deployed on Heroku. So, by this way our whole website is dynamic in nature and many components of our website are reusable.

### `IDE and Tools`

- VS Code

- GitHub

- Netlify

- Thunder Client

- NPM

- Heroku

### `Technologies`

- React

- Chakra UI

- Redux

- Redux Thunk

- Redux middleware

- React Router

- React Libraries

- JSON Server

- NPM Packages

- Flickity Carousel

