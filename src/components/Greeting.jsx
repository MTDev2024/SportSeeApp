import PropTypes from "prop-types";

/**
 * Message de bienvenue personnalisé avec le prénom de l'utilisateur
 * @param {Object} props
 * @param {string} props.firstName
 */

function Greeting({ firstName }) {
  return (
    <div className="mb-12">
      <h1 className="text-hero font-medium">
        Bonjour <span className="text-primary">{firstName}</span>
      </h1>
      <p className="text-body font-normal mt-4">
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </p>
    </div>
  );
}

Greeting.propTypes = {
  firstName: PropTypes.string.isRequired,
};

export default Greeting;
