import React from "react";
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route
 
} from "react-router-dom";
import About from "./components/About/About";
import Friends from "./components/Friends/Friends";
import Home from "./components/Home/Home";
import NotFound from './components/./NotFound/NotFound'
import Header from "./components/Header/Header";



function App() {
  return (
    <div className="App">
      
   <Router>
   <Header></Header>
     <Switch>
       <Route  path="/home">
            <Home></Home>
       </Route>
       <Route path="/friends">
         <Friends></Friends>
       </Route>
       <Route path="/About">
         <About></About>
       </Route>
       <Route exact path="/">
         <Home/>
       </Route>
       <Route path="*">
         <NotFound></NotFound>
       </Route>
       
     </Switch>
   </Router>

 </div>
  );
}

export default App;
