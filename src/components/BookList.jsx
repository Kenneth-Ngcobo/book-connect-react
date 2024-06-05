import Book from "./Book";
import { books, BOOKS_PER_PAGE, genres } from "../data";

function BookList() {
  //console.log("books = ", books);

  return (
    <main className="list">
      <div className="list__items" data-list-items>
        {books.map((book) => (
          <Book key={book.id} {...book} />
        ))}
      </div>
    </main>
  );
}

export default BookList;
