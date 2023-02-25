import { NavLink } from 'react-router-dom';
import '../styles/item.css';

export const Item = ({ result }) => {

    const { title, thumbnail, id } = result;

    return (
        <>

            <div id='contenedor-comic' className="col">
                <NavLink to={`/comic/${id}`}>
                    <img id='comic-img' src={`${thumbnail.path}.${thumbnail.extension}`} alt={title} />
                </NavLink>
                <p id='titulo-comic'>{title}</p>
            </div>


        </>

    )
}
