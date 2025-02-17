require("dotenv").config();
import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, query, orderByKey, limitToLast, get } from "firebase/database";
import { ThemeData } from "../models/data";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export const saveData = async (token: string, data: ThemeData) => {
  try {
    const dataRef = ref(db, `data/${token}`); 
    await push(dataRef, data);
  } catch (error) {
    console.error("Erro ao salvar dados:", error);
    throw error;
  }
};

export const listData = async (token: string) => {
  try {
    const dataRef = query(
      ref(db, `data/${token}`), 
      orderByKey(),
      limitToLast(20)
    );
    const snapshot = await get(dataRef);
    return snapshot.val();
  } catch (error) {
    console.error("Erro ao listar dados:", error);
    throw error;
  }
};