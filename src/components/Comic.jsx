import { NavLink, useParams } from "react-router-dom"
import Loading from "./Loading";
import '../styles/comic.css';
import { useSFetch } from "../hooks/useSFetch";
import getMarvelApi from "../helpers/getMarvelApi";




export const Comic = () => {

    const { id } = useParams();
    const {data , error, loading} = useSFetch(getMarvelApi.getComicById, id);

    

    return (

        <>


            {loading && <div id="contenedor-loading"><Loading/></div>}

            {data &&
        
                <div id="contenedor-comic-details">
                    <div id="contenedor-navlink">
                        <NavLink id="navlink" to='/'>
                            <img id="back-arrow" src="/back-arrow-100.png" alt="" />
                        </NavLink>
                    </div>


                    <img id="imagen-comic" src={`${data.thumbnail.path}.${data.thumbnail.extension}`} alt={data.title} />

                    <div id="contenedor-info">
                        <h2>{data.title}</h2>
                        <h4>Published: {data.dates[0].date.split('T')[0]}</h4>
                        <div id="contenedor-roles-sup">
                            {data.creators.items.map((item, i) =>

                                <div id="contenedor-roles" key={i}>
                                    <h4>{item.role}:</h4>
                                    <p>{item.name}</p>
                                </div>

                            )}
                        </div>
                        <p>{data.description}</p>
                    </div>

                </div>

            }

            {error && <div id="error">{error}</div>}
        </>

    )
}
