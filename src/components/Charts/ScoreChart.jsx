import PropTypes from "prop-types";
import { ResponsiveContainer, RadialBarChart, RadialBar } from "recharts";

/**
 * Graphique circulaire du score journalier
 * @param {Object} props
 * @param {number} props.score - Score entre 0 et 1 (ex: 0.12 = 12%)
 */
function ScoreChart({ score }) {
  // Gestion du cas pas de données ( 0 valide)
  if (score === undefined || score === null) {
    return (
      <div className="bg-[#FBFBFB] rounded-lg h-full flex items-center justify-center">
        <p className="text-gray-400">Chargement du score...</p>
      </div>
    );
  }

  /**
   * Prépare les données pour RadialBarChart
   * 2 cercles superposés :
   * 1 Cercle de fond (blanc/gris) à 100%
   * 1 Arc rouge au pourcentage du score affiché par-dessus
   *
   * @param {number} score - Score entre 0 et 1
   * @returns {Array} 2 objets -> 2 barres radiales
   */
  const prepareData = (score) => {
    const scorePercent = score * 100;

    return [
      {
        name: "Fond",
        value: 100, // cercle complet
        fill: "#FBFBFB",
      },

      {
        name: "Score",
        value: scorePercent,
        fill: "#FF0000",
      },
    ];
  };

  const data = prepareData(score);
  const scorePercent = Math.round(score * 100);

  return (
    <div className="bg-[#FBFBFB] rounded-lg p-3 h-full flex flex-col shadow-lg shadow-black/30">
      <h2 className="text-[15px] font-medium mb-4">Score</h2>
      <div className="flex-1 flex items-center justify-center">
        <div className="relative w-full h-full">
          <ResponsiveContainer width="100%" height="100%">
            <RadialBarChart
              cx="50%"
              cy="50%"
              data={data} // 2 cercles
              innerRadius="60%" // Début cercle
              outerRadius="100%" // Fin cercle
              startAngle={90}
              endAngle={450} // Tour complet (450 - 90 = 360°)
            >
              {/* 
                RadialBar dessine 2 barres :
                - 1ère (Fond blanc) -> cercle complet
                - 2ème (Score rouge) -> arc partiel selon score
              */}
              <RadialBar dataKey="value" cornerRadius={10} />
            </RadialBarChart>
          </ResponsiveContainer>

          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <p className="text-lg xl:text-[26px] font-bold text-[#282D30]">
              {scorePercent}%
            </p>
            <p className="text-xs xl:text-[16px] text-[#74798C]">de votre</p>
            <p className="text-xs xl:text-[16px] text-[#74798C]">objectif</p>
          </div>
        </div>
      </div>
    </div>
  );
}

ScoreChart.propTypes = {
  score: PropTypes.number,
};

export default ScoreChart;
