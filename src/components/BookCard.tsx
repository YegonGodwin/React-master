interface Book {
  title: string;
  author: string;
  rating: number;
  image: string;
}

function BookCard({ book }: { book: Book }) {
  const { title, author, rating, image } = book;

  return (
    <div className="col-md-6 col-lg-3 mb-4">
      <div className="card h-100">
        <img src={image} className="card-img-top" alt={`${title} cover`} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">Author: {author}</p>
          <p className="card-text">Rating: {rating} / 5</p>
        </div>
      </div>
    </div>
  );
}
export default BookCard;
