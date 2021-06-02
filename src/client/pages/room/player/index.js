import React from 'react'
import Router from 'next/router'
import {hasRoom, getRoomSize,getCharacters} from "../../../components/functions/fetch"

class RoomPage extends React.Component {
    static getInitialProps ({ query }) {
        return { id: query.id, name: query.name,character: query.character}
    }
  
  constructor(props) {
    super(props)
    this.state = {
      roomSize : -1,
      charactersJson:[]
    };
  }

  async fetchRoomSize(id){
    await getRoomSize(id).then(res => { 
      console.log(res)
      this.setState({roomSize:res.data});return res.data;}).catch(err => {console.log("Error");console.log(err); return err})
  };

  async fetchCharacters(id){
    await getCharacters(id).then(res => { 
      console.log(res.data)
      var charactersJson =[] 
      for (var prop in res.data) {
        //console.log("Key:" + prop);
        //console.log("Value:" + res.data[prop]);
        charactersJson.push([prop,res.data[prop]]);
      }
      this.setState({charactersJson:charactersJson})
      //this.setState({charactersJson:res.data});
      return res.data;}).catch(err => {console.log("Error");console.log(err); return err})
  };


  

  render() {
    return (
    <div className="room">
      <div>Room number: {this.props.id}</div>
      <div>Your name:{this.props.name} </div>
      <div>Your character: {this.props.character} </div>
    </div>
    
    )
  }
}

export default RoomPage