import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Header from './Header.jsx';
import ActivityFeed from './ui/activityFeed/ActivityFeed.jsx';

const App = () => {
  const [click, setClick] = useState(0);

  return (
    <div className='container'>
      <Header/>
      <div className="container-view">
        <ActivityFeed/>
      </div>
    </div>
  );
};

ReactDOM.render(<App/>, document.getElementById('app'));

export default App;
