import axios from "axios";
import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from "../data/mockData";

const API_BASE_URL = "http://localhost:3000";
const USE_MOCK = import.meta.env.VITE_USE_MOCK === "true";

// Affichage mode utilisé
console.log(USE_MOCK ? "Mode : MOCK" : "Mode : API");

/**
 * Récupère les données principales de l'utilisateur
 * @param {number} userId - ID de l'utilisateur
 * @returns {Promise<Object>} Données utilisateur avec infos et keyData
 * @throws {Error} Si l'utilisateur n'existe pas
 */

export async function getUserData(userId) {
  try {
    if (USE_MOCK) {
      const user = USER_MAIN_DATA.find((u) => u.id === userId);
      if (!user) {
        throw new Error(`User ${userId} n'existe pas`);
      }
      return user;
    }

    const response = await axios.get(`${API_BASE_URL}/user/${userId}`);
    return response.data.data;
  } catch (error) {
    console.error(`Erreur getUserData(${userId}):`, error.message);
    throw error;
  }
}

/**
 * Récupère l'activité quotidienne de l'utilisateur
 * @param {number} userId - ID de l'utilisateur
 * @returns {Promise<Object>} Sessions avec poids (kg) et calories brûlées
 * @throws {Error} Si l'utilisateur n'existe pas
 */

export async function getUserActivity(userId) {
  try {
    if (USE_MOCK) {
      const userActivity = USER_ACTIVITY.find((u) => u.userId === userId);
      if (!userActivity) {
        throw new Error(`User ${userId} n'existe pas`);
      }
      return userActivity;
    }

    const response = await axios.get(`${API_BASE_URL}/user/${userId}/activity`);
    return response.data.data;
  } catch (error) {
    console.error(`Erreur getUserActivity(${userId}):`, error.message);
    throw error;
  }
}

/**
 * Récupère les sessions moyennes de l'utilisateur
 * @param {number} userId - ID de l'utilisateur
 * @returns {Promise<Object>} Durée moyenne des sessions par jour
 * @throws {Error} Si l'utilisateur n'existe pas
 */
export async function getUserAverageSessions(userId) {
  try {
    if (USE_MOCK) {
      const userAverageSessions = USER_AVERAGE_SESSIONS.find(
        (u) => u.userId === userId,
      );
      if (!userAverageSessions) {
        throw new Error(`User ${userId} n'existe pas`);
      }
      return userAverageSessions;
    }

    const response = await axios.get(
      `${API_BASE_URL}/user/${userId}/average-sessions`,
    );
    return response.data.data;
  } catch (error) {
    console.error(`Erreur getUserAverageSessions(${userId}):`, error.message);
    throw error;
  }
}

/**
 * Récupère les performances de l'utilisateur
 * @param {number} userId - ID de l'utilisateur
 * @returns {Promise<Object>} Performances par type (cardio, énergie, endurance, force, vitesse, intensité)
 * @throws {Error} Si l'utilisateur n'existe pas
 */
export async function getUserPerformance(userId) {
  try {
    if (USE_MOCK) {
      const userPerformance = USER_PERFORMANCE.find((u) => u.userId === userId);
      if (!userPerformance) {
        throw new Error(`User ${userId} n'existe pas`);
      }
      return userPerformance;
    }

    const response = await axios.get(
      `${API_BASE_URL}/user/${userId}/performance`,
    );
    return response.data.data;
  } catch (error) {
    console.error(`Erreur getUserPerformance(${userId}):`, error.message);
    throw error;
  }
}
