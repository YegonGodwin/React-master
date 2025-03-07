import BookCard from "./components/BookCard";
import "./Style.css";

function App() {
  const books = [
    {
      id: 1,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      rating: 4.8,
    },
    { id: 2, title: "1984", author: "George Orwell", rating: 4.6 },
    {
      id: 3,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      rating: 4.3,
    },
    { id: 4, title: "Pride and Prejudice", author: "Jane Austen", rating: 4.7 },
  ];

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Book List</h1>
      <div className="row">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}

export default App;
