import './App.css';
import MyNavbar from "./components/myNavbar";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import AboutMe from "./pages/aboutMe";
import Experience from "./pages/experience";
import Tictactoe from "./adv_tictactoe/tictactoe";
import TictactoeJoin from "./adv_tictactoe/logic/tictactoeJoin";
import colors from "./constants/colors";
import Connect from "./pages/connect";
import Projects from "./pages/projects";
import React from "react";
import RobotSimulator from "./robot_simulation/robotSimulator";
function App() {
  return (
      <Router>
        <div className="App" style={{
            display:"flex",
            backgroundColor:colors.ttt.bg,
            flexDirection:"column",
            minHeight:"100vh",
            font:"Roboto"
        }}>
          <MyNavbar/>
            <div style={{display:"flex",alignItems:"center",margin:"auto"}}>
                <Switch>
                    <Route path="/about">
                        <AboutMe/>
                    </Route>
                    <Route path="/connect">
                        <Connect/>
                    </Route>
                    <Route path="/experience">
                        <Experience/>
                    </Route>
                    <Route path="/projects">
                        <Projects/>
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
                    <Route  exact={true} path="/robot-simulator">
                        <RobotSimulator/>
                    </Route>
                </Switch>
            </div>
        </div>
      </Router>
  );
}

export default App;
