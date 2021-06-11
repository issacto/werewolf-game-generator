import React from 'react'
import Router from 'next/router'
import styles from '../styles/Home.module.css'
import {hasRoom, getRoomSize,getCharacters} from "../../../components/functions/fetch"
import {charatersImageMap,charatersColorMap} from "../../../components/data"

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

  componentDidMount(){
    //if room id is not there then return to menu
    hasRoom(this.props.id).then(data=>
      {
        console.log(data.data)
        if(!data.data){
          alert("Room does not exist. Please do not alter the url")
          Router.push('/room/player/info');
        }
      }
    )
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
        charactersJson.push([prop,res.data[prop]]);
      }
      this.setState({charactersJson:charactersJson})
      return res.data;}).catch(err => {console.log("Error");console.log(err); return err})
  };


  

  render() {
    return (
    <div className="room">
      <p className = {styles.regText}>You have been given the role of</p>
      <h1 style={{color:charatersColorMap.get(this.props.character)}}>{this.props.character} </h1>
      <div>{charatersImageMap.get(this.props.character)}</div>
      <br/>
      <div>Name: {this.props.name} </div>
      <div>Room number: {this.props.id}</div>
      
    </div>
    
    )
  }
}

export default RoomPage