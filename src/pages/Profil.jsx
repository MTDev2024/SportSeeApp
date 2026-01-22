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
import { USER_PERFORMANCE } from "../data/mockData";
import PerformanceChart from "../components/Charts/PerformanceChart";
import ScoreChart from "../components/Charts/ScoreChart";

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

  const userScore = user.todayScore || user.score;

  const calorieCount = `${user.keyData.calorieCount.toLocaleString()}kCal`;
  const proteinCount = `${user.keyData.proteinCount.toLocaleString()}g`;
  const carbohydrateCount = `${user.keyData.carbohydrateCount.toLocaleString()}g`;
  const lipidCount = `${user.keyData.lipidCount.toLocaleString()}g`;
  const activityData = USER_ACTIVITY.find((a) => a.userId === Number(id));
  const sessionsData = USER_AVERAGE_SESSIONS.find(
    (s) => s.userId === Number(id),
  );

  const performanceData = USER_PERFORMANCE.find((p) => p.userId === Number(id));

  return (
    <div className="py-12 px-6 ">
      <Greeting firstName={user.userInfos.firstName} />

      {/* Container centré + largeur max */}
      <div className="max-w-[1124px] w-full mx-auto mt-12 border-2 border-blue-500 ">
        {/* Layout principal */}
        <div className="flex gap-8 border-4 border-yellow-600">
          {/* Zone graphiques */}
          <div className="flex-1 flex flex-col gap-6">
            {/* Activité quotidienne - Full W */}
            <ActivityChart data={activityData.sessions} />

            <div className="flex gap-6 h-[260px] border border-orange-500">
              <div className="flex-1">
                <AverageSessionsChart data={sessionsData.sessions} />
              </div>
              <div className="flex-1 bg-dark-gray rounded-lg">
                <PerformanceChart data={performanceData} />
              </div>
              <div className="flex-1 bg-light-gray rounded-lg">
                <ScoreChart score={userScore} />
              </div>
            </div>
          </div>

          {/* Zone cards */}
          <div className="flex flex-col gap-9 w-64 border border-red-400">
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
