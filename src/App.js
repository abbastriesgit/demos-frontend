import './App.css';
import MyNavbar from "./components/myNavbar";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Footer from "./components/footer";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Home from "./pages/home";
import AboutMe from "./pages/aboutMe";
import Experience from "./pages/experience";
import Tictactoe from "./pages/tictactoe";
import TictactoeJoin from "./pages/tictactoeJoin";
function App() {
  return (
      <Router>
        <div className="App" style={{display:"flex" ,flexDirection:"column",minHeight:"100vh"}}>
          <MyNavbar/>
            <div style={{height:"4rem"}}></div>
            <div style={{display:"flex",alignItems:"center",margin:"auto"}}>
                <Switch>
                    <Route path="/about">
                        <AboutMe/>
                    </Route>
                    <Route path="/experience">
                        <Experience/>
                    </Route>
                    <Route path="/cv">
                        <h1>This users</h1>
                    </Route>
                    <Route exact={true} path="/demo/adv-tic-tac-toe">
                        <Tictactoe/>
                    </Route>
                    <Route path="/demo/adv-tic-tac-toe/join/:id">
                        <TictactoeJoin/>
                    </Route>
                    <Route  exact={true} path="/">
                        <AboutMe/>
                    </Route>
                </Switch>
            </div>
           <Footer/>
        </div>
      </Router>
  );
}

export default App;
