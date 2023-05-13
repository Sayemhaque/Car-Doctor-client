import {createContext,useState,useEffect} from "react"
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword} from "firebase/auth"
import app from "../firebase/firebase.config";

const auth = getAuth(app)
export const AuthContext = createContext()
const AuthProvider = () => {
     const [user,setUser] = useState(null)
     const [loading,setLoading] = useState(true)
     
     const createUser = (email,password) => {
        return createUserWithEmailAndPassword(auth,email,password)
     }

     const logIn = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password)
     }

     useEffect(() => {
       const unsubscribe = onAuthStateChanged(auth , currentUser => {
        setUser(currentUser)
        setLoading(false)
        console.log(currentUser)
       })

       return () =>{
        unsubscribe()
       }
     } , [])
    const authInfo = {
      createUser,
      logIn,
      user,
      loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            
        </AuthContext.Provider>
    );
};

export default AuthProvider;