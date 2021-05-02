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
      characterList:["Citizen","Citizen","Prophet","Wolf"],
      Citizen: 2,
      Prophet: 1,
      Wolf: 1,
      Cupido:0,
      Wizard:0,
      Hunter:0,
      HiddenWolf:0,
      Merchant:0,
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
    if(this.state.numberOfPeople>this.state.counter) return `Cant choose characters less than ${this.state.numberOfPeople}`;
    else if(this.state.numberOfPeople<this.state.counter) return `Cant choose characters more than ${this.state.numberOfPeople}`;
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

  getCharacterSelected(character){
    switch(character) {
      case "Citizen":
        return this.state.citizenNo
      case "Hunter":
        return this.state.hunterNo
      case "Wizard":
        return this.state.wizardNo
      default: 
        text = "Looking forward to the Weekend";
        break;
    }
  }

  changeCounter(isPlus){
    if(isPlus) this.setState({counter:this.state.counter+1})
    else this.setState({counter:this.state.counter-1})
  }

  changeSize(character,changeSize, isPlus){
    switch(character) {
      case "Citizen":
        if(changeSize>=2)  {this.setState({[character]:changeSize});this.changeCounter(isPlus)};
        break;
      case "Prophet":
        if(changeSize>=1)  {this.setState({[character]:changeSize});this.changeCounter(isPlus)};
        break;
      case "Wolf":
        if(changeSize>=1)  {this.setState({[character]:changeSize});this.changeCounter(isPlus)};
        break;
      default: 
        if(changeSize>=0) {this.setState({[character]:changeSize});this.changeCounter(isPlus)};
        break;
    }
    
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
           
              {charatersImageMap.get(n)}
              <p className="MenuLogoTitle" style={{color:charatersColorMap.get(n)}}>{n}</p>
              <div style={{marginTop:"0.1vh",display:"flex",flexDirection:"row"}}>
                
              <button onClick={()=>this.changeSize(n,this.state[n]-1,false)}>-</button>
              <p style={{color:"white",margin:"2vh"}}> {this.state[n]}</p>
              <button onClick={()=>this.changeSize(n,this.state[n]+1,true)}>+</button>
              </div>
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