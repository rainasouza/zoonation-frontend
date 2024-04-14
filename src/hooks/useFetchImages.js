import { useEffect, useState } from 'react';
import { getDownloadURL, listAll, ref, getBlob } from 'firebase/storage';
import { imageDb } from '../firebase/config';

const useFetchImages = () => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const storageRef = ref(imageDb, 'files');
                const imageRefs = await listAll(storageRef);
                
                const urls = await Promise.all(imageRefs.items.map(async (itemRef) => {
                    console.log("itemRef", itemRef)
                    return getDownloadURL(itemRef);
                }));
                setImages(urls);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchImages();
    }, []);

    return { images, loading, error };
};

export default useFetchImages;
