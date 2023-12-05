
import './styles/index.css';
import './styles/features.css';
import { NavBar } from './components/navigation/NavBar';
import { Banner } from './components/banners/Banner';
import { NovedadesYCursos } from './components/news/NovedadesYCursos';
import { Footer } from './components/navigation/Footer';
import { useState } from 'react';

const App = () => {
  const [isLogged, setIsLogged] = useState(false)

  const onClickLogin = () => {
    setIsLogged(!isLogged)  //Setea el estado contrario al que estaba
  }

  return (
    <>
      <NavBar onClick={onClickLogin} />
      <Banner />
      <NovedadesYCursos isLogged={isLogged} />
      <Footer/>
      
    </>
  );
}

export default App
