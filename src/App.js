import './App.css';
import { Switch, Route} from "react-router-dom"
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <div className="App">
      
      <div>
        <Switch>
        <Route path="/about" component={About}/>
        <Route path="/" component={Home}/>

        </Switch>
      </div>
    
    </div>
  );
}

export default App;
