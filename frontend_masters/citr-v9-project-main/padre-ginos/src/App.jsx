import React from "react";
import { createRoot } from "react-dom/client";
import Pizza from "./Pizza";

const App = () => {
  return (
    <div>
      <h1>Padre Gino's - Order Now</h1>
      <Pizza name="Pepperoni" description="pep, cheese, n stuff" image={"/public/pizzas/pepperoni.webp"} />
      <Pizza name="Hawaiian" description="why pineapple" image={"/public/pizzas/hawaiian.webp"} />
      <Pizza name="Americano" description="test" image={"/public/pizzas/big_meat.webp"} />
    </div>
  )
};


const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
