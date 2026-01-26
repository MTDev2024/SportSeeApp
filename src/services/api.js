import axios from "axios";
import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from "../data/mockData";

const API_BASE_URL = "http://localhost:3000";

const USE_MOCK = import.meta.env.VITE_USE_MOCK === "true";

/**
 * Récupère les données principales d'un utilisateur
 * @param {number} userId - ID de l'utilisateur
 * @returns {Promise<Object>} Données utilisateur
 */
export async function getUserData(userId) {
  try {
    // Mode Mock
    if (USE_MOCK) {
      console.log(` [MOCK] getUserData(${userId})`);
      const user = USER_MAIN_DATA.find((u) => u.id === userId);
      if (!user) {
        throw new Error(`User ${userId} n'existe pas `);
      }
      return user;
    }

    // Mode API
    console.log(`[API] getUserData(${userId})`);
    const response = await axios.get(`${API_BASE_URL}/user/${userId}`);
    return response.data.data;
  } catch (error) {
    console.error(`Erreur getUserData(${userId}):`, error.message);
    throw error;
  }
}

/**
 * Récupère l'activité quotidienne d'un utilisateur
 * @param {number} userId - ID de l'utilisateur
 * @returns {Promise<Object>} Données d'activité (sessions avec kilogram et calories)
 */

export async function getUserActivity(userId) {
  try {
    // Mode Mock
    if (USE_MOCK) {
      console.log(`[MOCK] getUserActivity(${userId})`);
      const userActivity = USER_ACTIVITY.find((u) => u.userId === userId);
      if (!userActivity) {
        throw new Error(`User ${userId} n'existe pas `);
      }
      return userActivity;
    }
    // Mode API
    console.log(`[API] getUserActivity(${userId})`);
    const response = await axios.get(`${API_BASE_URL}/user/${userId}/activity`);
    return response.data.data;
  } catch (error) {
    console.error(`Erreur getUserActivity(${userId}):`, error.message);
    throw error;
  }
}

/**
 * Récupère les informations de session d'un utilisateur
 * @param {number} userId - ID de l'utilisateur
 * @returns {Promise<Object>} Données de sessions (Durée)
 */

export async function getUserAverageSessions(userId) {
  try {
    // Mode Mock
    if (USE_MOCK) {
      console.log(`[MOCK] getUserAverageSessions(${userId})`);
      const userAverageSessions = USER_AVERAGE_SESSIONS.find(
        (u) => u.userId === userId,
      );
      if (!userAverageSessions) {
        throw new Error(`User ${userId} n'existe pas `);
      }
      return userAverageSessions;
    }
    // Mode API
    console.log(`[API] getUserAverageSessions(${userId})`);
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
 * Récupère les données de performances d'un utilisateur (cardio, energie, endurance, etc.)
 * @param {number} userId - ID de l'utilisateur
 * @returns {Promise<Object>} Données de sessions (Durée)
 */

export async function getUserPerformance(userId) {
  try {
    // Mode Mock
    if (USE_MOCK) {
      console.log(`[MOCK] getUserPerformance(${userId}) `);
      const userPerformance = USER_PERFORMANCE.find((u) => u.userId === userId);
      if (!userPerformance) {
        throw new Error(`User ${userId} n'existe pas `);
      }
      return userPerformance;
    }
    // Mode API
    console.log(`[API] getUserPerformance(${userId})`);
    const response = await axios.get(
      `${API_BASE_URL}/user/${userId}/performance`,
    );
    return response.data.data;
  } catch (error) {
    console.error(`Erreur getUserPerformance(${userId}):`, error.message);
    throw error;
  }
}
