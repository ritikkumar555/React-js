
// function Navbar()
// {
//   return (
//     <ul>
//       <li>Home</li>
//       <li>Shop</li>
//       <li>About Us</li>
//       <li>Login</li>
//     </ul>
//   );
// }

import { Footer } from "./components/Footer";// named export
import Navbar from "./components/Navbar";// default export
import Product from "./components/Product";

let products = [
  {
    title: "Nike ka Jutta",
    price: 10522
  },

  {
    title: "Puma ka Jutta",
    price: 7590
  },

  {
    title: "Goldstar",
    price: 300
  }
]


function App() {
 

  return (
      <div>
        <Navbar/>
        <div style={{backgroundColor: "white", color: "black"}}>
         {
          products.map(({title, price} , i) =>{
          return <Product key={i} title={title} price={price}/>
          })
        }
        </div>
        <Footer/>
      </div>
  );
}

export default App
