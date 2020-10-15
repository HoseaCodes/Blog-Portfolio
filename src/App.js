import React, { Component } from 'react';
import './App.css';
import Home from './Pages/Home/Home'
import Projects from './Pages/Projects/Projects'
import About from './Pages/About/About'
import Articles from './Pages/Articles/Articles'
import Contact from './Pages/Contact/Contact'
import Error from './Pages/Error/Error'
import Shop from './Pages/Shop/Shop';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CalorieKitchen from './Pages/Projects/CalorieKitchen';
import CareerConnect from './Pages/Projects/CareerConnect';
import MergeImmersive from './Pages/Projects/MergeImmersive';
import DevCenter from './Pages/Projects/DevCenter';




export default class App extends Component {
  state = {
    user: null,
    authenticated: false
  }

  render() {

    return (

      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Home
              />
            )}
          />
          <Route
            exact
            path="/projects"
            render={() => (
              <Projects
              />
            )}
          />
          <Route
            exact
            path="/caloriekitchen"
            render={() => (
              <CalorieKitchen
              />
            )}
          />
          <Route
            exact
            path="/devcenter"
            render={() => (
              <DevCenter
              />
            )}
          />
          <Route
            exact
            path="/careerconnect"
            render={() => (
              <CareerConnect
              />
            )}
          />
          <Route
            exact
            path="/mergeimmersive"
            render={() => (
              <MergeImmersive
              />
            )}
          />
          <Route
            exact
            path="/articles"
            render={() => (
              <Articles
              />
            )}
          />
          <Route
            path="/about"
            render={() => (
              <About

              />
            )}
          />
          <Route
            path="/shop"
            render={() => (
              <Shop

              />
            )}
          />
          <Route
            path="/contact"
            render={() => (
              <Contact

              />
            )}
          />

          <Error />
        </Switch>
        {/* // <div className="App">
      //   <Route exact path="/" component={Projects} />
      //   <Route exact path="/articles" component={Articles} />
      //   <Route exact path="/about" component={About} />
      //   <h1>App JS</h1>

      //   <Home />
      // </div> */}
      </BrowserRouter>
    );
  }
}


