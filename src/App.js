import { Route, Switch } from 'react-router-dom';
import MainPage from './pages/main/MainPage';
import WhyPage from './pages/why/WhyPage';
import Pricing from './pages/pricing/Pricing';
import Products from './pages/products/Products';
import Solutions from './pages/solutions/Solutions';

function App() {
  return (
    <div>
      <Switch>
      <Route path="/">
        <MainPage/>
      </Route>

      <Route path="/whypage">
        <WhyPage/>
      </Route>

      <Route path="/solutions">
        <Solutions/>
      </Route>

      <Route path="/products">
        <Products/>
      </Route>

      <Route path="/pricing">
        <Pricing/>
      </Route>
      </Switch>
    </div>
  );
}

export default App;
