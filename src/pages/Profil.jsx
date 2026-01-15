import { useParams } from "react-router-dom";
import { USER_MAIN_DATA } from "../data/mockData";
import Greeting from "../components/Greeting";
import KeyDataCard from "../components/UI/KeyDataCard";
import caloriesIcon from "../assets/energy.svg";
import proteinIcon from "../assets/chicken.svg";
import glucidIcon from "../assets/apple.svg";
import lipidIcon from "../assets/cheeseburger.svg";

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

  const calorieCount = `${user.keyData.calorieCount.toLocaleString()}kCal`;
  const proteinCount = `${user.keyData.proteinCount.toLocaleString()}g`;
  const carbohydrateCount = `${user.keyData.carbohydrateCount.toLocaleString()}g`;
  const lipidCount = `${user.keyData.lipidCount.toLocaleString()}g`;

  return (
    <div className="p-12">
      <Greeting firstName={user.userInfos.firstName} />

      <div className="flex gap-8">
        {/* Zone graphiques */}
        <div className="flex-1 text-center text-xl">Graphiques</div>

        {/* Zone cards */}
        <div className="flex flex-col gap-6 w-64">
          <KeyDataCard
            icon={caloriesIcon}
            value={calorieCount}
            label="Calories"
            iconBg="bg-icon-calories"
          />
          <KeyDataCard
            icon={proteinIcon}
            value={proteinCount}
            label="Protéines"
            iconBg="bg-icon-protein"
          />
          <KeyDataCard
            icon={glucidIcon}
            value={carbohydrateCount}
            label="Glucides"
            iconBg="bg-icon-carbs"
          />
          <KeyDataCard
            icon={lipidIcon}
            value={lipidCount}
            label="Lipides"
            iconBg="bg-icon-lipids"
          />
        </div>
      </div>
    </div>
  );
}

export default Profil;
