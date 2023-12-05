
import './styles/index.css';
import './styles/features.css';
import { NavBar } from './components/navigation/NavBar';
import { Banner } from './components/banners/Banner';
import { NovedadesYCursos } from './components/news/NovedadesYCursos';
import { Footer } from './components/navigation/Footer';

const App = () => {
 

  return (
    <>
      <NavBar/>
      <Banner />
      <NovedadesYCursos/>
      <Footer/>
      
    </>
  );
}

export default App
