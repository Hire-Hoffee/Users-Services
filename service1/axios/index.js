import axios from "axios";
import "dotenv/config";

const instance = axios.create({
  baseURL: process.env.SERVICE2_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

async function sendAction({ userId, action }) {
  try {
    const result = await instance.post("/actions/create", { userId, action });
    return result.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export { sendAction };
