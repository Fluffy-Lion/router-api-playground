// npm install!

import React, { useState } from 'react'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'
import './App.css';

import Pokemon from './components/Pokemon'
//information in the provided can be avaibale in the context
const App = () => {
  const [count, setCount] = useState(0)

  const increaseCount = () => {
    return (
      setCount(count + 1)

    )
  }


  return (
    <div className="App">
      <Router>
        <nav className="navBar">
          <div><Link to="/">home</Link></div>
          <div><Link to="/about">about</Link></div>
          <div><Link to="/contact">contact</Link></div>
          <div><Link to="/pokemon">pokemon</Link></div>
        </nav>

        <Switch>
          <Route exact path="/">
            <h1>hello</h1>
          </Route>
          <Route path="/about">
            <h1>{count}</h1>
            <button onClick={increaseCount}>plus 1</button>
          </Route>
          <Route path="/contact">
            <h1>contact</h1>
          </Route>
          <Route path="/pokemon">
            <Pokemon/>
          </Route>
        </Switch>
        {/* <div>
          <h1>hello</h1>
        </div> */}
      </Router>
    </div>
  );
}

export default App;
