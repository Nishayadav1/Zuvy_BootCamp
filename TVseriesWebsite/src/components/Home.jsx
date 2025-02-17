// src/Homepage.js
import { useState } from "react";
import {tvSeries} from './Data'
import "./Home.css";

const Homepage = () => {
  const [selectedSeries, setSelectedSeries] = useState(null);

  const handleDetailsClick = (series) => {
    setSelectedSeries(series);
  };

  const closeModal = () => {
    setSelectedSeries(null);
  };

  return (
    <div className="homepage">
      <h1>TV Series</h1>
      <div className="series-grid">
        {tvSeries.map((series) => (
          <div key={series.id} className="series-card">
            <img src={series.image} alt={series.title} />
            <h2>{series.title}</h2>
            <button onClick={() => handleDetailsClick(series)}>Details</button>
          </div>
        ))}
      </div>

      {selectedSeries && (
        <div className="modal">
          <div className="modal-content">
            <h2>{selectedSeries.title}</h2>
            <p>{selectedSeries.summary}</p>
            <p><strong>Genre:</strong> {selectedSeries.genre}</p>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Homepage;