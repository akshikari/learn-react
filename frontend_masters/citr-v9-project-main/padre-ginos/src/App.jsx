import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import PizzaOftheDay from "./PizzaOfTheDay";
import Order from "./Order";
import Header from "./Header";
import { CartContext } from "./contexts";

const App = () => {
  const cartHook = useState([]);
  return (
    <CartContext value={cartHook}>
      <div>
        <Header />
        <Order />
        <PizzaOftheDay />
      </div>
    </CartContext>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
