import logo from './logo.svg';
import './App.css';
import { Route, useHistory } from "react-router-dom";
import Header from './components/HeaderOne';
import HeroOne from './components/HeroOne';

function App() {
  return (
    <div className="">
        <Header />
        <HeroOne />
    </div>
  );
}

export default App;
