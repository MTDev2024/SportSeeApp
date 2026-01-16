import PropTypes from "prop-types";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

/**
 * Composant ActivityChart - Graphique d'activité quotidienne
 * Affiche le poids (kg) et les calories brûlées par jour
 *
 * @param {Object} props
 * @param {Array} props.data - Données d'activité (sessions)
 */
function ActivityChart({ data }) {
  const renderLegend = () => {
    return (
      <div className="flex justify-end gap-8">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#282D30]"></div>
          <span className="font-roboto text-label font-medium text-gray-500">
            Poids (kg)
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#E60000]"></div>
          <span className="font-roboto text-label font-medium text-gray-500">
            Calories brûlées (kCal)
          </span>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-gray-100 p-6 rounded-lg">
      <h2 className="text-lg font-medium mb-4">Activité quotidienne</h2>

      <BarChart width={835} height={320} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="day"
          tickFormatter={(value) => Number(value.split("-")[2])}
        />
        <YAxis />
        <Tooltip />
        <Legend content={renderLegend} verticalAlign="top" />
        <Bar dataKey="kilogram" fill="#282D30" name="Poids (kg)" />
        <Bar dataKey="calories" fill="#E60000" name="Calories brûlées (kCal)" />
      </BarChart>
    </div>
  );
}

ActivityChart.propTypes = {
  data: PropTypes.array.isRequired,
};

export default ActivityChart;
