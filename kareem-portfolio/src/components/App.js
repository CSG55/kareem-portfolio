import '../styles/index.scss';
import NavBar from "./NavBar";
import {BrowserRouter} from "react-router-dom";
import {AppRoutes} from "./AppRoutes";

function App() {
  return (
      <BrowserRouter>
          <div className="App" style={{height: '100%'}}>
              <NavBar/>
              <AppRoutes/>
          </div>
      </BrowserRouter>
  );
}

export default App;
