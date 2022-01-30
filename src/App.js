import "./App.css";
import "./Home.css";
import "./pages/Login_Page";
import LoginPage from "./pages/Login_Page";
import HomePage from "./pages/Home_page";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
    <Route exact path="/" component={LoginPage} />
    <Route exact path="/home" component={ HomePage }/>    
    </div>
  );
}

export default App;
