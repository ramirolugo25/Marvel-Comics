import { useContext, useEffect } from "react";
import { ComicContext } from "../context/ComicContext";
import { Item } from "./Item";
import { Paginacion } from "./Paginacion";
import { SearchComics } from "./SearchComics";
import Loading from "./Loading";
import '../styles/comicsItems.css';


import { useSFetch } from "../hooks/useSFetch";
import getMarvelApi from "../helpers/getMarvelApi";


export const ComicsItems = () => {

    const { comic, currentPage, onChangeNroPages } = useContext(ComicContext);
    const { data, error, loading } = useSFetch(getMarvelApi.searchComics, {comic, currentPage});
    

    useEffect(() => {
        if (data !== null) {
            onChangeNroPages(Math.ceil(data.total / 20));
        }

    }, [data]);


    return (

        <>

            <SearchComics />
            

            {data && !loading &&
                <>
                    <div id="contenedor-titulo">
                        <h4>{comic}</h4>
                        <h4>{data.total === 0 ? 'No se encontro comics con este titulo' : `Nro Comics: ${data.total}`}</h4>
                    </div>


                    <div id='contenedor-comics' className="row row-cols-auto">
                        {data.results.map((result) => <Item key={result.id} result={result} />)}
                    </div>

                    

                </>
            }
            {loading && <div id="contenedor-loading"><Loading /></div>}
            <Paginacion />
            {error && <div id="error">{error}</div>}
        </>




    )
}
