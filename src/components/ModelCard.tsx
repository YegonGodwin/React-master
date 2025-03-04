import { ProgressBar } from "react-bootstrap";

interface Model {
  name: string;
  developer: string;
  scores: {
    coding: number;
    math: number;
    creativeWriting: number;
    reasoning: number;
  };
  description: string;
}

function ModelCard({ model }: { model: Model }) {
  const { name, developer, scores, description } = model;

  return (
    <div className="col-md-6 col-lg-3 mb-4">
      <div className="card h-100 shadow-sm">
        <div className="card-body">
          <h2 className="card-title text-primary">{name}</h2>
          <p className="card-subtitle mb-2 text-muted">By {developer}</p>
          <p className="card-text">{description}</p>
          <h5>Accuracy Scores</h5>
          <div className="scores">
            <div className="mb-2">
              <span>Coding: {scores.coding}%</span>
              <ProgressBar now={scores.coding} variant="success" />
            </div>
            <div className="mb-2">
              <span>Math: {scores.math}%</span>
              <ProgressBar now={scores.math} variant="info" />
            </div>
            <div className="mb-2">
              <span>Creative Writing: {scores.creativeWriting}%</span>
              <ProgressBar now={scores.creativeWriting} variant="warning" />
            </div>
            <div>
              <span>Reasoning: {scores.reasoning}%</span>
              <ProgressBar now={scores.reasoning} variant="danger" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModelCard;
