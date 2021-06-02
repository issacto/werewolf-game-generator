import React from 'react'
import Router from 'next/router'
import {hasRoom, joinACharacter,getCharacters} from "../../../components/functions/fetch"


class RoomPage extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
        name: '',
        roomId:'',
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

  async handleSubmit(event) {
    alert('A name was submitted: ' + this.state.name +this.state.roomId);
    event.preventDefault();
    var characterData = await joinACharacter(this.state.roomId,this.state.name);
    Router.push(`/room/player?id=${this.state.roomId}&name=${this.state.name}&character=${characterData.data}`);
  }


  render() {
    return (
    <div className="room">
        <form onSubmit={this.handleSubmit} style={{display:"flex",flexDirection:"column",justifyContent:"center",textAlign:"center",alignItems:"center"}}>
          <label style={{marginTop:"2.3vh"}}>
            Your Name:
            <input type="text" value={this.state.name} onChange={this.handleNameChange} />
          </label>
          <label style={{marginTop:"2.3vh"}}>
            Room Id:
            <input type="text" value={this.state.roomId} onChange={this.handleRoomIdChange} />
          </label>
          <input style={{marginTop:"2.3vh", width:"50%"}} type="submit" value="Submit" />
        </form>
    </div>
    
    )
  }
}

export default RoomPage