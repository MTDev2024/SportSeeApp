import { useParams } from "react-router-dom";
import ActivityChart from "../components/Charts/ActivityChart";
import Greeting from "../components/Greeting";
import KeyDataCard from "../components/UI/KeyDataCard";
import caloriesIcon from "../assets/energy.svg";
import proteinIcon from "../assets/chicken.svg";
import glucidIcon from "../assets/apple.svg";
import lipidIcon from "../assets/cheeseburger.svg";
import AverageSessionsChart from "../components/Charts/AverageSessionsChart";
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
 * Page de profil utilisateur avec dashboard sportif.
 * Affiche 4 graphiques Recharts et les données clés (calories, protéines, etc.)
 * Affiche un message d'erreur si l'utilisateur n'existe pas
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

  if (loading || !activityData || !averageSessions || !performanceData) {
    return <div className="p-6">Chargement...</div>;
  }
  if (error) return <div>Erreur : {error}</div>;
  if (!user) return <div>Pas de données</div>;

  const userScore = user.score;

  const calorieCount = user.getFormattedCalories();
  const proteinCount = user.getFormattedProteins();
  const carbohydrateCount = user.getFormattedCarbs();
  const lipidCount = user.getFormattedLipids();

  return (
    <div className="pt-16 pl-28">
      <Greeting firstName={user.firstName} />

      {/* Container centré + largeur max */}
      <div className="max-w-[1125px] w-full mx-auto mt-12 ">
        <div className="grid grid-cols-2 gap-4 lg:hidden mb-6">
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

        {/* Layout principal */}
        <div className="flex gap-8">
          {/* Zone graphiques */}
          <div className="flex-1 flex flex-col gap-6">
            {/* Activité quotidienne */}
            <ActivityChart data={activityData?.sessions} />

            {/* 3 graphiques carrés*/}
            <div className="flex gap-6 px-2">
              <div className="flex-1 aspect-square">
                <AverageSessionsChart data={averageSessions?.sessions} />
              </div>
              <div className="flex-1 aspect-square bg-dark-gray rounded-lg">
                <PerformanceChart data={performanceData} />
              </div>
              <div className="flex-1 aspect-square bg-light-gray rounded-lg">
                <ScoreChart score={userScore} />
              </div>
            </div>
          </div>

          <div className="hidden lg:flex flex-col gap-9 w-64">
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
