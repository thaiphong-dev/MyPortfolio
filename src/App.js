import { Suspense } from 'react';
import { BrowserRouter, HashRouter, Redirect, Route, Switch } from 'react-router-dom';
import './App.scss';
import About from './components/About';
import Contact from './components/Contact';
import Introduction from './components/introduction/Introduction';
import Navigation from './components/navigation';
import Portfolio from './components/Portfolio';
import anhbg from './images/bg4.jpg';
import anhbg1 from './images/bg1.jpg';


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

const projectList = [
  {
    id: 0, Pname: "Simple Calculator", content: "This is first project with using Javascript",
    link: "https://thaiphong1101.github.io/calculator/", BGImg: `${anhbg}`, BGColor: "rgb(109, 25, 25)"
  },
  {
    id: 1, Pname: "Mobile login form", content: "This a simple login form ",
    link: "https://thaiphong1101.github.io/loginForm/", BGImg: `${anhbg1}`, BGColor: "rgb(9, 39, 96)"
  },
  // {
  //   id: 1, Pname: "Mobile login form", content: "this a simple login form on mobile",
  //   link: "https://thaiphong1101.github.io/loginForm/", BGImg: `${anhbg1}`, BGColor: "rgb(9, 39, 96)"
  // }, {
  //   id: 1, Pname: "Mobile login form", content: "this a simple login form on mobile",
  //   link: "https://thaiphong1101.github.io/loginForm/", BGImg: `${anhbg1}`, BGColor: "rgb(9, 39, 96)"
  // }, {
  //   id: 1, Pname: "Mobile login form", content: "this a simple login form on mobile",
  //   link: "https://thaiphong1101.github.io/loginForm/", BGImg: `${anhbg1}`, BGColor: "rgb(9, 39, 96)"
  // },
];


function App() {

  return (
    <div className="App">
      <Suspense fallback={<div>...Loading</div>} >
        <HashRouter basename="/">
          <Navigation listElements={listElements} />

          <div className="Navigation__feature">
            <Switch>
              {/* <Redirect exact from="/MyPortfolio" to="/" /> */}
              <Redirect exact from="/" to="/Home" />


              <Route path="/Home"><Introduction /></Route>
              <Route path="/About"><About linkElements={linkElements} /></Route>
              <Route path="/Portfolio"><Portfolio projectList={projectList} /></Route>
              <Route path="/Contact"><Contact /></Route>


            </Switch>
          </div>
        </HashRouter>
      </Suspense>
    </div>
  );
}

export default App;