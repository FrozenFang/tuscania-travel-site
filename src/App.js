import { Route, Switch, useLocation } from 'react-router-dom';
import { AnimatePresence} from "framer-motion";

import './App.scss';

import Navigation from './components/Navigation/Navigation'
import Home from './Pages/Home/Home';
import Hotel from './Pages/Hotel/Hotel';
import Wine from './Pages/Wine/Wine';
//import Cuisine from './Pages/Cuisine/Cuisine';

import homeBg from './assets/images/bg.png'
import hotelBg from './assets/images/hotel.jpg'
import wineBg from './assets/images/wine.jpg'

const routes = [
  { path: "/", name: "Home", Component: Home, image: homeBg },
  { path: "/hotel", name: "Hotel", Component: Hotel, image: hotelBg },
  { path: "/wine", name: "Wine", Component: Wine, image: wineBg },
  //{ path: "/cuisine", name: "Cuisine", Component: Cuisine, image: wineBg },
];

function App() {

  const location = useLocation();

  return (
    <div className="app">
      <AnimatePresence exitBeforeEnter initial={false}>
        <Switch location={location} key={location.pathname}>
          {routes.map(({ path, Component, image }) => (
            <Route key={path} exact path={path}>
              {({ match }) => (
                <Component image={image}/>
              )}
            </Route>
          ))}
        </Switch>
      </AnimatePresence>
      <Navigation></Navigation>
    </div>
  );
}

export default App;
