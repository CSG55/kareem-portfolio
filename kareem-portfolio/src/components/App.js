import logo from '../logo.svg';
import '../styles/App.scss';
import NavBar from "./NavBar";
import PortfolioDashboard from "./PortfolioDashboard";

function App() {
  return (
    <div className="App" style={{height: '100%'}}>
        <NavBar/>
        <PortfolioDashboard/>
    </div>
  );
}

export default App;
