interface AppGreet {
  name: string;
  city: string;
}

function Greetings(props: AppGreet) {
  return (
    <>
      <h3>Hello, {props.name}</h3>
      <p>Are you from {props.city}</p>
    </>
  );
}

export default Greetings;
