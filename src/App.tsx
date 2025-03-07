import BookCard from "./components/BookCard";
import "./Style.css";

function App() {
  const books = [
    {
      id: 1,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1601828519833-892648ce83f1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9ja2luZ2JpcmR8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 2,
      title: "1984",
      author: "George Orwell",
      rating: 4.6,
      image:
        "https://images.unsplash.com/photo-1601828519833-892648ce83f1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9ja2luZ2JpcmR8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 3,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      rating: 4.3,
      image: "https://source.unsplash.com/200x300/?book,jazz",
    },
    {
      id: 4,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      rating: 4.7,
      image: "https://source.unsplash.com/200x300/?book,romance",
    },
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
