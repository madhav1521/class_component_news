import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Header from './components/Header';
import News from './pages/News';
import Sports from './pages/Sports';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Politics from './pages/Politics';
import { useState } from 'react';
import { ProtectedRoute } from './components/ProtectedRoute';

function App() {
  const [user, setUser] = useState(null);
  const handleLogin = () => setUser({ id: '1', name: 'robin' });
  const handleLogout = () => setUser(null);

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Page1 />} />
          <Route path='/page2' element={<Page2 />} />
          <Route path='/news' element={<News />} />
          <Route path='/news/:id' element={<News />} />
          <Route path='/sports' element={<Sports />} />
          <Route path='/politics' element={<Politics />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
