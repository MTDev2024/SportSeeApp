import PropTypes from "prop-types";
import { ResponsiveContainer, RadialBarChart, RadialBar } from "recharts";

/**
 * Composant ScoreChart - Jauge circulaire du score
 * Affiche le pourcentage de l'objectif quotidien atteint
 *
 * @param {Object} props
 * @param {number} props.score - Score entre 0 et 1 (ex: 0.12 = 12%)
 */
function ScoreChart({ score }) {
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
    <div className="bg-[#FBFBFB] rounded-lg p-6 h-full flex flex-col shadow-lg shadow-black/30">
      <h3 className="text-[15px] font-medium mb-4">Score</h3>

      <div className="flex-1 flex items-center justify-center">
        <div className="relative w-full h-full">
          <ResponsiveContainer width="100%" height="100%">
            <RadialBarChart
              cx="50%"
              cy="50%"
              data={data} // 2 cercles
              innerRadius="60%" // Début du cercle (creux au centre)
              outerRadius="100%" // Fin du cercle (épaisseur = 10%)
              startAngle={90}
              endAngle={450} // Tour complet (450 - 90 = 360°)
            >
              {/* 
                RadialBar dessine les 2 barres :
                - La 1ère (Fond blanc) fera un cercle complet
                - La 2ème (Score rouge) fera un arc partiel en fonction du score
              */}
              <RadialBar dataKey="value" cornerRadius={10} />
            </RadialBarChart>
          </ResponsiveContainer>

          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <p className="text-[26px] font-bold text-[#282D30]">
              {scorePercent}%
            </p>
            <p className="text-[16px] text-[#74798C] mt-1">de votre</p>
            <p className="text-[16px] text-[#74798C]">objectif</p>
          </div>
        </div>
      </div>
    </div>
  );
}

ScoreChart.propTypes = {
  score: PropTypes.number.isRequired,
};

export default ScoreChart;
