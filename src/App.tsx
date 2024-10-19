import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import './styles/main.scss';

import { Header } from './components/layout/Header/Header';
import { Home } from './pages/Home/Home';
import { Profile } from './pages/Profile/Profile';
import { Register } from './pages/Register/Register';
import { Login } from './pages/Register/Login';

function App() {
  const location = useLocation();
  return (
    <div className="wrapper">
      {location.pathname !== '/' && location.pathname !== '/login' && <Header />}
      <main className="main">
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/users" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
