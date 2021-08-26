import logo from './logo.svg';
import './App.css';
import { Route, useHistory } from "react-router-dom";
import HeaderOne from './components/HeaderOne';
import HeaderTwo from './components/HeaderTwo';

import HeroOne from './components/HeroOne';
import HomeAbout from './components/HomeAbout';
import Featured from './components/Featured';

function App() {
  return (
    <div className="">
        {/* <HeaderOne /> */}
        <HeaderTwo />
        <HeroOne />
        <HomeAbout />
        <Featured />
    </div>
  );
}

export default App;
