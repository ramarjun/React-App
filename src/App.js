import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Loginpage  from './app/Loginpage';

class App extends React.Component{  
   render(){
    return(
      <div className="container">
        <Loginpage />
      </div>
    )
  }
}

export default App;
