import React, { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    { title: "Rich Dad Poor Dad", author: "Robert Kiyosaki", id: 1 },
    { title: "The Richest Man in Babylon", author: "George S. Clason‎", id: 2 },
    { title: "Atomic Habbits", author: "James Clear‎", id: 3 },
  ]);

  const addBook = (title, author) => {
    setBooks([...books, { title, author, id: uuidv4() }]);
  };

  const removeBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <BookContext.Provider value={{ books, addBook, removeBook }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
