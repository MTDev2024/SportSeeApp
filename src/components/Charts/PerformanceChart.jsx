import PropTypes from "prop-types";
import {
  ResponsiveContainer,
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
} from "recharts";

/**
 * Radar chart des performances par type d'activité
 * @param {Object} props
 * @param {Object} props.data - Données de performance avec kind et valeurs
 */
function PerformanceChart({ data }) {
  // Gestion du cas pas de données
  if (!data || !data.data || data.data.length === 0) {
    return (
      <div className="bg-[#282D30] rounded-lg h-full flex items-center justify-center">
        <p className="text-white opacity-50">Chargement des performances...</p>
      </div>
    );
  }

  /**
   * Traduit les labels anglais en français
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
  // 1. [...data.data] → Copie du tableau (sans modifier l'original)
  // 2. .reverse() → Inverse l'ordre
  // 3. .map() → Transforme chaque point
  const formattedData = [...data.data].reverse().map((point) => ({
    value: point.value,
    kind: formatLabel(data.kind[point.kind]),
  }));

  return (
    <div
      className="bg-[#282D30] rounded-lg p-1 h-full"
      role="figure"
      aria-labelledby="performance-chart-title"
      aria-describedby="performance-chart-desc"
    >
      <p id="performance-chart-desc" className="sr-only">
        Graphique radar représentant les performances dans 6 catégories :
        intensité, vitesse, force, endurance, énergie et cardio.
      </p>

      <h2 id="performance-chart-title" className="sr-only">
        Graphique de performance
      </h2>

      <ResponsiveContainer width="100%" aspect={1}>
        <RadarChart
          data={formattedData}
          margin={{ top: 5, right: 30, bottom: 5, left: 30 }}
          accessibilityLayer
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
    </div>
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
  }),
};

export default PerformanceChart;
