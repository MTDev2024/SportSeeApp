/**
 * Classe Activity - Modélise les données d'activité quotidienne
 * @class
 */

class Activity {
  /**
   * Crée une instance Activity
   * @param {Object} data - Données brutes de l'API
   */
  constructor(data) {
    this.userId = data.userId;
    this.sessions = data.sessions;
  }
}

export default Activity;
