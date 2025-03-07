import { FaStar } from "react-icons/fa";

interface Book {
  title: string;
  author: string;
  rating: number;
}

function BookCard({ book }: { book: Book }) {
  const { title, author, rating } = book;

  return (
    <div className="col-md-6 col-lg-3 mb-4">
      <div className="card h-100">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">Author: {author}</p>
          <p className="card-text">
            Rating: {rating} / 5{" "}
            {Array(Math.round(rating))
              .fill(null)
              .map((_, i) => (
                <FaStar key={i} color="#f1c40f" />
              ))}
          </p>
        </div>
      </div>
    </div>
  );
}
export default BookCard;
