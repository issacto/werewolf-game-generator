import React from 'react'
import Router from 'next/router'
import {hasRoom, getRoomSize,getPublicRoom} from "../../components/functions/fetch"
import LinkLogo from "../../components/images/link.svg"
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
      <table style={{justifyContent:"center",width:"auto", borderSpacing:"1.5vh"}}>
        <tr>
          <th> </th>
          <th>RoomId</th>
          <th>Copy RoomId</th>
          <th>Copy Link to Room</th>
        </tr>
        <tbody>
        <tr><td>Admin: </td><td> {this.props.id}</td><td><LinkLogo width="10%"/></td><td><LinkLogo width="10%"/></td></tr>
        <tr><td>User: </td><td> {this.state.publicRoomId}</td><td><LinkLogo width="10%"/></td><td><LinkLogo width="10%"/></td></tr>
        </tbody>
      </table>
      <button onClick={()=>this.next()}>confirm</button>
    </div>
    
    )
  }
}

export default Menu