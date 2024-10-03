import React from 'react';
import RadarChart from './components/RadarChart';
import SummaryOfFindings from './components/SummaryOfFindings';
import ImpactScoreExplanation from './components/ImpactScoreExplanation';  // Import the new component
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="hero-section">
          <h1>Generative AI & Spatial Computing Trend Radar</h1>
          <p>
            Stay ahead of the curve with insights into Generative AI and Spatial Computing. Discover how these technologies can transform GEA Digital's strategy and operations.
          </p>
        </div>
      </header>
      <main>
        <section className="chart-section">
          <h2>Explore Key Technologies</h2>
          <RadarChart />
        </section>
        <SummaryOfFindings />
        <ImpactScoreExplanation />
      </main>
    </div>
  );
}

export default App;
