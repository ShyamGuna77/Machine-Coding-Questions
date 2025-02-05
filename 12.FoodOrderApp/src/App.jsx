import Meals from "./components/Meals";
import Navbar from "./components/Navbar";
import { CartContextProvider } from "./store/CartContext";



function App() {
  return (
    <>
    <CartContextProvider>
    <Navbar />
    <Meals />
    </CartContextProvider>
   
    </>
  );
}

export default App;
