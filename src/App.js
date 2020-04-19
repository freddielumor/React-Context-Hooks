import React from "react";
import BookList from "./components/BookList";
import Navbar from "./components/Navbar";
import ThemeContextProvider from "./Context/ThemeContext";
import AuthContextProvider from "./Context/AuthContext";
import ThemeToggle from "./components/ThemeToggle";
import SongList from "./components/SongList";

function App() {
  return (
    <div className="App">
      {/* <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar />
          <BookList />
          <ThemeToggle />
        </AuthContextProvider>
      </ThemeContextProvider> */}
      <SongList />
    </div>
  );
}

export default App;
