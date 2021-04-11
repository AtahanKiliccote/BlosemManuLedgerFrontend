
import React, {Component} from 'react';
import Home from './Home.js'
import '../css/App.css'

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      email: ''
    }
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }
  
  handleLogoutClick() {
    this.setState({email: ''}); 
    //Auth logout 
  }

  render() {
    return(
      <div>
        <div class = "wrapper">
          <button type="submit" class = "button" onClick={(e) => this.handleLogoutClick(e)}>Logout</button>
        </div>
        <div>
          <Home/>
        </div>
      </div>
    )
  }

}

  export default App;