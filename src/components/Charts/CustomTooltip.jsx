import PropTypes from "prop-types";

/**
 * Composant CustomTooltip - Tooltip personnalisé pour les graphiques
 * Affiche les données au survol d'un point du graphique
 *
 * @param {Object} props
 * @param {boolean} props.active - Indique si le tooltip actif
 * @param {Array} props.payload - Données du point survolé
 */
function CustomTooltip({ active, payload }) {
  // Si non actif ou 0 données -> ne rien afficher
  if (!active || !payload || payload.length === 0) {
    return null;
  }

  // Extraction des valeurs
  const weight = payload[0].value;
  const calories = payload[1].value;

  return (
    <div className="bg-red-500 text-white p-2">
      <p className="font-roboto text-tooltip font-medium">{weight}kg</p>
      <p className="font-roboto text-tooltip font-medium">{calories}kCal</p>
    </div>
  );
}

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
};

export default CustomTooltip;
