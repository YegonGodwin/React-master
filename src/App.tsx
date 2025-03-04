import { aiModels } from "./components/data";
import ModelCard from "./components/ModelCard";
import "./Style.css";

function App() {
  return (
    <div className="container my-5">
      <header className="text-center mb-5">
        <h1 className="display-4">AI Model Comparison</h1>
        <p className="lead">
          Explore the strengths of today’s top AI models in coding, math,
          creative writing, and more.
        </p>
      </header>
      <div className="row">
        {aiModels.map((model) => (
          <ModelCard key={model.id} model={model} />
        ))}
      </div>
    </div>
  );
}

export default App;
