import { useState } from "react";
import { ComicContext } from "./ComicContext"


export const ComicProvider = ({children}) => {
    
    const [comic, setComic] = useState('Avengers');
    const [currentPage, setCurrentPage] = useState(1);
    const [nroPages, setNroPages] = useState(0);

    const onChangeComic = (newComic) => {
        setComic(newComic);
        setCurrentPage(1);
    }

    const onChangeNroPages = (newNroPages) => {
        setNroPages(newNroPages);
    }

    const onChangePage = (nroPage) => {
        setCurrentPage(nroPage);
    }
  
    return (
    <ComicContext.Provider 
        value={{
            comic, 
            currentPage, 
            nroPages, 
            onChangeComic, 
            onChangeNroPages,
            onChangePage
        }}>
        {children}
    </ComicContext.Provider>
  )
}
