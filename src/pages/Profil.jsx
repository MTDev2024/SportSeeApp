import { useParams } from "react-router-dom";
import { USER_MAIN_DATA } from "../data/mockData";

/**
 * Page Profil - Affiche les données de l'utilisateur
 * Récupère l'ID utilisateur depuis l'URL et affiche ses informations
 * Si l'utilisateur n'existe pas, affiche un message d'erreur
 */

function Profil() {
  // Récupération ID depuis URL
  const { id } = useParams();
  // Recherche utilisateur correspondant (conversion string → number)
  const user = USER_MAIN_DATA.find((u) => u.id === Number(id));

  if (!user) {
    return (
      <div className="p-12">
        <h1 className="text-hero font-medium text-primary">
          Utilisateur introuvable
        </h1>
        <p className="text-body">L'utilisateur avec l'ID {id} n'existe pas.</p>
      </div>
    );
  }

  return (
    <div className="p-12">
      <div className="mb-12">
        <h1 className="text-hero font-medium">
          Bonjour{" "}
          <span className="text-primary">{user.userInfos.firstName}</span>
        </h1>
        <p className="text-body font-normal mt-4">
          Félicitation ! Vous avez explosé vos objectifs hier 👏
        </p>
      </div>

      {/* Graphiques */}
    </div>
  );
}

export default Profil;
