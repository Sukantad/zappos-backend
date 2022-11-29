# zappos-backend
- All Backend Will be here

## Products Data
- You can find products data in data folder.

## Base Url
- https://zappos.cyclic.app

## Login SignUp
- 
  - SignUp Post Request
    ```
    https://zappos.cyclic.app/signup
    post("/signup",signupDetailsValidator,signup)
    ```
   - Login Post Request
      ```
      https://zappos.cyclic.app/login
      post("/login",loginDetailsValidator,login)
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

