import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

import Header from './Header.jsx';
import ActivityFeed from './ActivityFeed.jsx';
import AllCalls from './AllCalls.jsx'

const App = () => {
  const [click, setClick] = useState(0);

  return (
    <div className='container'>
      <Header/>
      <div className="container-view">
        <button
          className="archive_all"
          onClick={() => {
            if (click == 0){
              setClick(1)
            } else {
              setClick(0)
            }
          }
        }
        >
        {click==0 ? "inbox" : "all calls"}
        </button>
        {click==0 ? <ActivityFeed/> : <AllCalls/>}
      </div>
    </div>
  );
};

ReactDOM.render(<App/>, document.getElementById('app'));

export default App;
