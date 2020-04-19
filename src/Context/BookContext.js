import React, { createContext, useState } from "react";

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    { title: "Rich Dad Poor Dad", id: 1 },
    { title: "The Richest Man in Babylon", id: 2 },
    { title: "Atomic Habbits", id: 3 },
    { title: "The Secret", id: 4 },
    { title: "The Way of The Superior Man", id: 5 },
  ]);
  return (
    <BookContext.Provider value={{ books }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
