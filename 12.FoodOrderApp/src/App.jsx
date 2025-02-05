import Meals from "./components/Meals";
import Navbar from "./components/Navbar";
import { CartContextProvider } from "./store/CartContext";
import { UserProgressContextProvider } from "./store/UserProgressContext";
import Cart from "./components/Cart";



function App() {
  return (
    <>
      <UserProgressContextProvider>
        <CartContextProvider>
          <Navbar />
          <Meals />
          <Cart />
        </CartContextProvider>
      </UserProgressContextProvider>
    </>
  );
}

export default App;
