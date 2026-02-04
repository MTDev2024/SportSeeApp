import PropTypes from "prop-types";

/**
 * Tooltip personnalisé pour le graphique d'activité
 * @param {Object} props
 * @param {boolean} props.active - Tooltip actif au survol
 * @param {Array} props.payload - Données du point survolé
 */
function CustomTooltip({ active, payload }) {
  // Si non actif ou pas de données -> ne rien afficher
  if (!active || !payload || payload.length === 0) {
    return null;
  }

  // Extraction des valeurs par dataKey
  const weightData = payload.find((item) => item.dataKey === "kilogram");
  const caloriesData = payload.find((item) => item.dataKey === "calories");

  const weight = weightData ? weightData.value : 0;
  const calories = caloriesData ? caloriesData.value : 0;

  return (
    <div className="bg-red-500 text-white p-2" role="tooltip">
      <p className="font-roboto text-tooltip font-medium">{weight}kg</p>
      <p className="font-roboto text-tooltip font-medium">{calories}kCal</p>
    </div>
  );
}

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.arrayOf(
    PropTypes.shape({
      dataKey: PropTypes.string,
      value: PropTypes.number,
      name: PropTypes.string,
    }),
  ),
};

export default CustomTooltip;
