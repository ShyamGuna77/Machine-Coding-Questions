import Meals from "./components/Meals";
import Navbar from "./components/Navbar";
import { CartContextProvider } from "./store/CartContext";
import { UserProgressContextProvider } from "./store/UserProgressContext";
import Cart from "./components/Cart";
import CheckOut from "./components/CheckOut";



function App() {
  return (
    <>
      <UserProgressContextProvider>
        <CartContextProvider>
          <Navbar />
          <Meals />
          <Cart />
          <CheckOut />
        </CartContextProvider>
      </UserProgressContextProvider>
    </>
  );
}

export default App;
