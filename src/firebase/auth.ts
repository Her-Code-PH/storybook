import { app } from './app'
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup
} from "firebase/auth";

const googleProvider = new GoogleAuthProvider();

const auth = getAuth(app);

export const signUp = async (email: string, password: string) => {
  let result = null,
    error = null;
  try {
    result = await createUserWithEmailAndPassword(auth, email, password);
  } catch (e) {
    error = e;
  }
  return { result, error };
}

export const signIn = async (email: string, password: string) => {
  let result = null,
    error = null;
  try {
    result = await signInWithEmailAndPassword(auth, email, password);
  } catch (e) {
    error = e;
  }
  return { result, error };
}

export const googleSignIn = async () => {
  let result = null,
    error = null;
  try {
    result = await signInWithPopup(auth, googleProvider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      const user = result.user;
    })
  }
  catch (e) {
    error = e;
  }
  return { result, error };
}
