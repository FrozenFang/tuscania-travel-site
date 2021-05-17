import { useEffect, useState, useCallback } from 'react';

import { Route, Switch, useLocation, useHistory } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { AnimatePresence } from "framer-motion";

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
  { path: "/wine", name: "Wine", Component: Wine, image: wineBg }
];

function App() {
  const [animationInProgress, setAnimationInProgress] = useState(false);
  const location = useLocation();
  const history = useHistory();

  const Preload = require('react-preload').Preload;
  const loadingIndicator = (<div>Loading...</div>);
  const images = [homeBg, hotelBg, wineBg];

  const isMobile = useMediaQuery({ query: `(max-width: 1200px)` });

  const goToNextPage = useCallback(() => {
    const currentRouteIndex = routes.findIndex(
      ({ path }) => location.pathname === path
    );

    if (animationInProgress || currentRouteIndex >= routes.length - 1) {
      return;
    }

    setAnimationInProgress(true);

    history.push(routes[currentRouteIndex + 1].path)
  }, [history, location.pathname, animationInProgress]);

  const goToPrevPage = useCallback(() => {
    const currentRouteIndex = routes.findIndex(
      ({ path }) => location.pathname === path
    );

    if (animationInProgress || currentRouteIndex <= 0) {
      return;
    }

    setAnimationInProgress(true);

    history.push(routes[currentRouteIndex - 1].path)
  }, [history, location.pathname, animationInProgress]);

  useEffect(() => {

    const handleScroll = (event) => {
      const navigationFunction = event.wheelDelta > 0
        ? goToPrevPage
        : goToNextPage;

      navigationFunction();
    }

    isMobile ? window.removeEventListener('wheel', handleScroll) : window.addEventListener('wheel', handleScroll);

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, [goToPrevPage, goToNextPage, isMobile]);

  const onExitComplete = useCallback(() => {
    setAnimationInProgress(false)
  }, []);

  return (
    <div className="app">
      <Preload
        loadingIndicator={loadingIndicator}
        images={images}
        autoResolveDelay={3000}
        resolveOnError={true}
        mountChildren={true}
      >
        <AnimatePresence exitBeforeEnter initial={false} {...{ onExitComplete }}>
          <Switch location={location} key={location.pathname}>
            {routes.map(({ path, Component, image }) => (
              <Route key={path} exact path={path}>
                {({ match }) => (
                  <Component image={image} />
                )}
              </Route>
            ))}
          </Switch>
        </AnimatePresence>
        <Navigation></Navigation>
      </Preload>
    </div>
  );
}

export default App;
