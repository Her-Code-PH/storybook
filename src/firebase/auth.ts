import { app } from './app'
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  OAuthProvider,
  reauthenticateWithPopup,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";

const googleProvider = new GoogleAuthProvider();
const appleProvider = new OAuthProvider('apple.com')

const auth = getAuth(app);
const currentUser = auth.currentUser || null

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

export const appleSignIn = async () => {
  let result;
  let error;

  if (currentUser) {
    result = await reauthenticateWithPopup(currentUser, appleProvider)
      .then((res) => {
        const user = res.user;
        const credential = OAuthProvider.credentialFromResult(res);
        const accessToken = credential?.accessToken;
        const idToken = credential?.idToken;
        console.log(auth)

        return result = res
      })
      .catch((err) => {
        const errorCode = err.code;
        const errorMessage = err.message;
        const email = err.customData.email;
        // The credential that was used.
        const credential = OAuthProvider.credentialFromError(err);

        return error = err
      })
  }
  return { result, error }
}

export const googleSignIn = async () => {
  let result;
  let error;
  try {
    result = await signInWithPopup(auth, googleProvider)
      .then((res) => {
        const credential = GoogleAuthProvider.credentialFromResult(res);
        const token = credential?.accessToken;
        const user = res.user;
        console.log(user)
        result = {
          user,
          token
        }
        return result;
      })
  }
  catch (e) {
    error = e;
  }
  return { result, error };
}
