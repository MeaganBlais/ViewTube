// { Component } means import React and pull of the porperty Component 
// same as declaring Component = React.Component
import React, { Component } from 'react';

// declare class-based component and add functionality by extending Component
// required: define the render method for the class
// required: return jsx
class SearchBar extends Component {
  render() {
    return <input onChange={this.onInputChange} />;
  }

  // event handler naming convention is to use 'handle' OR 'on', the element 
  // you're watching for event on & the name of the event
  onInputChange(event) {
    console.log(event.target.value);
  }
}

export default SearchBar;