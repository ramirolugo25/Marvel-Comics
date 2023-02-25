import { useContext } from 'react';
import { ComicContext } from '../context/ComicContext';
import '../styles/paginacion.css';

export const Paginacion = () => {

  const { currentPage, nroPages, onChangePage } = useContext(ComicContext);

  const onHandleNext = () => {
    onChangePage(currentPage + 1);
  }

  const onHandlePrevious = () => {
    onChangePage(currentPage - 1);
  }

  return (
    <>
    {nroPages > 0 &&
    <nav id='navegacion' aria-label="...">
      <ul className="pagination">
        <li className={currentPage === 1 ? 'page-item disabled' : 'page-item'}>
          <a className="page-link" href="#" onClick={() => onChangePage(1)}>First Page</a>
        </li>

        <li className={currentPage === 1 ? 'page-item disabled' : 'page-item'}>
          <a className="page-link" href="#" onClick={onHandlePrevious}>Previous</a>
        </li>
        <li className="page-item active"><a className="page-link" href="#">{currentPage}</a></li>
        <li className={currentPage === nroPages ? 'page-item disabled' : 'page-item'}>
          <a className="page-link" href="#" onClick={onHandleNext}>Next</a>
        </li>

        <li className={currentPage === nroPages ? 'page-item disabled' : 'page-item'}>
          <a className="page-link" href="#" onClick={() => onChangePage(nroPages)}>Last Page</a>
        </li>
      </ul>
    </nav>
    }
    </>
  )
}
