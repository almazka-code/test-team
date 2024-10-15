import { Routes, Route } from 'react-router-dom';
import './styles/main.scss';

import { Header } from './components/layout/Header/Header';
import { Home } from './pages/Home/Home';
// import { Profile } from './pages/Profile/Profile';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <main className="main">
        {/* <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/profile" element={<Profile />}/>
        </Routes> */}
        <Home />
      </main>
    </div>
  );
}

export default App;
