import React from 'react'
import Router from 'next/router'
import {hasRoom, getRoomSize,getCharacters} from "../../../components/functions/fetch"


class RoomPage extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
        name: '',
        roomId:' ',
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleRoomIdChange = this.handleRoomIdChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(event) {
    this.setState({name: event.target.value});
  }
  handleRoomIdChange(event) {
    this.setState({roomId: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.name +this.state.roomId);
    event.preventDefault();
    Router.push('/room/player');
  }


  render() {
    return (
    <div className="room">
       <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.name} onChange={this.handleNameChange} />
        </label>
        <label>
          RoomId:
          <input type="text" value={this.state.roomId} onChange={this.handleRoomIdChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
    
    )
  }
}

export default RoomPage