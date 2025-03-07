function Greetings() {
  const Ninjas = ["Mary", "Jane", "Caroline", "Grace"];

  return (
    <div>
      <h1>Ninja Greetings</h1>
      <ul>
        {Ninjas.map((ninja, index) => (
          <li key={index}>{ninja}</li>
        ))}
      </ul>
    </div>
  );
}

export default Greetings;
