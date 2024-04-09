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
            let systemErrorMessage;
            if(error.message.includes("invalid-email")){
                systemErrorMessage = "O email é inválido."
            }
            else if (error.message.includes("week-password")){
                systemErrorMessage = "A senha não segue o formato pedido."
            }
            else if (error.message.includes("email-already-in-use")){
                systemErrorMessage = "O gmail já está cadastrado, tente outro."
            }

            else{
                systemErrorMessage = "Preencha os campos com valores válidos."
            }



           setError(systemErrorMessage);
        }
        setLoading(false);
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

            let systemErrorMessage;
            if(error.message.includes("wrong-password")){
                systemErrorMessage = "Senha errada."
            }
            else if (error.message.includes("user-not-found")){
                systemErrorMessage = "Gmail não cadastrado."
            }

            setError(systemErrorMessage);
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