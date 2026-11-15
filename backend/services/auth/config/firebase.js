import { cert, initializeApp } from "firebase-admin";
import fs from "fs";

const serviceAccountPath = process.env.RENDER
  ? "/etc/secrets/serviceAccountKey.json"
  : new URL("../serviceAccountKey.json", import.meta.url);

const serviceAccount = JSON.parse(fs.readFileSync(serviceAccountPath, "utf8"));

export const app = initializeApp({
  credential: cert(serviceAccount),
});
