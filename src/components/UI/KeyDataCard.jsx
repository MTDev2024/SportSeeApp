import PropTypes from "prop-types";

/**
 * Carte affichant une donnée nutritionnelle clé
 * @param {Object} props
 * @param {string} props.icon - Chemin vers l'icône
 * @param {string} props.value - Valeur formatée (ex: "1,930kCal")
 * @param {string} props.label - Label descriptif (ex: "Calories")
 * @param {string} props.iconBg - Classe Tailwind pour le fond de l'icône
 */

function KeyDataCard({ icon, value, label, iconBg }) {
  return (
    <div className="flex items-center gap-6 bg-light-gray p-8 rounded-md">
      <div
        className={`w-16 h-16 flex items-center justify-center rounded-md ${iconBg}`}
        aria-hidden="true"
      >
        <img src={icon} alt="" className="w-8 h-8" />
      </div>

      <div>
        <p className="text-card-value font-bold">{value}</p>
        <p className="text-label text-gray-500">{label}</p>
      </div>
    </div>
  );
}

KeyDataCard.propTypes = {
  icon: PropTypes.string.isRequired, // Chemin image
  value: PropTypes.string.isRequired, // Ex: "1,930kCal"
  label: PropTypes.string.isRequired, // Ex: "Calories"
  iconBg: PropTypes.string.isRequired, // Classe Tailwind bg color
};

export default KeyDataCard;
