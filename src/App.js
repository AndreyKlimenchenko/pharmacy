import './App.css';
import Catalog from './components/Catalog/Catalog'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Cart from './components/Cart/Cart';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path='/catalog'>
            <Catalog />
          </Route>
          <Route path='/cart'>
            <Cart />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
