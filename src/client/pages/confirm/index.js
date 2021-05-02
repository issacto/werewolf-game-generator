import React from 'react'
import Router from 'next/router'
import {hasRoom, getRoomSize,getPublicRoom} from "../../components/functions/fetch"

class Menu extends React.Component {
    static getInitialProps ({ query }) {
        return { id: query.id,numberOfPeople: query.numberOfPeople}
    }
  
  constructor(props) {
    super(props)
    this.state = {
      roomSize : -1,
      publicRoomId:-1
    };
  }

  
  async fetchRoomSize(id){
    await getRoomSize(id).then(res => { 
      console.log(res)
      this.setState({roomSize:res.data});return res.data;}).catch(err => {console.log("Error");console.log(err); return err})
  };

  async fetchPublicRoom(id){
    await getPublicRoom(id).then(res => { 
      console.log(res)
      this.setState({publicRoomId:res.data});return res.data;}).catch(err => {console.log("Error");console.log(err); return err})
  };

  componentDidMount(){
    if(hasRoom(this.props.id)){
      this.fetchRoomSize(this.props.id)
      this.fetchPublicRoom(this.props.id)
    }
    else Router.push('/menu');
  }
  

  next(){
    console.log("numberOfPeople")
    Router.push(`/room?id=${this.props.id}`)
  }
  

  render() {
    console.log("1234567890",this.props.numberOfPeople)
    return (
    <div className="confirmMain">
      <h1>Links</h1>
      
      
      <div>{this.state.roomSize}</div>
      <div>Admin Link: {this.props.id}</div>
      <div>User Link: {this.state.publicRoomId}</div>

      <button onClick={()=>this.next()}>confirm</button>
    </div>
    
    )
  }
}

export default Menu