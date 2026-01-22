import PropTypes from "prop-types";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import CustomTooltip from "./CustomTooltip";

/**
 * Composant ActivityChart - Graphique d'activité quotidienne
 * Affiche le poids (kg) et les calories brûlées par jour sous forme de barres
 *
 * @param {Object} props
 * @param {Array} props.data - Tableau sessions activité
 * @param {string} props.data[].day - Date (YYYY-MM-DD)
 * @param {number} props.data[].kilogram
 * @param {number} props.data[].calories
 */
function ActivityChart({ data }) {
  return (
    <div className="bg-[#FBFBFB] p-6 rounded-lg h-full border border-green-700">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-medium">Activité quotidienne</h2>

        {/* Légende personnalisée */}
        <div className="flex gap-8">
          {/* Élément légende : Poids (kg) */}
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#282D30]"></div>
            <span className="font-roboto text-label font-medium text-gray-500">
              Poids (kg)
            </span>
          </div>

          {/* Élément légende : Calories brûlées */}
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#E60000]"></div>
            <span className="font-roboto text-label font-medium text-gray-500">
              Calories brûlées (kCal)
            </span>
          </div>
        </div>
      </div>

      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} barGap={8} barCategoryGap="30%">
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            tickFormatter={(value) => Number(value.split("-")[2])} // Transforme "2020-07-01" en 1
          />

          {/* 
          Axe Y gauche (visible à droite) pour les kg
          - yAxisId="left" : identifiant unique pour lier aux barres kg
          - orientation="right" : positionné à droite du graphique
          - domain : limites dynamiques (min-2 à max+1) pour s'adapter aux données
        */}
          <YAxis
            yAxisId="left"
            orientation="right"
            domain={["dataMin - 2", "dataMax + 1"]}
            axisLine={false}
            tickLine={false}
          />

          {/* 
          Axe Y droit (caché) pour les calories
          - yAxisId="right" : identifiant unique pour lier aux barres calories
          - hide={true} : invisible mais utilisé pour calculer l'échelle des barres rouges
          - domain : plus large pour donner de l'espace aux barres calories
        */}
          <YAxis
            yAxisId="right"
            domain={["dataMin - 50", "dataMax + 50"]}
            hide={true}
          />

          {/* Tooltip personnalisé au survol */}
          <Tooltip content={<CustomTooltip />} />

          {/* 
          Barres noires : Poids (kg)
          - yAxisId="left" : utilise l'axe Y visible à droite
        */}
          <Bar
            yAxisId="left"
            dataKey="kilogram"
            fill="#282D30"
            name="Poids (kg)"
            radius={[10, 10, 0, 0]}
          />

          {/* 
          Barres rouges : Calories brûlées
          - yAxisId="right" : utilise l'axe Y caché (échelle différente)
        */}
          <Bar
            yAxisId="right"
            dataKey="calories"
            fill="#E60000"
            name="Calories brûlées (kCal)"
            radius={[10, 10, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

// Validation des props
ActivityChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.string.isRequired,
      kilogram: PropTypes.number.isRequired,
      calories: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default ActivityChart;
