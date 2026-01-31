import PropTypes from "prop-types";

/**
 * Composant KeyDataCard - Carte affichant donnée nutritionnelle
 * Affiche icône colorée + valeur + label
 *
 * @param {Object} props
 * @param {string} props.icon
 * @param {string} props.value
 * @param {string} props.label
 * @param {string} props.iconBg - Classe Tailwind couleur de fond icône
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
