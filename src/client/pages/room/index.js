import React from 'react'
import Router from 'next/router'
import {hasRoom, getRoomSize,getCharacters} from "../../components/functions/fetch"

class RoomPage extends React.Component {
    static getInitialProps ({ query }) {
        return { id: query.id}
    }
  
  constructor(props) {
    super(props)
    this.state = {
      roomSize : -1
    };
  }

  async fetchRoomSize(id){
    await getRoomSize(id).then(res => { 
      console.log(res)
      this.setState({roomSize:res.data});return res.data;}).catch(err => {console.log("Error");console.log(err); return err})
  };

  async fetchCharacters(id){
    await getCharacters(id).then(res => { 
      console.log(res);return res.data;}).catch(err => {console.log("Error");console.log(err); return err})
  };


  componentDidMount(){
    if(hasRoom(this.props.id)){
      this.fetchRoomSize(this.props.id)
      this.fetchCharacters(this.props.id)
    }
    else Router.push('/menu');
  }
  

  render() {
    return (
    <div className="room">
      <div>{this.props.id}
      
      </div>
      <div>{this.state.roomSize}</div>
    </div>
    
    )
  }
}

export default RoomPage