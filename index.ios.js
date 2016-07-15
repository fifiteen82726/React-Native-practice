// Hello world start

// import React, { Component } from 'react';
// import { AppRegistry, Text } from 'react-native';

// class HelloWorldApp extends Component {
//   render() {
//     return (
//       <Text>!</Text>
//     );
//   }
// }

// AppRegistry.registerComponent('AwesomeProject', () => HelloWorldApp);

// Hello world end


/////////////////////////////////////
// Image start

import React, { Component } from 'react';
import { AppRegistry, Image } from 'react-native';

class Bananas extends Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <Image source={pic} style={{width: 193, height: 110}}/>
    );
  }
}

AppRegistry.registerComponent('AwesomeProject', () => Bananas);
// Image end