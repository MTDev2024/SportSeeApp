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
 * Affiche les performances utilisateur par type d'activité (cardio, énergie, endurance, force, vitesse, intensité)
 *
 * @param {Object} props
 * @param {Object} props.data - Données de performance contenant le dictionnaire kind et le tableau data
 */
function PerformanceChart({ data }) {
  /**
   * Traduit labels anglais -> français
   * @param {string} value - Label anglais
   * @returns {string} Label français
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

  // Transformation des données :
  // 1. [...data.data] → Copie du tableau (sans modifier original)
  // 2. .reverse() → Inverse l'ordre
  // 3. .map() → Transforme chaque point du tableau
  const formattedData = [...data.data].reverse().map((point) => {
    // Pour CHAQUE point du tableau :
    return {
      // Conserve la valeur telle quelle (80, 120, 140...)
      value: point.value,

      // Transforme le kind :
      // - point.kind = nombre (1, 2, 3...)
      // - data.kind[point.kind] traduit nombre -> mot anglais
      // - formatLabel() traduit anglais -> français
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

        {/* Labels */}
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
