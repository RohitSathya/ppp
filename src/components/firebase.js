import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6Ch4-4WryhdWh7Unc7MIQ-bcSwYnKp5s",
  authDomain: "realestate-c40ea.firebaseapp.com",
  projectId: "realestate-c40ea",
  storageBucket: "realestate-c40ea.firebasestorage.app",
  messagingSenderId: "561523182805",
  appId: "1:561523182805:web:0583af1a49aa078c54e65c",
  measurementId: "G-G5BSPSK6TR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

// Google Sign-In Function
export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;

    // Return user details
    return {
      success: true,
      user: {
        googleId: user.uid,
        name: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
      },
    };
  } catch (error) {
    console.error("Google Sign-In Error:", error.message);

    // Return structured error response
    return {
      success: false,
      error: error.message,
    };
  }
};

export default app;
