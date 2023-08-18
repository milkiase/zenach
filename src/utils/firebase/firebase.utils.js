import { initializeApp } from 'firebase/app'
import { getAuth, signInWithPopup, signInWithRedirect, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBiaycY6Dgwrgu_AXfDcGBiY4E58-FPNsY",
    authDomain: "zenach-backend.firebaseapp.com",
    projectId: "zenach-backend",
    storageBucket: "zenach-backend.appspot.com",
    messagingSenderId: "779292630776",
    appId: "1:779292630776:web:7c144ba1f4d547d7a5a50d"
  };

initializeApp(firebaseConfig)

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);