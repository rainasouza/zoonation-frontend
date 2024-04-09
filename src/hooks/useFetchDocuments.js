import{db} from "../firebase/config"
import { useState, useEffect } from "react"
import { collection, query, orderBy, where, onSnapshot } from "firebase/firestore"

export const useFetchDocuments = (docCollection, uid = null) => {
    const [documents, setDocuments] = useState(null);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);

    // to deal wt memory leak
    const [cancelled, setCancelled] = useState(false);
    
    useEffect(() => {
        async function loadData() {

            if(cancelled) return;
            setLoading(true);

            const collectionRef = await collection (db, docCollection)

            try {

                let q;

                if(uid){
                    q = await query(
                        collectionRef,
                        where("uid","==",uid),
                        orderBy("createdAt", "desc")
                    );
                }
                else{                q = await query(collectionRef, orderBy("createdAt", "desc"));
            }


                await onSnapshot(q, (querySnapshot) => {
                    setDocuments(
                        querySnapshot.docs.map((doc) =>({
                            id: doc.id,
                            ...doc.data(),
                            
                        }))
                    );

                });
                setLoading(false);



            } catch(error){
                console.log(error);
                setError(error.message);
                setLoading(false);

            }
        }
        loadData();

    }, [docCollection, uid, cancelled]);

    useEffect(() => {setCancelled(true);}, [] );
    return {documents, loading, error};


};