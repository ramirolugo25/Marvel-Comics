const BASE_URL = 'https://gateway.marvel.com:443/v1/public/comics';

const getResource = async (resourceUrl) => {
    const respuesta = await fetch(resourceUrl);
    const respuestaJSON = await respuesta.json();
    if(respuestaJSON.status !== 'Ok'){  
        throw new Error('API Error');
    }
    return respuestaJSON;
}

const getMarvelApi = {
    searchComics: ({comic, currentPage}) =>
        getResource(`${BASE_URL}?offset=${currentPage === 1 ? 0 : (currentPage - 1)*20}&titleStartsWith=${encodeURIComponent(comic)}&orderBy=onsaleDate&ts=1&apikey=af069f1db3764bfda803d02e5b587139&hash=db6534008536df5d4d618cd98026f698`),
    getComicById: (id) => 
        getResource(`${BASE_URL}/${id}?ts=1&apikey=af069f1db3764bfda803d02e5b587139&hash=db6534008536df5d4d618cd98026f698`),
};

export default getMarvelApi;