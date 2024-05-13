import {useState} from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Navbar/Hero/Hero";
import Programs from "./Components/Programs/Programs";
import Title from "./Components/Title/Title";
import SobreNos from "./Components/Sobre-nos/SobreNos";
import Campus from "./Components/Campus/Campus";
import Depoimentos from "./Components/Depoimentos/Depoimentos";
import Contato from "./Components/Contato/Contato";
import Footer from "./Components/Footer/Footer";
import VideoPlayer from "./Components/VideoPlayer/VideoPlayer";

const App = () => {


  const [playState, setPlayState] = useState(false);

  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle="Nosso PROGRAMA" title="O que nós oferecemos" />
        <Programs />
        <SobreNos setPlayState={setPlayState} />
        <Title subTitle="Galeria" title="Fotos do Campus" />
        <Campus />
        <Title subTitle="DEPOIMENTOS" title="O que os Alunos Dizem" />
        <Depoimentos />
        <Title subTitle="CONTATE NOS" title="Entrar em contato" />
        <Contato />
        <Footer />
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState} />
    </div>
  );
};

export default App;
