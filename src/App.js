import './App.css';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contact from './Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>

  
          <Route path="/contacto">
            <Contact />
          </Route>

          <Route path="/">
            <Home />
          </Route>


        </Switch>
      </Router>


      
      
      <Footer />


    </div>
  );
}

export default App;
