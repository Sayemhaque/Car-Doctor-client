/* eslint-disable react/prop-types */
import {createContext,useState,useEffect} from "react"
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth"
import app from "../firebase/firebase.config";
import { createJwtToken } from "../api/api";


export const AuthContext = createContext()
const auth = getAuth(app)
const AuthProvider = ({children}) => {
  const provider = new GoogleAuthProvider()
     const [user,setUser] = useState(null)
     const [loading,setLoading] = useState(true)
     
     const createUser = (email,password) => {
      setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
     }

     const logIn = (email,password) => {
      setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
     }

     const logOut = () => {
      setLoading(true)
      return signOut(auth)
     }
    
     const loginWithGoogle = () => {
      setLoading(true)
      return signInWithPopup(auth,provider)

     }
     useEffect(() => {
       const unsubscribe = onAuthStateChanged(auth , currentUser => {
        setUser(currentUser)
        setLoading(false)
        const userEmail = currentUser.email
       if(currentUser && currentUser.email){
        createJwtToken({email : userEmail})
       }
       else{
        localStorage.removeItem('jwt-token')
       }
       })

       return () =>{
        unsubscribe()
       }
     } , [])

    const authInfo = {
      createUser,
      loginWithGoogle,
      logIn,
      logOut,
      user,
      loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;