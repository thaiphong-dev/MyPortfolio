import { Suspense } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './App.scss';
import About from './components/About';
import Contact from './components/Contact';
import Introduction from './components/introduction/Introduction';
import Navigation from './components/navigation';
import Portfolio from './components/Portfolio';
// import Introduction from '../introduction/Introduction';
// import About from '../About';
// import Portfolio from '../Portfolio';
// import Contact from '../Contact';
const listElements =
  [{ id: 1, title: 'Home' },
  { id: 2, title: 'About' },
  { id: 3, title: 'Portfolio' },
  { id: 4, title: 'Contact' },];


const linkElements =
  [{ id: 1, title: 'Facebook', link: 'https://www.facebook.com/phong.tuthai' },
  { id: 2, title: 'Instagram', link: 'https://www.instagram.com/i_am__phong/' },
  { id: 3, title: 'GitHub', link: 'https://github.com/thaiphong1101' },
  { id: 4, title: 'Linkedin', link: 'https://www.linkedin.com/in/t%E1%BB%AB-phong-b2121a1ab/' },];




function App() {

  return (
    <div className="App">
      <Suspense fallback={<div>...Loading</div>} >
        <BrowserRouter>
          <Navigation listElements={listElements} />

          <div className="Navigation__feature">
            <Switch>
              <Redirect exact from="/" to="/Home" />


              <Route path="/Home"><Introduction /></Route>
              <Route path="/About"><About linkElements={linkElements} /></Route>
              <Route path="/Portfolio"><Portfolio /></Route>
              <Route path="/Contact"><Contact /></Route>


            </Switch>
          </div>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;