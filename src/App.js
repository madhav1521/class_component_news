import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Header from './components/Header';
import News from './components/News';
import '../node_modules/bootstrap/dist/css/bootstrap.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path='/' element={<Page1 />} />
            <Route path='/news' element={<News />} />
            <Route path='/page2' element={<Page2 />} />
          </Routes>
        {/* </Header> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
