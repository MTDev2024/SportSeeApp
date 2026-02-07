import axios from "axios";
import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from "../data/mockData";
import User from "../models/User";
import Activity from "../models/Activity";
import Performance from "../models/Performance";
import AverageSessions from "../models/AverageSessions";

const API_BASE_URL = "http://localhost:3000";
const USE_MOCK = import.meta.env.VITE_USE_MOCK === "true";

// Affichage mode utilisé
console.log(USE_MOCK ? "Mode : MOCK" : "Mode : API");

/**
 * Récupère les données principales de l'utilisateur
 * @param {number} userId - ID de l'utilisateur
 * @returns {Promise<User>} Données utilisateur avec infos et keyData
 * @throws {Error} Si l'utilisateur n'existe pas
 */

export async function getUserData(userId) {
  try {
    let rawData;

    if (USE_MOCK) {
      const user = USER_MAIN_DATA.find((u) => u.id === userId);
      if (!user) {
        throw new Error(`User ${userId} n'existe pas`);
      }
      rawData = user;
    } else {
      const response = await axios.get(`${API_BASE_URL}/user/${userId}`);
      rawData = response.data.data;
    }

    return new User(rawData);
  } catch (error) {
    console.error(`Erreur getUserData(${userId}):`, error.message);
    throw error;
  }
}

/**
 * Récupère l'activité quotidienne de l'utilisateur
 * @param {number} userId - ID de l'utilisateur
 * @returns {Promise<Activity>} Instance de Activity avec sessions normalisées
 * @throws {Error} Si l'utilisateur n'existe pas
 */

export async function getUserActivity(userId) {
  try {
    let rawData; // Données brutes

    if (USE_MOCK) {
      const userActivity = USER_ACTIVITY.find((u) => u.userId === userId);
      if (!userActivity) {
        throw new Error(`User ${userId} n'existe pas`);
      }
      rawData = userActivity;
    } else {
      const response = await axios.get(
        `${API_BASE_URL}/user/${userId}/activity`,
      );
      rawData = response.data.data;
    }

    return new Activity(rawData);
  } catch (error) {
    console.error(`Erreur getUserActivity(${userId}):`, error.message);
    throw error;
  }
}

/**
 * Récupère les sessions moyennes de l'utilisateur
 * @param {number} userId - ID de l'utilisateur
 * @returns {Promise<AverageSessions>} Instance de AverageSessions avec durée moyenne par jour
 * @throws {Error} Si l'utilisateur n'existe pas
 */
export async function getUserAverageSessions(userId) {
  try {
    let rawData; // Données brutes

    if (USE_MOCK) {
      const userAverageSessions = USER_AVERAGE_SESSIONS.find(
        (u) => u.userId === userId,
      );
      if (!userAverageSessions) {
        throw new Error(`User ${userId} n'existe pas`);
      }
      rawData = userAverageSessions;
    } else {
      const response = await axios.get(
        `${API_BASE_URL}/user/${userId}/average-sessions`,
      );
      rawData = response.data.data;
    }

    return new AverageSessions(rawData);
  } catch (error) {
    console.error(`Erreur getUserAverageSessions(${userId}):`, error.message);
    throw error;
  }
}

/**
 * Récupère les performances de l'utilisateur
 * @param {number} userId - ID de l'utilisateur
 * @returns {Promise<Performance>} Instance de Performance avec labels traduits en français
 * @throws {Error} Si l'utilisateur n'existe pas
 */
export async function getUserPerformance(userId) {
  try {
    let rawData; // Données brutes

    if (USE_MOCK) {
      const userPerformance = USER_PERFORMANCE.find((u) => u.userId === userId);
      if (!userPerformance) {
        throw new Error(`User ${userId} n'existe pas`);
      }
      rawData = userPerformance;
    } else {
      const response = await axios.get(
        `${API_BASE_URL}/user/${userId}/performance`,
      );
      rawData = response.data.data;
    }

    return new Performance(rawData);
  } catch (error) {
    console.error(`Erreur getUserPerformance(${userId}):`, error.message);
    throw error;
  }
}
