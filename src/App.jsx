import Header from "./components/Header";
import BookList from "./components/BookList";
import { Routes, Route } from "react-router-dom";
import SingleBook from "./pages/SingleBook";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/single-book" element={<SingleBook />} />
      </Routes>
      <Header />
      <BookList />
    </>
  );
}
