import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { BooksProvider } from "./contexts.jsx/BooksContext";

import Homepage from "./pages/Homepage";
import Categories from "./pages/Categories";
import BookCardPage from "./pages/BookCardPage";
import About from "./pages/About";
import ContactPage from "./pages/ContactPage";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <BooksProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="/" element={<Homepage />} />
          <Route path="categories" element={<Categories />} />
          <Route path="categories/works/:key" element={<BookCardPage />} />
          <Route path="/works/:key" element={<BookCardPage />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </BooksProvider>
  );
}

export default App;
