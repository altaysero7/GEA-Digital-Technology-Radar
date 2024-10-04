import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  Legend,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { data } from "./technology-areas";
import { Box, Icon, Text } from "@chakra-ui/react";

const IMPACT_SCALE = 10;

const CustomTooltip = ({ active, payload, label, ...rest }) => {
  if (active && payload && payload.length) {
    const {
      stats_facts,
      technology_adoption_arguments,
      market_potential_arguments,
      impact_to_GEA_arguments,
      technology_adoption,
      market_potential,
      impact_to_GEA,
    } = payload[0].payload;
    return (
      <Box
        background={"white"}
        className="custom-tooltip"
        p={4}
        borderRadius={"8px"}
        maxW={"sm"}
      >
        <Text
          align={"left"}
          fontSize={"lg"}
          color={"gray.900"}
        >{`${label}`}</Text>
        <Box my={2}>
          <hr />
        </Box>
        <Text
          align={"left"}
          color={"gray.700"}
          fontSize={"sm"}
          className="intro"
        >
          Calculated Impact:{" "}
          <Text color={"gray.900"} fontWeight={"bold"}>
            {payload[0].value}
          </Text>
        </Text>
        <Text align={"left"} mt={2} color="gray.700" fontSize={"sm"}>
          <Box as="span" boxSize={6}>
            ℹ️
          </Box>
          {stats_facts}
        </Text>
        <Text align={"left"} mt={2} color="gray.700" fontSize={"sm"}>
          <Box as="span" boxSize={6}>
            <b>Tech Adoption</b>:
          </Box>
          &nbsp;{technology_adoption}
        </Text>
        <Text align={"left"} mt={2} color="gray.700" fontSize={"sm"}>
          <Box as="span" boxSize={6}>
            <b>Market Potential</b>:
          </Box>
          &nbsp;{market_potential}
        </Text>
        <Text align={"left"} mt={2} color="gray.700" fontSize={"sm"}>
          <Box as="span" boxSize={6}>
            <b>Impact to GEA</b>:
          </Box>
          &nbsp;{impact_to_GEA}
        </Text>
      </Box>
    );
  }

  return null;
};

function RadarChartParent(props) {
  return (
    <ResponsiveContainer width={"100%"} height={"100%"}>
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="technology_area" />
        <PolarRadiusAxis angle={30} domain={[0, 10]} />
        <Radar
          name="impact score"
          dataKey="average"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.6}
        />
        <Legend />
        <Tooltip content={<CustomTooltip />} />
      </RadarChart>
    </ResponsiveContainer>
  );
}

// ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Legend, Tooltip);

