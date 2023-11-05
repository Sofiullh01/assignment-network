import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from "react";
import { auth } from '../../Config/Firebase/firebase.config';


export const AuthContext = createContext(null)
const GoogleProvider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [lodig,setLodig] = useState(true)

    const createUser = (email,password) => {
        setLodig(true);
        return createUserWithEmailAndPassword(auth,email,password)
    };
    const logInUser = (email,password) => {
        setLodig(true);
        return signInWithEmailAndPassword(auth,email,password)
    };
    const googleLigin = () => {
        setLodig(true);
        return signInWithPopup(auth, GoogleProvider)
    };

    const logOut = () => {
        setLodig(true);
        return signOut(auth)
    }

    useEffect(()=>{
        const unSubcribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLodig(false)
          });
          return ()=>{
            return unSubcribe();
          };
    },[])

    const infos = {
        user,
        lodig,
        logOut,
        setUser,
        logInUser,
        createUser,
        googleLigin,
    };
    return (
        <AuthContext.Provider value={infos}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node,
}
export default AuthProvider;