import PropTypes from "prop-types";
import {
  ResponsiveContainer,
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
} from "recharts";

/**
 * Composant PerformanceChart - Graphique radar des performances
 * Affiche les performances de l'utilisateur par type d'activité (cardio, énergie, endurance, force, vitesse, intensité)
 *
 * @param {Object} props
 * @param {Object} props.data - Données de performance contenant le dictionnaire kind et le tableau data
 */
function PerformanceChart({ data }) {
  /**
   * Traduit les labels anglais en français
   * @param {string} value - Label en anglais
   * @returns {string} Label en français
   */
  const formatLabel = (value) => {
    if (value === "cardio") return "Cardio";
    if (value === "energy") return "Energie";
    if (value === "endurance") return "Endurance";
    if (value === "strength") return "Force";
    if (value === "speed") return "Vitesse";
    if (value === "intensity") return "Intensité";
    return value;
  };

  // Transformation des données : conversion kind (number) en kind (string traduit)
  const formattedData = data.data.map((point) => {
    return {
      value: point.value,
      kind: formatLabel(data.kind[point.kind]),
    };
  });

  return (
    <ResponsiveContainer width="100%" aspect={1}>
      <RadarChart
        data={formattedData}
        margin={{ top: 5, right: 30, bottom: 5, left: 30 }}
      >
        <PolarGrid radialLines={false} stroke="#FFFFFF" strokeOpacity={0.2} />
        <PolarAngleAxis
          dataKey="kind"
          tick={{
            fill: "#FFFFFF",
            fontSize: 12,
            fontFamily: "Roboto",
          }}
        />
        <Radar dataKey="value" fill="#FF0101" fillOpacity={0.7} />
      </RadarChart>
    </ResponsiveContainer>
  );
}

PerformanceChart.propTypes = {
  data: PropTypes.shape({
    userId: PropTypes.number.isRequired,
    kind: PropTypes.object.isRequired,
    data: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.number.isRequired,
        kind: PropTypes.number.isRequired,
      }),
    ).isRequired,
  }).isRequired,
};

export default PerformanceChart;
