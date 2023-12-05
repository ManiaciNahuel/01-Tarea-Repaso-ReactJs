
import './styles/index.css';
import './styles/features.css';
import { NavBar } from './components/navigation/NavBar';
import { Banner } from './components/banners/Banner';
import { Novedades } from './components/news/Novedades';
import { Footer } from './components/navigation/Footer';

const App = () => {
 

  return (
    <>
      <NavBar/>
      <Banner />
      <Novedades/>
      <Footer/>
      
    </>
  );
}

export default App
