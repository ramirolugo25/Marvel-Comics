import { useEffect, useState } from "react";


export const useSFetch = (fetchResource,parametros) => {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const resource = async () => {
        try {
            const respuesta = await fetchResource(parametros);
            if (typeof(parametros) === 'object'){
                localStorage.setItem(`${parametros.comic}-${parametros.currentPage}`.toLowerCase(), JSON.stringify(respuesta.data));
                setData(respuesta.data);
            }else{
                localStorage.setItem(`${parametros}`.toLowerCase(), JSON.stringify(respuesta.data.results[0]));
                setData(respuesta.data.results[0]);
            }   
        } catch (error) {
            setError(error);
        }
        setLoading(false);
    }

    useEffect(() => {
        setLoading(true);
        setError(null);
        if(typeof(parametros) === 'object'){
            if(localStorage.getItem(`${parametros.comic}-${parametros.currentPage}`)){
                const key = `${parametros.comic}-${parametros.currentPage}`.toLowerCase() ;
                const dataComics = JSON.parse(localStorage.getItem(key));
                setData(dataComics);
                setLoading(false);
            }else{
                resource();
            } 
        }else{
            if (localStorage.getItem(`${parametros}`)){
                const key = `${parametros}`.toLowerCase();
                const dataComic = JSON.parse(localStorage.getItem(key));
                setData(dataComic);
                setLoading(false);
            }else{
                resource();
            }
        }
    
    }, [parametros.comic, parametros.currentPage])


    return { 
        data, 
        error, 
        loading, 
    }
}
