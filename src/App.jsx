import React from 'react';
import ReactDOM from 'react-dom';

import Header from './Header.jsx';
import ActivityFeed from './ActivityFeed.jsx';

const App = () => {
  return (
    <div className='container'>
      <Header/>
      <div className="container-view">Some activities should be here</div>
      <ActivityFeed />
    </div>
  );
};

ReactDOM.render(<App/>, document.getElementById('app'));

export default App;
