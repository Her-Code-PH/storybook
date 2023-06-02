import { useEffect, useState } from "react";
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  TwitterAuthProvider,
  getAuth
} from "firebase/auth";
import { initFirebase } from "@/firebase/app";
import { mapUserData } from "@/firebase/mapUserData";
import { setUserCookie } from "@/firebase/useUserCookies";

initFirebase();
const auth = getAuth()

const firebaseAuthConfig = {
  signInFlow: 'popup',
  // Auth providers
  // https://github.com/firebase/firebaseui-web#configure-oauth-providers
  signInOptions: [
    // add additional auth flows below
    GoogleAuthProvider.PROVIDER_ID,
    TwitterAuthProvider.PROVIDER_ID,
    GithubAuthProvider.PROVIDER_ID,
    
  ],
  signInSuccessUrl: '/',
  credentialHelper: 'none',
  callbacks: {
  signInSuccessWithAuthResult: async ({ user }, redirectUrl) => {
      const userData = mapUserData(user)
      setUserCookie(userData)
    },
  },
}

const FirebaseAuth = () => {
  const [renderAuth, setRenderAuth] = useState(false);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setRenderAuth(true)
    }
  }, []);

  return (
    <div>
      {renderAuth && (
        <StyledFirebaseAuth
          uiCallback={ui => ui.disableAutoSignIn()}
          uiConfig={firebaseAuthConfig}
          firebaseAuth={auth}
        />
      )}
    </div>
  );
}
 
export default FirebaseAuth;
