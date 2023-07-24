import React, { useState } from 'react'
import './assets/styles/main.scss';
import { Routes, Route} from 'react-router-dom';
import Home from './Routes/Home';
import ErrorPage from './Routes/ErrorPage';
import Header from './components/header';
import Footer from './components/footer';
import APropos from './Routes/APropos';
import Logement from './Routes/Logement';
import data from './data.json';

export default function App() {
  // State pour récupérer les données et l'id de la card et les passer au composant Logement
  const [newCardData, setNewCardData] = useState({});
  const [id, setId] = useState('');

  // Données pour le header, le footer et les images de fond
  const navLink = ['accueil', 'a propos'];
  const logo = [require('./assets/images/logo-header.png'), require('./assets/images/logo-footer.png')];
  const imgBackground = [require('./assets/images/img-accueil.png'),require('./assets/images/img-aPropos.png')];
  const presentationText = (<>Chez vous,<br /> partout et ailleurs</>);
  const footerText = "© 2020 Kasa. All rights reserved";

  // Fonction pour récupérer les données de la card au clic
  const updateCardData = (newData) => {
    setNewCardData(newData);
    setId(newData.id);
  }

  return (
    <div className='App'>
      <Header navLink={navLink} headerLogo={logo[0]} />
          <Routes>
              <Route exact path="/" element={<Home homeData={data} image={imgBackground[0]} presentationText={presentationText} onDataUpdate={updateCardData}/>}></Route>
              <Route path={`/Logement/${id}`} element={<Logement data={newCardData} />}></Route>
              <Route path="/APropos" element={<APropos image={imgBackground[1]} />}></Route>
              <Route path="*" element={<ErrorPage />}></Route>
          </Routes>
      <Footer footerLogo={logo[1]} footerText={footerText} />
    </div>
  );
}