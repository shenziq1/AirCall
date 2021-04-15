import React from 'react';
import ReactDOM from 'react-dom';

import Header from './Header.jsx';
import ActivityDetail from './ActivityDetail.jsx';
import ActivityFeed from './ActivityFeed.jsx';

const App = () => {
  return (
    <div className='container'>
      <Header/>
      <div className="container-view">Some activities should be here</div>
      <ActivityDetail
        created_at = "2018-04-18T16:59:48.000Z"
        direction = "outbound"
        from = "Jonathan Anguelov"
        to = "06 45 13 53 91"
        via = "NYC Office"
        duration ="60"
        is_archived = "false"
        call_type ="missed"
      />

      <ActivityDetail
        created_at = "2018-04-18T16:59:48.000Z"
        direction = "outbound"
        from = "Jonathan Anguelov"
        to = "06 45 13 53 91"
        via = "NYC Office"
        duration ="60"
        is_archived = "false"
        call_type ="missed"
      />

      <ActivityFeed />
    </div>
  );
};

ReactDOM.render(<App/>, document.getElementById('app'));

export default App;
