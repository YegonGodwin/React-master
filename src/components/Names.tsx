function Names() {
  const fruits = [
    { id: 1, title: "Banana", color: "Yellow" },
    { id: 2, title: "Orange", color: "Yellow" },
    { id: 3, title: "Apple", color: "red" },
  ];
  const Fruit = ({ fruit }) => (
    <li>
      {fruit.fruit} is {fruit.color}
    </li>
  );
  return (
    <ul>
      {fruits.map((fruit) => (
        <Fruit key={fruit.id} fruit={fruit} />
      ))}
    </ul>
  );
}

export default Names;
