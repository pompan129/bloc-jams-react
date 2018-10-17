import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div  className="w3-top">
          <header className="w3-bar w3-white w3-wide w3-card">
            <div  className="w3-cell-row">
              <div className="w3-container w3-cell">
                <Link to='/'  className="w3-bar-item w3-button"><span style={{fontSize:"2em"}}><b>B</b>loc <b>J</b>ams</span></Link>
              </div>
              <nav className="w3-container w3-cell w3-cell-middle">
                <Link to='/library' className="w3-bar-item w3-button w3-right" >Listen Now!</Link>
              </nav>
            </div>
            
            
          </header>
        </div>
        
         <main style={{border:"1px solid green"}}>
          <Route exact path="/" component={Landing} />
          <Route path="/library" component={Library} />
          <Route path="/album/:slug" component={Album} />
         </main>
      </div>
    );
  }
}

export default App;
