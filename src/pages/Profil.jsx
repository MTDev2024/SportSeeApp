import { useParams } from "react-router-dom";
import { USER_MAIN_DATA } from "../data/mockData";
import ActivityChart from "../components/Charts/ActivityChart";
import { USER_ACTIVITY } from "../data/mockData";
import Greeting from "../components/Greeting";
import KeyDataCard from "../components/UI/KeyDataCard";
import caloriesIcon from "../assets/energy.svg";
import proteinIcon from "../assets/chicken.svg";
import glucidIcon from "../assets/apple.svg";
import lipidIcon from "../assets/cheeseburger.svg";
import AverageSessionsChart from "../components/Charts/AverageSessionsChart";
import { USER_AVERAGE_SESSIONS } from "../data/mockData";

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
  const activityData = USER_ACTIVITY.find((a) => a.userId === Number(id));
  const sessionsData = USER_AVERAGE_SESSIONS.find(
    (s) => s.userId === Number(id),
  );

  return (
    <div className="py-12 px-24">
      <Greeting firstName={user.userInfos.firstName} />

      {/* Container centré avec largeur max */}
      <div className="max-w-[1100px] mt-12">
        {/* Layout principal : graphiques à gauche, cards à droite */}
        <div className="flex gap-8">
          {/* Zone graphiques */}
          <div className="flex-1 flex flex-col gap-6">
            {/* Ligne 1 : Activité quotidienne (toute la largeur) */}
            <ActivityChart data={activityData.sessions} />

            {/* Ligne 2 : 3 petits graphiques carrés côte à côte */}
            <div className="flex gap-6 h-[260px]">
              <div className="flex-1">
                <AverageSessionsChart data={sessionsData.sessions} />
              </div>
              <div className="flex-1 bg-dark-gray rounded-lg">
                {/* TODO: PerformanceChart (radar) */}
              </div>
              <div className="flex-1 bg-light-gray rounded-lg">
                {/* TODO: ScoreChart (donut) */}
              </div>
            </div>
          </div>

          {/* Zone cards nutritionnelles (alignée verticalement avec les graphiques) */}
          <div className="flex flex-col justify-between w-64">
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
    </div>
  );
}

export default Profil;
