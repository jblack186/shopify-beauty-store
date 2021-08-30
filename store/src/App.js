import logo from './logo.svg';
import './App.css';
import { Route, useHistory } from "react-router-dom";
import HeaderOne from './components/HeaderOne';
import HeaderTwo from './components/HeaderTwo';
import HeroThree from './components/HeroThree';
import TwoText from './components/2Text1Img';
import TwoImg from './components/2Img1Text';

import HeroOne from './components/HeroOne';
import HomeAbout from './components/HomeAbout';
import Featured from './components/Featured';
import FooterOne from './components/FooterOne';

function App() {
  return (
    <div className="">
        {/* <HeaderOne /> */}
        <HeaderTwo />
        {/* <HeroOne /> */}
        <HeroThree />
        <HomeAbout />
        {/* <Featured /> */}
        <TwoText />
        <TwoImg />
        <FooterOne />
    </div>
  );
}

export default App;
