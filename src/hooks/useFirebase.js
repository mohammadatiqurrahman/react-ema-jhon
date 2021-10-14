import { useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,signOut } from "firebase/auth";
import initializeAuthentication from "../components/Firebase/firebase.init";
initializeAuthentication();
const useFirebase=()=>{
    const [user,setUser]=useState({})
    const [error,setError] = useState('')
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle =()=>{
        signInWithPopup(auth,googleProvider)
        .then(result=>{
            console.log(result.user);
            setUser(result.user)
        })
        .catch(error=>[
            setError(error.message)
        ])
    }
    const logout =()=>{
        signOut(auth)
        .then(()=>{
            setUser({})
        })
    }

    useEffect(()=>{
        onAuthStateChanged(auth,user=>{
            if(user){
                setUser(user)
            }
        })
    },[])
    return{
        user,
        logout,
        signInUsingGoogle
    }
}
export default useFirebase;