/**
 * Classe AverageSessions - Modélise les données de sessions moyennes
 * Durée moyenne des sessions par jour de la semaine
 * @class
 */
class AverageSessions {
  /**
   * Crée une instance AverageSessions
   * @param {Object} data - Données brutes de l'API
   */
  constructor(data) {
    this.userId = data.userId;
    this.sessions = data.sessions;
  }
}

export default AverageSessions;
