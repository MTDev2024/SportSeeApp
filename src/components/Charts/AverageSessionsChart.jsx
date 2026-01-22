import PropTypes from "prop-types";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
// ↑ Ajouter YAxis

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
    <div className="bg-primary rounded-lg h-full p-4 overflow-hidden">
      <h3 className="font-roboto text-[15px] font-medium text-white opacity-50 text-start">
        Durée moyenne des <br /> sessions
      </h3>

      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 20, right: 5, bottom: 20, left: 5 }}
        >
          <XAxis
            dataKey="day"
            tickLine={false}
            axisLine={false}
            padding={{ left: 0, right: 0 }}
            tickFormatter={(day) => {
              const jours = ["L", "M", "M", "J", "V", "S", "D"];
              return jours[day - 1];
            }}
            tick={{
              fill: "#FFFFFF",
              opacity: 0.5,
              fontSize: 12,
              fontFamily: "Roboto",
            }}
          />

          {/* YAxis caché avec domain pour limiter la courbe */}
          <YAxis domain={["dataMin - 10", "dataMax + 10"]} hide={true} />

          <Tooltip content={renderTooltip} cursor={false} />

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
