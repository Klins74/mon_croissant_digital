import React from "react";
import Routes from "./Routes";
import { LanguageProvider } from "./contexts/LanguageContext";
import { CartProvider } from "./contexts/CartContext";

function App() {
  return (
    <LanguageProvider>
      <CartProvider>
        <div className="relative min-h-screen bg-background text-foreground">
          <Routes />
        </div>
      </CartProvider>
    </LanguageProvider>
  );
}

export default App;
