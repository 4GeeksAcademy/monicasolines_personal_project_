import React from "react";

// Componente envolvente para toda la aplicación
export const AppWrapper = ({ children }) => (
      <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh", backgroundColor: "#FAF6F0"}}>
        <main style={{ flex: "1" }}>
          {children}
        </main>
      </div>
    
);
