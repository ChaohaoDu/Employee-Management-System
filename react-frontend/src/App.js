import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import ListEmployeeComponent from "./components/ListEmployeeComponent";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import createEmployeeComponent from "./components/CreateEmployeeComponent";
import ViewEmployeeComponent from "./components/ViewEmployeeComponent";

function App() {
    return (
        <div>
            <Router>
                <HeaderComponent/>
                <div className="container">
                    <Switch>
                        <Route path="/view/:id" component={ViewEmployeeComponent}/>
                        <Route path="/employees" component={ListEmployeeComponent}/>
                        {/*<Route path="/update/:id" component={updateEmployeeComponent}/>*/}
                        <Route path="/add/:id" component={createEmployeeComponent}/>
                        <Route path="/" component={ListEmployeeComponent}/>

                        <ListEmployeeComponent/>
                    </Switch>
                </div>
                <FooterComponent/>
            </Router>
        </div>
    );
}

export default App;
