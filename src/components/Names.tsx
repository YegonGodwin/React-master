import "bootstrap/dist/css/bootstrap.min.css";

function Names() {
  const fruits = [
    { id: 1, title: "Banana", color: "Yellow" },
    { id: 2, title: "Orange", color: "Yellow" },
    { id: 3, title: "Apple", color: "red" },
  ];
  const Fruit = ({
    fruit,
  }: {
    fruit: { id: number; title: string; color: string };
  }) => (
    <li>
      {fruit.title} is {fruit.color}
    </li>
  );
  return (
    <>
      <h3 className="text-primary fst-italic">
        This is mapping function in React
      </h3>
      <ul>
        {fruits.map((fruit) => (
          <Fruit key={fruit.id} fruit={fruit} />
        ))}
      </ul>
    </>
  );
}

export default Names;
