import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './pages/about/render/About';
import Main from './pages/main/render/Main';
import Contact from './pages/contact/render/Contact';
import Navigation from './Navigations';

function App() {
    return (
        <Router>
            <Navigation />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    );
}

export default App;
