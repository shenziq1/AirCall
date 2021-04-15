import React from "react";
import './css/activitydetail.css'
import CallIcon from "./CallIcon.jsx"
import CallTime from "./CallTime.jsx"
import CallNumber from "./CallNumber.jsx"

class ActivityDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      is_archived: 'F',
    };
  }

  render() {
    let date = new Date(this.props.created_at);
    return (
      <div className='activity_detail'>
        <div className='date'>
          {date.getFullYear() + '-' + (date.getMonth()+1) + '-' + date.getDate()}
        </div>

        <div className='card'>
          <CallIcon
            direction = {this.props.direction}
            call_type = {this.props.call_type}
          />
          <CallNumber
            from = {this.props.from}
            to = {this.props.to}
            via = {this.props.via}
          />
          <CallTime
            created_at = {this.props.created_at}
            duration = {this.props.duration}
          />
          <button
            className="square"
            onClick={() => this.setState({is_archived: "T"})}
          >
            {this.state.is_archived}
          </button>
        </div>
      </div>
    );
  }
}

export default ActivityDetail;
