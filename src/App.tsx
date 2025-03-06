import Greetings from "./components/Greetings";
import "./Style.css";

function App() {
  return (
    <>
      <section>
        <Greetings name="Godwin" city="Nakuru" />
        <Greetings name="Desmond" city="Nairobi" />
      </section>
    </>
  );
}

export default App;
