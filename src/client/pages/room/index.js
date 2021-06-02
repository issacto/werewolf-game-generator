import React from 'react'
import Router from 'next/router'
import {hasRoom, getRoomSize,getCharacters} from "../../components/functions/fetch"
import {charatersImageMap} from "../../components/data"
class RoomPage extends React.Component {
    static getInitialProps ({ query }) {
        return { id: query.id}
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


  componentDidMount(){
    hasRoom(this.props.id).then(data=>
      {
        console.log("ejgvhb")
        console.log(data.data)
        if(data.data){
          this.fetchRoomSize(this.props.id)
          this.fetchCharacters(this.props.id)
        }
        else {Router.push('/menu')};
      }
      
    )
    
  }
  

  render() {
    return (
    <div className="room">
      <div style={{marginTop:"4vh"}}>Room number: {this.props.id}</div>
      <div>Number of people: {this.state.roomSize}</div>
      <table className= "displayTable">
      <tr className="tableHeader">
        <td>Role</td>
        <td>Number</td>
        <td>Participants</td>
      </tr>
      {
        this.state.charactersJson?
        
        this.state.charactersJson.map((data) =>
        <tr>
          <td>
            <div className="displayTableImageSection">
            {charatersImageMap.get(data[0])}
            <br/>
            {data[0]}
            </div>
          </td>
          <td>{data[1]}</td>
          <td>null</td>
        </tr>)
        :null
      }
      </table>
      
    </div>
    
    )
  }
}

export default RoomPage