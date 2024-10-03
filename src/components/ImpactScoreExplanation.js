import React from 'react';
import './ImpactScoreExplanation.css';

const ImpactScoreExplanation = () => {
    return (
        <section className="impact-score-explanation">
            <h3>How We Calculate the Impact Score</h3>
            <p className="intro-text">
                The <strong>impact score</strong> reflects the potential of each technology to drive business value and transformation. It is determined by evaluating a combination of factors, such as market size, growth potential, industry adoption, and technological maturity. Here's how we break it down:
            </p>
            <div className="calculation-factors">
                <div className="factor">
                    <span className="icon">📈</span>
                    <h4>Market Potential (40%)</h4>
                    <p>
                        Market potential is the most critical factor in determining the overall impact of a technology. It accounts for 40% of the score because it reflects the projected market size, growth rate, and overall demand for the technology. A large market with strong growth potential is a key driver of business value.
                    </p>
                </div>
                <div className="factor">
                    <span className="icon">🏢</span>
                    <h4>Industry Adoption (30%)</h4>
                    <p>
                        Industry adoption is the second most important factor, contributing 30% to the impact score. This measures how quickly and broadly the technology is being adopted across key industries. Technologies that have strong use cases and rapid adoption rates across multiple sectors are more likely to have a higher impact.
                    </p>
                </div>
                <div className="factor">
                    <span className="icon">💡</span>
                    <h4>Technological Maturity (30%)</h4>
                    <p>
                        Technological maturity also accounts for 30% of the score. This factor assesses how well-developed and reliable the technology is. A mature technology that has been proven in real-world applications is more likely to have a higher immediate impact compared to emerging technologies that are still in the experimental or developmental phase.
                    </p>
                </div>
            </div>

            <h4>Example Calculation</h4>
            <p className="example-text">
                For instance, <strong>Augmented Reality (AR)</strong> scores 9 based on the following weighted formula:
            </p>

            <div className="formula-section">
                <h4>The Formula</h4>
                <p className="formula">
                    <strong>Impact Score</strong> = (0.4 × <strong>Market Potential</strong>) + (0.3 × <strong>Industry Adoption</strong>) + (0.3 × <strong>Technological Maturity</strong>)
                </p>
            </div>

            <ul className="example-list">
                <li>📈 <strong>Market Potential:</strong> 10 (AR market expected to reach $198 billion by 2025 with a CAGR of 25%)</li>
                <li>🏢 <strong>Industry Adoption:</strong> 9 (Adopted rapidly across sectors such as retail, real estate, and training)</li>
                <li>💡 <strong>Technological Maturity:</strong> 8 (Well-established in many industries, with active use cases)</li>
            </ul>

            <p className="calculation">
                Combining these factors: <br />
                <strong>Impact Score</strong> = (0.4 × 10) + (0.3 × 9) + (0.3 × 8) = 9
            </p>

            <p className="conclusion-text">
                Based on this formula, AR receives an impact score of <strong>9</strong> out of 10.
            </p>
        </section>
    );
};

export default ImpactScoreExplanation;
