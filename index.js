import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import { ARKit } from 'react-native-arkit';
export default class App extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <ARKit
                    style={{ flex: 1 }}
                    debug // debug mode will show feature points detected and 3D axis
                    planeDetection // turn on plane detection
                    lightEstimation // turn on light estimation
                >
                    <ARKit.Box
                        pos={{ x: 0, y: 0, z: 0 }}
                        shape={{ width: 0.1, height: 0.1, length: 0.1, chamfer: 0.01 }}
                    />
                    <ARKit.Cylinder
                        pos={{ x: 0.4, y: 0, z: 0 }}
                        shape={{ radius: .05, height: 0.1 }}
                    />
                    <ARKit.Pyramid
                        pos={{ x: 0.2, y: 0.15, z: 0 }}
                        shape={{ width: 0.1, height: 0.1, length: 0.1 }}
                    />
                </ARKit>
            </View> 
        );
    }
}
AppRegistry.registerComponent('MyFirstARKitApp', () => App);