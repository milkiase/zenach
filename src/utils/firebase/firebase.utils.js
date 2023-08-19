import { initializeApp } from 'firebase/app'
import {
  getAuth, createUserWithEmailAndPassword, 
  signInWithPopup, signInWithRedirect, GoogleAuthProvider 
} from 'firebase/auth'
import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore'


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
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (authUser)=>{
  const userDocRef = doc(db, 'users', authUser.uid)
  console.log(userDocRef)
  try{
    const userSnapshot = await getDoc(userDocRef)
    if(!userSnapshot.exists()){
      try {
        const {displayName, email} = authUser
        const createdAt = new Date()
        const newUser = {
          displayName,
          email,
          createdAt
        }
        await setDoc(userDocRef, newUser)
        return newUser
      } catch (error) {
        console.log('error creating a user')
      }
    }
    return userDocRef
  }catch(error){
    console.log('snapshot error', error.message)
  }
}

export const createAuthUserWithEmailAndPassword = async(email, password)=>{
    if(!email || !password) return
    try{
      return await createUserWithEmailAndPassword(auth, email, password)
    }catch(error){
      throw error
      // console.log(error)
      // return
    }
}