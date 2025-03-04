import React from "react";
import Home from "./pages/Home";
import { UserFileContextProvider } from "./contexts/userFileContext.jsx";

function App() {
  return (
    <UserFileContextProvider>
      <Home />
    </UserFileContextProvider>
  );
}

export default App;