// { Component } means import React and pull of the porperty Component 
// same as declaring Component = React.Component
import React, { Component } from 'react';

// declare class-based component and add functionality by extending Component
// required: define the render method for the class
// required: return jsx
class SearchBar extends Component {
  render() {
    return <input onChange={event => console.log(event.target.value) } />
  }
}

export default SearchBar;