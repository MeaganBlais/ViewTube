import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDM_UzMxSV2qA2rB_TEGPMM6QXrjq-6PTg';

YTSearch({key: API_KEY, term: 'puppies'}, function(data) {
  console.log(data);
});

// create a function component used to produce HTML
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

// use jsx tags around the component name to create instance
// take component's generated HTML and put it in the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));