import React from 'react'
import Router from 'next/router'
import {hasRoom, getRoomSize,getCharacters,getCharacterPlayers} from "../../components/functions/fetch"
import {charatersImageMap,charatersColorMap} from "../../components/data";
import LinkLogo from "../../components/images/link.svg";
import RefreshLogo from "../../components/images/refresh.svg";

class RoomPage extends React.Component {
    static getInitialProps ({ query }) {
        return { id: query.id}
    }
  
  constructor(props) {
    super(props)
    this.state = {
      roomSize : -1,
      charactersDetails:[]
    };
  }

  async fetchRoomSize(id){
    await getRoomSize(id).then(res => { 
      console.log(res)
      this.setState({roomSize:res.data});return res.data;}).catch(err => {console.log("Error");console.log(err); return err})
  };

  async fetchCharacters(id){
    var charactersJson =[] 
    await getCharacters(id).then(res => { 
      console.log(res.data)
      for (var prop in res.data) {
        charactersJson.push([prop,res.data[prop]]);  
      }
      this.setState({charactersJson:charactersJson})
      return res.data;}).catch(err => {console.log("Error");console.log(err); return err})

    for(var character of charactersJson){
      await getCharacterPlayers(this.props.id,character[0]).then(participants=>{
        console.log("participants")
        console.log(participants.data)
        this.setState({ charactersDetails:[...this.state.charactersDetails,[character[0],character[1],participants.data]]})
      })
      console.log("FINALI")
      console.log(this.state.charactersDetails)
    }
  };

  copyCodeToClipboard = () => {
    var promise = navigator.clipboard.writeText(this.props.id)
  }

  refresh=()=>{
    Router.reload(window.location.pathname);
  }

  componentDidMount(){
    //if room id is not there then return to menu
    hasRoom(this.props.id).then(data=>
      {
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
      <div style={{marginTop:"4vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
        <p>Room number: {this.props.id} </p>
        <LinkLogo 
        width="3.7vh" 
        style={{marginLeft:"3vh"}} 
        onClick={() =>  this.copyCodeToClipboard()}/>
      </div>
      <div style={{marginTop:"2vh"}}>Total number of players: {this.state.roomSize}</div>
      <div style={{marginTop:"2vh"}}>
        <RefreshLogo
        width="3.7vh" 
        height="3.7vh"
        onClick={()=>this.refresh()}
        />
      </div>
      <table className= "displayTable">
      <tr className="tableHeader">
        <td>Role</td>
        <td>Number</td>
        <td>Participants</td>
        <td>Dead </td>
      </tr>
      {
        this.state.charactersDetails?
        
        this.state.charactersDetails.map((data) =>
        <tr style={{color:charatersColorMap.get(data[0])}}>
          <td>
            <div className="displayTableImageSection">
            {charatersImageMap.get(data[0])}
            <br/>
            {data[0]}
            
            </div>
          </td>
          <td>{data[1]}</td>
          <td>{data[2]?
            <div>
              {data[2].map((name)=>
                <li style={{marginTop:"1vh"}}>{name}</li>
              )}
            </div>:null}
          </td>
          <td>
          {data[2]?
            <div>
              {data[2].map((name)=>
                <div style={{display:"flex",flexDirection:"column"}}>
                  <label>  <input type="checkbox"/>
                  </label>
                </div>
              )}
            </div>:null}
              </td>
        </tr>)
        :null
      }
      </table>
      
    </div>
    
    )
  }
}

export default RoomPage