// const data = {
//   labels: ['<5 years', '5-10 years', '>10 years'], // Adoption time categories
//   datasets: [
//     {
//       label: 'AI for Content Creation',
//       data: [9, 0, 0], // Impact score of 9 in <5 years
//       backgroundColor: 'rgba(54, 162, 235, 0.2)',
//       borderColor: 'rgba(54, 162, 235, 1)',
//       borderWidth: 2,
//       pointBackgroundColor: 'rgba(54, 162, 235, 1)',
//       pointBorderColor: '#fff',
//       pointStyle: 'rect',
//       pointRadius: 6,
//     },
//     {
//       label: 'AI-Powered Predictive Analytics',
//       data: [8, 0, 0], // Impact score of 8 in <5 years
//       backgroundColor: 'rgba(54, 162, 235, 0.2)',
//       borderColor: 'rgba(54, 162, 235, 1)',
//       borderWidth: 2,
//       pointBackgroundColor: 'rgba(54, 162, 235, 1)',
//       pointBorderColor: '#fff',
//       pointStyle: 'rect',
//       pointRadius: 6,
//     },
//     {
//       label: 'Natural Language Processing (NLP)',
//       data: [8, 0, 0], // Impact score of 8 in <5 years
//       backgroundColor: 'rgba(54, 162, 235, 0.2)',
//       borderColor: 'rgba(54, 162, 235, 1)',
//       borderWidth: 2,
//       pointBackgroundColor: 'rgba(54, 162, 235, 1)',
//       pointBorderColor: '#fff',
//       pointStyle: 'rect',
//       pointRadius: 6,
//     },
//     {
//       label: 'Generative Design AI',
//       data: [0, 7, 0], // Impact score of 7 in 5-10 years
//       backgroundColor: 'rgba(54, 162, 235, 0.2)',
//       borderColor: 'rgba(54, 162, 235, 1)',
//       borderWidth: 2,
//       pointBackgroundColor: 'rgba(54, 162, 235, 1)',
//       pointBorderColor: '#fff',
//       pointStyle: 'rect',
//       pointRadius: 6,
//     },
//     {
//       label: 'AI Ethics & Governance',
//       data: [0, 6, 0], // Impact score of 6 in 5-10 years
//       backgroundColor: 'rgba(54, 162, 235, 0.2)',
//       borderColor: 'rgba(54, 162, 235, 1)',
//       borderWidth: 2,
//       pointBackgroundColor: 'rgba(54, 162, 235, 1)',
//       pointBorderColor: '#fff',
//       pointStyle: 'rect',
//       pointRadius: 6,
//     },
//     {
//       label: 'AI-Driven Personalization',
//       data: [8, 0, 0], // Impact score of 8 in <5 years
//       backgroundColor: 'rgba(54, 162, 235, 0.2)',
//       borderColor: 'rgba(54, 162, 235, 1)',
//       borderWidth: 2,
//       pointBackgroundColor: 'rgba(54, 162, 235, 1)',
//       pointBorderColor: '#fff',
//       pointStyle: 'rect',
//       pointRadius: 6,
//     },
//     {
//       label: 'Augmented Reality (AR)',
//       data: [9, 0, 0], // Impact score of 9 in <5 years
//       backgroundColor: 'rgba(255, 99, 132, 0.2)',
//       borderColor: 'rgba(255, 99, 132, 1)',
//       borderWidth: 2,
//       pointBackgroundColor: 'rgba(255, 99, 132, 1)',
//       pointBorderColor: '#fff',
//       pointStyle: 'circle',
//       pointRadius: 6,
//     },
//     {
//       label: 'Virtual Reality (VR)',
//       data: [8, 0, 0], // Impact score of 8 in <5 years
//       backgroundColor: 'rgba(255, 99, 132, 0.2)',
//       borderColor: 'rgba(255, 99, 132, 1)',
//       borderWidth: 2,
//       pointBackgroundColor: 'rgba(255, 99, 132, 1)',
//       pointBorderColor: '#fff',
//       pointStyle: 'circle',
//       pointRadius: 6,
//     },
//     {
//       label: 'Digital Twins',
//       data: [9, 0, 0], // Impact score of 9 in <5 years
//       backgroundColor: 'rgba(255, 99, 132, 0.2)',
//       borderColor: 'rgba(255, 99, 132, 1)',
//       borderWidth: 2,
//       pointBackgroundColor: 'rgba(255, 99, 132, 1)',
//       pointBorderColor: '#fff',
//       pointStyle: 'circle',
//       pointRadius: 6,
//     },
//     {
//       label: 'Edge Computing',
//       data: [8, 0, 0], // Impact score of 8 in <5 years
//       backgroundColor: 'rgba(255, 99, 132, 0.2)',
//       borderColor: 'rgba(255, 99, 132, 1)',
//       borderWidth: 2,
//       pointBackgroundColor: 'rgba(255, 99, 132, 1)',
//       pointBorderColor: '#fff',
//       pointStyle: 'circle',
//       pointRadius: 6,
//     },
//     {
//       label: 'Extended Reality (XR)',
//       data: [0, 7, 0], // Impact score of 7 in 5-10 years
//       backgroundColor: 'rgba(255, 99, 132, 0.2)',
//       borderColor: 'rgba(255, 99, 132, 1)',
//       borderWidth: 2,
//       pointBackgroundColor: 'rgba(255, 99, 132, 1)',
//       pointBorderColor: '#fff',
//       pointStyle: 'circle',
//       pointRadius: 6,
//     },
//     {
//       label: 'Spatial Mapping & 3D Visualization',
//       data: [0, 7, 0], // Impact score of 7 in 5-10 years
//       backgroundColor: 'rgba(255, 99, 132, 0.2)',
//       borderColor: 'rgba(255, 99, 132, 1)',
//       borderWidth: 2,
//       pointBackgroundColor: 'rgba(255, 99, 132, 1)',
//       pointBorderColor: '#fff',
//       pointStyle: 'circle',
//       pointRadius: 6,
//     },
//   ],
// };

// const options = {
//   responsive: true,
//   maintainAspectRatio: false,
//   scales: {
//     r: {
//       angleLines: {
//         display: true,
//         color: '#ccc',
//       },
//       ticks: {
//         beginAtZero: true,
//         stepSize: 1,
//         display: false, // Hide tick marks for a cleaner look
//         max: 10, // Impact score maximum set to 10
//       },
//       pointLabels: {
//         font: {
//           size: 14,
//           weight: 'bold',
//         },
//         color: '#333',
//         callback: function (value) {
//           return `Impact ${value}`; // Show impact score on radial labels
//         },
//       },
//     },
//   },
//   plugins: {
//     legend: {
//       position: 'top',
//       labels: {
//         font: {
//           size: 14,
//         },
//         color: '#333',
//       },
//     },
//     tooltip: {
//       callbacks: {
//         label: function (tooltipItem) {
//           const impact = tooltipItem.raw;
//           const adoption = tooltipItem.label;
//           return `${tooltipItem.dataset.label}: Impact ${impact}, Adoption ${adoption}`;
//         },
//       },
//       backgroundColor: 'rgba(0,0,0,0.7)', // Dark background for better contrast
//       titleFont: {
//         size: 14,
//         weight: 'bold',
//       },
//       bodyFont: {
//         size: 12,
//       },
//       padding: 10,
//       cornerRadius: 6,
//     },
//   },
// };

// const RadarChart = () => {
//   return (
//     <div className="radar-chart-container" style={{ width: '100%', height: '500px' }}>
//       <Radar data={data} options={options} />
//       <div className="legend-container">
//         <div className="legend-item">
//           <div className="legend-color generative-ai-color"></div> <span>Generative AI</span>
//         </div>
//         <div className="legend-item">
//           <div className="legend-color spatial-computing-color"></div> <span>Spatial Computing</span>
//         </div>
//       </div>
//     </div>
//   );
// };

export default RadarChartParent;
