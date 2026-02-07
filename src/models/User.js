/**
 * Classe User - Modélise les données utilisateur
 * Normalise et formate les données de l'API
 * @class
 */

class User {
  /**
   * Crée une instance User
   * @param {Object} data - Données brutes de l'API
   */
  constructor(data) {
    this.id = data.id;
    this.firstName = data.userInfos.firstName;
    this.lastName = data.userInfos.lastName;
    this.age = data.userInfos.age;

    // Normalisation : todayScore OU score
    this.score = data.todayScore || data.score;

    this.keyData = data.keyData;
  }

  /**
   * Retourne score formaté en pourcentage
   * @returns {number} Score sur 100
   */
  getFormattedScore() {
    return Math.round(this.score * 100);
  }

  /**
   * Retourne calories formatées
   * @returns {string} Calories avec unité (ex: "1,930kCal")
   */
  getFormattedCalories() {
    return `${this.keyData.calorieCount.toLocaleString()}kCal`;
  }

  /**
   * Retourne les protéines formatées
   * @returns {string} Protéines avec unité (ex: "155g")
   */
  getFormattedProteins() {
    return `${this.keyData.proteinCount.toLocaleString()}g`;
  }

  /**
   * Retourne les glucides formatés
   * @returns {string} Glucides avec unité (ex: "290g")
   */
  getFormattedCarbs() {
    return `${this.keyData.carbohydrateCount.toLocaleString()}g`;
  }

  /**
   * Retourne les lipides formatés
   * @returns {string} Lipides avec unité (ex: "50g")
   */
  getFormattedLipids() {
    return `${this.keyData.lipidCount.toLocaleString()}g`;
  }
}

export default User;
