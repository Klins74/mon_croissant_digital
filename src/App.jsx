import React from "react";
import Routes from "./Routes";
import { LanguageProvider } from "./contexts/LanguageContext";
import { CartProvider } from "./contexts/CartContext";
import { ToastProviderComponent } from "./components/ui/Toast";

function App() {
  return (
    <LanguageProvider>
      <CartProvider>
        <ToastProviderComponent>
          <div className="relative min-h-screen bg-background text-foreground">
            <Routes />
          </div>
        </ToastProviderComponent>
      </CartProvider>
    </LanguageProvider>
  );
}

export default App;
