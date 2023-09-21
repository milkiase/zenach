import { initializeApp } from 'firebase/app'
import {
  getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,
  signInWithPopup, signInWithRedirect, GoogleAuthProvider, signOut,
  onAuthStateChanged, User, Auth, NextOrObserver
} from 'firebase/auth'
import {getFirestore, doc, getDoc, setDoc, collection, writeBatch,
  query, getDocs, QueryDocumentSnapshot
} from 'firebase/firestore'
import { TCategory } from '../../store/categories/categories.types';


enum firebaseConfig  {
    apiKey = "AIzaSyBiaycY6Dgwrgu_AXfDcGBiY4E58-FPNsY",
    authDomain = "zenach-backend.firebaseapp.com",
    projectId = "zenach-backend",
    storageBucket = "zenach-backend.appspot.com",
    messagingSenderId = "779292630776",
    appId = "1:779292630776:web:7c144ba1f4d547d7a5a50d"
  };

initializeApp(firebaseConfig)
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
})

export const auth:Auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);

export const db = getFirestore();

export type TAdditionalDetails = {
  displayName ?: string
}
export type TUserData = {
  createdAt: Date,
  displayName: string,
  email: string
}
export const createUserDocumentFromAuth = async(
  authUser:User, additionalDetails = {} as TAdditionalDetails
  ):Promise<void | QueryDocumentSnapshot<TUserData>>=>{
  const userDocRef = doc(db, 'users', authUser.uid)
  try{
    let userSnapshot = await getDoc(userDocRef)
    if(!userSnapshot.exists()){
      try {
        const {displayName, email} = authUser
        const createdAt = new Date()
        const newUser = {
          displayName,
          email,
          createdAt,
          ...additionalDetails
        }
        await setDoc(userDocRef, newUser)
        userSnapshot = await getDoc(userDocRef)
      } catch (error) {
        console.log('error creating a user')
      }
    }
    return userSnapshot as QueryDocumentSnapshot<TUserData>
  }catch(error){
    console.log('snapshot error', error)
  }
}

export const createAuthUserWithEmailAndPassword = async(email:string, password:string)=>{
    if(!email || !password) return
      return await createUserWithEmailAndPassword(auth, email, password)
}

export const signInUserWithEmailAndPassword = async (email:string, password:string)=>{
  if(!email || !password){
    alert('please insert both email and password')
    return
  }
  return await signInWithEmailAndPassword(auth, email, password)
}

export const signOutUser = async ()=> await signOut(auth)

export const onAuthStateChangedListner = (callback:NextOrObserver<User>)=> onAuthStateChanged(auth, callback)

export type ObjectToAdd = {
  title: string 
}
export const addCollectionAndDocuments = async <T extends ObjectToAdd> (collectionKey:string, objectsToAdd:T[])=>{
    const collectionRef = collection(db, collectionKey)
    const batch = writeBatch(db)
    objectsToAdd.forEach((objectToAdd)=>{
      const docRef = doc(collectionRef, objectToAdd.title.toLowerCase())
      batch.set(docRef, objectToAdd)
    })

    await batch.commit()
}

export const getCategoriesDocuments = async ():Promise<TCategory[]>=>{
    const collectionRef = collection(db, 'categories')
    const collectionQuery = query(collectionRef)
    const querySnapshot = await getDocs(collectionQuery)
  
    return querySnapshot.docs.map((documentSnapshot)=>documentSnapshot.data() as TCategory)
}

export const getCurrentUser = ():Promise<User | null>=>{
  return new Promise((resolve, reject)=>{
    const unsubscribe = onAuthStateChanged(auth, (userAuth)=>{
      unsubscribe();
      resolve(userAuth);
    }, reject)
  })
}