import React from 'react';
import logo from './logo.svg';
import './App.css';
 
class App extends React.Component {
 
 
  state = {
    curYear: ""
  };
 
  componentDidMount() {
    this.getCurYear();
  }
 
  getCurYear = () => {
    var today = new Date(),
 
    curYear = today.getFullYear();
 
    this.setState({ curYear });
  };
 
  render(){
    return (
      <div className="App">
        <p>Current Year: {this.state.curYear}</p>
      </div>
    );
  }
}
 
export default App;