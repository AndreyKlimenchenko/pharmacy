import './App.css';
import Catalog from './components/Catalog/Catalog'
import {NavLink, BrowserRouter, Route, Switch } from 'react-router-dom'
import Cart from './components/Cart/Cart';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path='/'>
            <NavLink className="btn"  to='/catalog'>Catalog</NavLink>
          </Route>
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
