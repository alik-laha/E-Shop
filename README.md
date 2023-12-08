# E-Shop
 For run this app in local machine 
1.Run the cmd ``` npm i ``` in root 
2.Then Run ``` npm i ``` in client folder
3.create a .env file on root directory then add this variable
```
PORT=3000
MONGODB_URI= mongodb+srv://aliklaha0:8URmHoeUw6layNYo@cluster0.n5twvrm.mongodb.net/?retryWrites=true&w=majority
```
4.create a .env file on client directory then add this variable
```
  VITE_API_URL=http://localhost:3000/api/products
```
5.run this cmd on root for run te application ``` npm run dev ```
