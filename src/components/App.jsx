import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ComicProvider } from '../context/ComicProvider';
import { Navbar } from './Navbar';
import { Comic } from './Comic';
import { ComicsItems } from './ComicsItems';



export const App = () => {

    return (
        <>
            <ComicProvider>
                <Router>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<ComicsItems />} />
                        <Route path='/comic/:id' element={<Comic />} />

                    </Routes>
                </Router>
            </ComicProvider>
        </>
    )
}
