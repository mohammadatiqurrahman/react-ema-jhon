
// import './App.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import OrderReview from './OrderReview/OrderReview';
import Inventory from './Inventory/Inventory';
import NotFound from './NotFound/NotFound';

function App() {
  return (
    <div className="App">

 
      <BrowserRouter>
      <Header></Header>
        <Switch>
          <Route exact path="/">
            <Shop></Shop>
          </Route>
          <Route path="/shop">
            <Shop></Shop>
          </Route>
          <Route path="/order_review">
            <OrderReview></OrderReview>
          </Route>
          <Route path="/inventory">
            <Inventory></Inventory>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
