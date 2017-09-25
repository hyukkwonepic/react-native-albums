// Index.ios.js - place code in here for iOS

// Import a library to help create a component
import React from "react";
import { AppRegistry, Text } from "react-native";

// Create a component
const App = () => {
    return (
        <Text>Some Text</Text>
    );
};

// Render it to the device
AppRegistry.registerComponent("albums", () => App);