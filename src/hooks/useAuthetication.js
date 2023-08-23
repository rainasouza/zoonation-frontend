import { db } from '../firebase/config';
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut
} from 'firebase/auth';

import { useEffect, useState } from 'react';

export const useAuthetication = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);
//to deal with memory leak
    const [cancelled,setCancelled] = useState(false);

    const auth = getAuth();
     
    function checkIfIsCancelled() {
        if (cancelled){
            return;
        }
    }

    const createUser = async (data) => {
        checkIfIsCancelled()
        setLoading(true)

        //creating a user
        try {
            const {user} =  await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password,
                setLoading(false)
            )
            await updateProfile(user,{
                displayName: data.displayName

            })
            return user

        } catch (error) {
            console.log(error.message)
            console.log(typeof error.message)

            setLoading(false)
        }
    }

    const logout = () => {
        checkIfIsCancelled();
        signOut(auth);
    }

    const login = async(data) => {
        checkIfIsCancelled();
        setLoading(true);
        setError(false);

        try{
            await signInWithEmailAndPassword(auth, data.email, data.password)
            setLoading(false);
        } catch (error){
            console.log(error.message)
            console.log(typeof error.message)
        }
        setLoading(false);
    }


    useEffect(() => {
        return () => setCancelled(true)
    }, []);

    return{
        auth,
        createUser,
        error,
        loading,
        logout,
        login
    }
}