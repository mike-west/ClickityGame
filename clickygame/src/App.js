import React, { Component } from 'react';
import ImageCard from "./components/ImageCard";
import images from "./images.json";
import './App.css';

class App extends Component {
  state = {
    images,
    choices : [],
    duplicate: false
  };

  recordImg = id => {
    if (id in this.state.choices) {
      this.setState({duplicate: true});
      // render will deal with this
    } else {
      const choices = this.state.choices.push(id);
      this.setState({choices})
    }
  };


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to the Clickity Game!</h1>
          <h3 classname="App-description">Keep clicking on images, but don't click on the same one more than once!</h3>
        </header>
        {/* <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
        {this.state.images.map(image => {
          return (
            <ImageCard
              image = {image.image}
              id = {image.id}
            />
          );
        })}
      </div>
    );
  }
}

export default App;