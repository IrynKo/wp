
import './App.css';
import { Route, Routes } from 'react-router-dom';
import  AboutPage  from './pages/AboutPage';
import HeroPage from './pages/HeroPage';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import PostsPage from './pages/PostsPage';
import PostPage from './pages/PostPage';

const App = () => {
  return (
    <div className="App container">
      <Header/>
      <Routes>
      <Route path="/" element={<HeroPage />}   />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/posts" element={<PostsPage />} />
      <Route path="/posts/:id" element={<PostPage />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
