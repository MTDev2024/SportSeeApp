import PropTypes from "prop-types";
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from "recharts";

/**
 * Composant AverageSessionsChart - Durée moyenne des sessions
 * Affiche la durée moyenne des sessions pour chaque jour de la semaine
 *
 * @param {Object} props
 * @param {Array} props.data - Données sessions moyennes
 */
function AverageSessionsChart({ data }) {
  const renderTooltip = ({ active, payload }) => {
    if (!active || !payload || payload.length === 0) {
      return null;
    }

    return (
      <div className="bg-white p-2">
        <p className="text-black">{payload[0].value} min</p>
      </div>
    );
  };

  return (
    <div className="bg-primary rounded-lg h-full p-4">
      <h3 className="font-roboto text-[15px] font-medium text-white opacity-50 text-start">
        Durée moyenne des <br /> sessions
      </h3>

      {/* Graphique responsive (occupe espace restant) */}
      <ResponsiveContainer width="100%" aspect={1}>
        <LineChart
          data={data}
          margin={{ top: 20, right: 10, bottom: 10, left: 10 }}
        >
          <XAxis
            dataKey="day"
            tickLine={false}
            axisLine={false}
            tickFormatter={(day) => {
              const jours = ["L", "M", "M", "J", "V", "S", "D"];
              return jours[day - 1]; // day va de 1 à 7
            }}
            tick={{
              fill: "#FFFFFF",
              opacity: 0.5,
              fontSize: 12,
              fontFamily: "Roboto",
            }}
          />

          <Tooltip
            content={renderTooltip}
            cursor={false} // Suppression ligne verticale
          />

          <Line
            type="natural"
            dataKey="sessionLength"
            stroke="#FFFFFF"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 4, fill: "#FFFFFF" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

AverageSessionsChart.propTypes = {
  data: PropTypes.array.isRequired,
};

export default AverageSessionsChart;
