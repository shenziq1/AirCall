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
        <div className="buttons">
          <button
            className="inbox"
            onClick={() => {
              setClick(0)
            }
          }
          >
          {"Inbox"}
          </button>

          <button
            className="all-calls"
            onClick={() => {
              setClick(1)
            }
          }
          >
          {"All calls"}
          </button>
        </div>
        {click==0 ? <ActivityFeed/> : <AllCalls/>}
      </div>
    </div>
  );
};

ReactDOM.render(<App/>, document.getElementById('app'));

export default App;
