import React from "react";
import Routes from "./Routes";
import { CartProvider } from "./contexts/CartContext";

function App() {
  return (
    <CartProvider>
      <div className="relative min-h-screen">
        <Routes />
      </div>
    </CartProvider>
  );
}

export default App;
