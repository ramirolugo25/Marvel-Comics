import { useContext, useState } from "react";
import { ComicContext } from "../context/ComicContext";
import '../styles/searchcomics.css';




export const SearchComics = () => {

    const { onChangeComic } = useContext(ComicContext);


    const [valueInput, setValueInput] = useState('');

    const onSubmit = (event) => {
        event.preventDefault();

        if (valueInput.length > 0) {
            onChangeComic(valueInput);
            setValueInput('');
        }

    }

    return (


        <form id="formulario" className="d-flex" role="search" onSubmit={onSubmit}>
            <input className="form-control me-2" type="text" onChange={(e) => setValueInput(e.target.value)} value={valueInput} />
            <button className="btn btn-outline-success">Search</button>
        </form>




    )
}
