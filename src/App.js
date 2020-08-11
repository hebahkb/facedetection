import React, { Component } from 'react';
import Navigation from './components/navigation/navigation.js';
import Logo from './components/logo/Logo.js';
import Imglinkform from './components/Imglinkform/Imglinkform.js';
import Rank from './components/Rank/Rank.js';
import FaceRecognition from './components/FaceRecognition/FaceRecognition.js';
import Particles from 'react-particles-js';
import SignIn from './components/SignIn/SignIn.js';
import Register from './components/Register/Register.js';
import 'tachyons';
import './App.css';

const particlesopt = {
              particles: {
                number: {
                    value: 200,
                    density: {
                          enable: true,
                          value_area: 800
                            }                      
                        }
                      } 
                    }

const intialState = {
      input: '',
      imageUrl: '',
      box: {},
      route: 'signin',
      issignedin: false,
      user: {
              id: '',
              name:'',
              email:'',
              entries: 0,
              joined:''
            }
}                    



class App extends Component {
  constructor() {
     super();
     this.state = intialState
  }

  loadUser = (data) => {
    this.setState({user: {
         id: data.id,
         name: data.name,
         email: data.email,
         entries: data.entries,
         joined: data.joined
    }})
  }

  componentDidMount() {
     fetch('https://cryptic-stream-00864.herokuapp.com')
     .then(response => response.json())
     .then(console.log)
  }

  calculateFaceLocation = (data) => {
    const clarifaiFace=data.outputs[0].data.regions[0].region_info.bounding_box;
    const image=document.getElementById('inputimage');
    const width=Number(image.width);
    const height=Number(image.height);
    return {
       leftCol: clarifaiFace.left_col * width,
       topRow: clarifaiFace.top_row * height,
       rightCol: width - (clarifaiFace.right_col * width),
       bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  displayFaceBox = (box) => {
    this.setState({box: box});
  }

  onInputChange = (event) => {
   this.setState({input: event.target.value});
  }

  onButtonSubmit = () => { 
     this.setState( {imageUrl: this.state.input} );
     fetch('https://cryptic-stream-00864.herokuapp.com/imageUrl', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify ({
          input: this.state.input
        })
     })
     .then(response => response.json())
     .then(response => {
      this.displayFaceBox(this.calculateFaceLocation(response))
      if(response) {
        fetch('https://cryptic-stream-00864.herokuapp.com/image', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                   id: this.state.user.id
              })
        })
        .then(response => response.json())
        .then(count => { this.setState(Object.assign(this.state.user, {entries: count}))
      })
        .catch(console.log)
     }

    })
     .catch(err => console.log(err));
  }

  onRouteChange = (route) => {
    if(route === 'signout') {
      this.setState(intialState)
    } else if (route === 'home'){
      this.setState({issignedin: true})
    }
    this.setState({route: route});
  }

  render() {
    const {issignedin, imageUrl, route, box} = this.state;
     return (   
         <div className="App">
           <Particles className='particles' params={particlesopt} />
           <Navigation issignedin={issignedin}onRouteChange={this.onRouteChange} />
           { 
            route === 'home' 
             ?<div> 
                <Logo />
                <Rank name={this.state.user.name} entries={this.state.user.entries} />
                <Imglinkform onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/> 
                <FaceRecognition box={box} imageUrl={imageUrl} />
              </div> 
             :(
                route==='signin' 
                ?<SignIn loadUser = {this.loadUser} onRouteChange={this.onRouteChange} />
                :<Register loadUser = {this.loadUser} onRouteChange={this.onRouteChange} />
            )

           
          }
          </div>
        );
      }
}

export default App;
