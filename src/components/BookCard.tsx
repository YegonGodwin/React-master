function BookCard() {
  const fruits = ["mango", "Orange", "Lemon", "Apple"];

  return (
    <>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </>
  );
}

export default BookCard;
