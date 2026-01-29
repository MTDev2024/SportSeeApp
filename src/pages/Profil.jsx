import { useParams } from "react-router-dom";
import ActivityChart from "../components/Charts/ActivityChart";
// import { USER_ACTIVITY } from "../data/mockData";
import Greeting from "../components/Greeting";
import KeyDataCard from "../components/UI/KeyDataCard";
import caloriesIcon from "../assets/energy.svg";
import proteinIcon from "../assets/chicken.svg";
import glucidIcon from "../assets/apple.svg";
import lipidIcon from "../assets/cheeseburger.svg";
import AverageSessionsChart from "../components/Charts/AverageSessionsChart";
// import { USER_AVERAGE_SESSIONS } from "../data/mockData";
// import { USER_PERFORMANCE } from "../data/mockData";
import PerformanceChart from "../components/Charts/PerformanceChart";
import ScoreChart from "../components/Charts/ScoreChart";
import { useState, useEffect } from "react";
import {
  getUserAverageSessions,
  getUserData,
  getUserActivity,
  getUserPerformance,
} from "../services/api";

/**
 * Page Profil - Affiche les données de l'utilisateur
 * Récupère l'ID utilisateur depuis l'URL et affiche ses informations
 * Si l'utilisateur n'existe pas, affiche un message d'erreur
 */

function Profil() {
  // Récupération ID depuis URL
  const { id } = useParams();
  const [user, setUser] = useState(null); // 1. Données
  const [loading, setLoading] = useState(true); // 2. État loading
  const [error, setError] = useState(null); // 3. Message d'erreur
  const [activityData, setActivityData] = useState(null);
  const [averageSessions, setAverageSessions] = useState(null);
  const [performanceData, setPerformanceData] = useState(null);

  useEffect(() => {
    getUserData(Number(id))
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });

    getUserActivity(Number(id))
      .then((data) => setActivityData(data))
      .catch((err) => setError(err.message));
    getUserAverageSessions(Number(id))
      .then((data) => setAverageSessions(data))
      .catch((err) => setError(err.message));
    getUserPerformance(Number(id))
      .then((data) => setPerformanceData(data))
      .catch((err) => setError(err.message));
  }, [id]);

  if (loading) return <div>Chargement...</div>;
  if (error) return <div>Erreur : {error}</div>;
  if (!user) return <div>Pas de données</div>;

  const userScore = user.todayScore || user.score;

  const calorieCount = `${user.keyData.calorieCount.toLocaleString()}kCal`;
  const proteinCount = `${user.keyData.proteinCount.toLocaleString()}g`;
  const carbohydrateCount = `${user.keyData.carbohydrateCount.toLocaleString()}g`;
  const lipidCount = `${user.keyData.lipidCount.toLocaleString()}g`;
  // const activityData = USER_ACTIVITY.find((a) => a.userId === Number(id));
  // const sessionsData = USER_AVERAGE_SESSIONS.find(
  //   (s) => s.userId === Number(id),
  // );

  // const performanceData = USER_PERFORMANCE.find((p) => p.userId === Number(id));

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
            <ActivityChart data={activityData?.sessions} />

            <div className="flex gap-6 h-[260px] border border-orange-500">
              <div className="flex-1">
                <AverageSessionsChart data={averageSessions?.sessions} />
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
