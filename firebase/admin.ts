import { initializeApp, getApps, cert } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";

/**
 * Ensures required env vars exist and narrows type to string
 */
function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing environment variable: ${name}`);
  }
  return value;
}

// 🔐 Hard runtime + compile-time guarantees
const FIREBASE_PROJECT_ID = requireEnv("FIREBASE_PROJECT_ID");
const FIREBASE_CLIENT_EMAIL = requireEnv("FIREBASE_CLIENT_EMAIL");
const FIREBASE_PRIVATE_KEY = requireEnv("FIREBASE_PRIVATE_KEY");

function initFirebaseAdmin() {
  if (!getApps().length) {
    initializeApp({
      projectId: FIREBASE_PROJECT_ID,
      credential: cert({
        projectId: FIREBASE_PROJECT_ID,
        clientEmail: FIREBASE_CLIENT_EMAIL,
        // Fix multiline private key stored in env vars
        privateKey: FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n"),
      }),
    });
  }

  return {
    auth: getAuth(),
    db: getFirestore(),
  };
}

// Initialize once and export
export const { auth, db } = initFirebaseAdmin();
