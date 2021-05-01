import React from 'react'
import Router from 'next/router'
import {getRoom} from "../components/functions/fetch"
import {charatersList} from "../components/data"
import {charatersImageMap,charatersColorMap} from "../components/data"

class Menu extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      sizeAvailable:   [5,6,7,8,9,10],
      roomId : 1,
      numberOfPeople:5,
      counter :4,
      characterList:["Citizen","Citizen","Prophet","Wolf"]

    };
  }
  async fetchData(){
    await getRoom(this.state.numberOfPeople).then(res => { 
      console.log(res.data)
      this.setState({roomId:res.data});return res.data;}).catch(err => {console.log("Error");console.log(err); return err})
  };

  back(x){
    console.log("hihi")
    Router.push('/')
  }

  async confirm(){
    console.log("numberOfPeople");
    console.log(this.state.numberOfPeople);
    if(this.state.numberOfPeople>=this.state.counter) return `Cant choose characters less than ${this.state.numberOfPeople}`;
    else if(his.state.numberOfPeople<=this.state.counter) return `Cant choose characters more than ${this.state.numberOfPeople}`;
    else {
      var x = await this.fetchData()
      console.log("x")
      console.log(this.state.roomId)
      Router.push(`/confirm?id=${this.state.roomId}&numberOfPeople=${this.state.numberOfPeople}`)
      //console.log(x)
    }
  }

  update(number){
    console.log(number)
    var stringNumber= parseInt(number)
    this.setState({numberOfPeople:stringNumber})
  }

  render() {
    return (
    <div className="menu">
      <div className="topBar">
        <p style={{marginRight:"2vh"}}>Required Size: {this.state.numberOfPeople} </p>
        <p>People chosen: {this.state.counter}</p>
      </div>

    <div className="middleBar">
      <p className="middelP">Choose your size: </p>
      {this.state.sizeAvailable.map((n) =>
        <p className="middelP" onClick={()=>this.update(n)}>{n}</p>
       )}
    </div>
      
      
      <div className="cardBox">
        {charatersList.map((n) =>
          <div className="cardStyle">
            <p className="MenuLogoTitle" style={{color:charatersColorMap.get(n)}}>{n}</p>
              {charatersImageMap.get(n)}
          </div>
        )}
      </div>
      <p>Base Case:  2 Citizens + 1 Prophet +1 Wolf</p>
      <button onClick={()=>this.confirm()}>confirm</button>
      <button onClick={()=>this.back()}>back</button>
    </div>
    )
  }
}

export default Menu