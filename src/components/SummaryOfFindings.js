import React from 'react';
import './SummaryOfFindings.css';  // Optional, if you want to separate styles

const SummaryOfFindings = () => {
    return (
        <section className="additional-data">
            <h3>Summary of Findings</h3>
            <table className="summary-table">
                <thead>
                    <tr>
                        <th>Category</th>
                        <th>Technology</th>
                        <th>Trends</th>
                        <th>Key Use Cases</th>
                        <th>Statistics / Facts</th>
                        <th>Impact Score (1-10)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Generative AI</td>
                        <td>AI for Content Creation</td>
                        <td>Text, images, video, and code generation</td>
                        <td>Automated marketing content creation, design prototyping</td>
                        <td>
                            <a href="https://www.prnewswire.com/news-releases/generative-ai-market-to-be-worth-109-37-billion-by-2030-grand-view-research-inc-301718827.html" target="_blank" rel="noopener noreferrer">
                                Generative AI market expected to grow to $109.37 billion by 2030 (CAGR of 34.6%)
                            </a>
                        </td>
                        <td>9</td>
                    </tr>
                    <tr>
                        <td>Generative AI</td>
                        <td>AI-Powered Predictive Analytics</td>
                        <td>AI-driven business forecasting</td>
                        <td>Demand forecasting, customer behavior prediction, supply chain optimization</td>
                        <td>
                            <a href="https://www.linkedin.com/pulse/ai-predicts-human-behavior-85-accuracy-maverick-foo-hphjc/" target="_blank" rel="noopener noreferrer">
                                Predictive AI can improve forecasting accuracy by up to 85%
                            </a>
                        </td>
                        <td>8</td>
                    </tr>
                    <tr>
                        <td>Generative AI</td>
                        <td>Natural Language Processing (NLP)</td>
                        <td>Real-time language processing and translation</td>
                        <td>Customer service automation, real-time communication tools, multi-lingual business collaboration</td>
                        <td>
                            <a href="https://www.marketsandmarkets.com/Market-Reports/natural-language-processing-nlp-market-825.html" target="_blank" rel="noopener noreferrer">
                                NLP market expected to reach $91 billion by 2030 due to demand for real-time processing
                            </a>
                        </td>
                        <td>8</td>
                    </tr>
                    <tr>
                        <td>Generative AI</td>
                        <td>Generative Design AI</td>
                        <td>Automated design and prototyping</td>
                        <td>Product design, architecture, urban planning</td>
                        <td>
                            <a href="https://www.superside.com/blog/pros-and-cons-ai-graphic-design" target="_blank" rel="noopener noreferrer">
                                AI-driven design tools can reduce design time by 30-40%
                            </a>
                        </td>
                        <td>7</td>
                    </tr>
                    <tr>
                        <td>Generative AI</td>
                        <td>AI Ethics & Governance</td>
                        <td>Ethical AI frameworks for responsible AI usage</td>
                        <td>Ensuring compliance with AI regulations and ethical use of AI in decision-making</td>
                        <td>
                            <a href="https://sloanreview.mit.edu/article/ai-ethics-at-unilever-from-policy-to-process/" target="_blank" rel="noopener noreferrer">
                                70% of companies consider AI ethics crucial for long-term business success
                            </a>
                        </td>
                        <td>6</td>
                    </tr>
                    <tr>
                        <td>Generative AI</td>
                        <td>AI-Driven Personalization</td>
                        <td>Mass personalization for consumer experiences</td>
                        <td>Personalized recommendations, dynamic content delivery</td>
                        <td>
                            <a href="https://funnel.io/blog/marketing-personalization-101" target="_blank" rel="noopener noreferrer">
                                Personalization can increase ROI in marketing by 10-20%
                            </a>
                        </td>
                        <td>8</td>
                    </tr>
                    <tr>
                        <td>Spatial Computing</td>
                        <td>Augmented Reality (AR)</td>
                        <td>AR for real-world integration</td>
                        <td>Retail virtual try-ons, employee training, product visualization</td>
                        <td>
                            <a href="https://www.marketresearchfuture.com/reports/augmented-reality-market-1310" target="_blank" rel="noopener noreferrer">
                                AR market expected to reach $198 billion by 2025
                            </a>
                        </td>
                        <td>9</td>
                    </tr>
                    <tr>
                        <td>Spatial Computing</td>
                        <td>Virtual Reality (VR)</td>
                        <td>Immersive experiences</td>
                        <td>Employee training, remote collaboration, virtual site visits</td>
                        <td>
                            <a href="https://www.statista.com/statistics/671403/global-virtual-reality-market-size/" target="_blank" rel="noopener noreferrer">
                                VR adoption expected to grow by 75% in large enterprises by 2025
                            </a>
                        </td>
                        <td>8</td>
                    </tr>
                    <tr>
                        <td>Spatial Computing</td>
                        <td>Digital Twins</td>
                        <td>Virtual replicas of physical assets</td>
                        <td>Real-time operational monitoring, supply chain optimization, equipment maintenance</td>
                        <td>
                            <a href="https://sensgreen.com/what-is-a-digital-twin-and-how-is-it-revolutionizing-building-management/" target="_blank" rel="noopener noreferrer">
                                Digital twin technology can improve operational efficiency by 30%
                            </a>
                        </td>
                        <td>9</td>
                    </tr>
                    <tr>
                        <td>Spatial Computing</td>
                        <td>Edge Computing</td>
                        <td>Decentralized real-time processing</td>
                        <td>Supporting AR/VR applications and AI-driven operations with low latency</td>
                        <td>
                            <a href="https://www.grandviewresearch.com/industry-analysis/edge-computing-market" target="_blank" rel="noopener noreferrer">
                                Edge computing market to grow to $61.14 billion by 2028
                            </a>
                        </td>
                        <td>8</td>
                    </tr>
                    <tr>
                        <td>Spatial Computing</td>
                        <td>Extended Reality (XR)</td>
                        <td>Combination of AR, VR, and MR (Mixed Reality)</td>
                        <td>Hybrid training, virtual collaboration, design reviews</td>
                        <td>
                            <a href="https://www.weforum.org/agenda/2024/06/how-xr-can-amplify-the-impact-of-purpose-driven-initiatives/" target="_blank" rel="noopener noreferrer">
                                XR adoption projected to reach 75% among major companies for collaboration by 2025
                            </a>
                        </td>
                        <td>7</td>
                    </tr>
                    <tr>
                        <td>Spatial Computing</td>
                        <td>Spatial Mapping & 3D Visualization</td>
                        <td>3D modeling and mapping of real-world environments</td>
                        <td>Urban planning, architecture, virtual tourism</td>
                        <td>
                            <a href="https://blog.tyronesystems.com/building-the-future-faster-how-gpu-servers-slash-3d-rendering-time-by-40-in-construction/" target="_blank" rel="noopener noreferrer">
                                3D visualization tools can cut design and planning times by up to 40%
                            </a>
                        </td>
                        <td>7</td>
                    </tr>
                </tbody>
            </table>
        </section>
    );
};

export default SummaryOfFindings;
