/**
 * Classe Performance - Modélise les données de performance
 * Traduit les labels en français et formate les données
 * @class
 */

class Performance {
  /**
   * Crée une instance Performance
   * @param {Object} data - Données brutes de l'API
   */
  constructor(data) {
    this.userId = data.userId;

    // Transformation : traduit kinds -> français
    this.data = data.data.map((point) => ({
      value: point.value,
      kind: this.translateKind(data.kind[point.kind]),
    }));
  }

  /**
   * Traduit label anglais -> français
   * @param {string} kindLabel - Label en anglais (ex: "strength")
   * @returns {string} Label en français (ex: "Force")
   */
  translateKind(kindLabel) {
    const translations = {
      cardio: "Cardio",
      energy: "Énergie",
      endurance: "Endurance",
      strength: "Force",
      speed: "Vitesse",
      intensity: "Intensité",
    };
    return translations[kindLabel] || kindLabel;
  }
}

export default Performance;
