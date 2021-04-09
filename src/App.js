
import { Suspense } from 'react';
import './App.scss';
import Introduction from './components/introduction/Introduction';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
  Redirect,
  BrowserRouter
} from "react-router-dom";
import About from '../src/components/About/index';
import Portfolio from '../src/components/Portfolio/index';
import Contact from '../src/components/Contact/index';

const listElements =
  [{ id: 1, title: 'Home', link: '#' },
  { id: 2, title: 'About', link: '#' },
  { id: 3, title: 'Portfolio', link: '#' },
  { id: 4, title: 'Contact', link: '#' },];



function App() {

  return (
    <div className="App">
      <Suspense fallback={<div>...Loading</div>} >
        <BrowserRouter>
          <div className='Navigation'>

            <h2 className="Navigation__name"> Từ Thái Phong </h2>

            <ul className='Navigation__list'>

              {listElements.map(ele => (
                <li className='Navigation__list--title'
                  key={ele.id}>
                  <Link className='Navigation__list--link' to={`/${ele.title}`}>{ele.title}</Link>
                </li>
              ))}

            </ul>


          </div>


          <div className="Navigation__feature">
            <Switch>
              <Redirect exact from="/" to="/Home" />


              <Route path="/Home"><Introduction /></Route>
              <Route path="/About"><About /></Route>
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
