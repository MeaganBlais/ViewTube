// { Component } means import React and pull of the porperty Component 
// same as declaring Component = React.Component
import React, { Component } from 'react';

// declare class-based component and add functionality by extending Component
// required: define the render method for the class
// required: return jsx
class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  render() {
    return (
      <div className="search-bar">
        <input 
        value={this.state.term}
        onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;