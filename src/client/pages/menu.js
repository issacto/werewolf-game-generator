import React from 'react'
import Router from 'next/router'
import styles from '../styles/Home.module.css'
import {getRoom,putCharacter} from "../components/functions/fetch"
import {charatersImageMap,charatersColorMap,charatersList} from "../components/data"

class Menu extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      sizeAvailable:   [5,6,7,8,9,10],
      roomId : 1,
      numberOfPeople:5,
      counter :4,
      Citizen: 2,
      Prophet: 1,
      Wolf: 1,
      Cupido:0,
      Wizard:0,
      Hunter:0,
      HiddenWolf:0,
      Merchant:0,
      fetchCharacterNameArray:[],
      fetchCharacterSizeArray:[]
    };
  }
  async fetchData(){
    await getRoom(this.state.numberOfPeople).then(res => { 
      console.log(res.data)
      this.setState({roomId:res.data});return res.data;}).catch(err => {console.log("Error");console.log(err); return err})
  };

  async putData(){
    for(var character of charatersList){
      if(this.state[character]>0){ 
        //this.state.fetchCharacterNameArray.push(character)
       //this.state.fetchCharacterSizeArray.push(this.state[character])
        await putCharacter(this.state.roomId,character,this.state[character]).then(res => { 
          console.log(res.data);return res.data;}).catch(err => {console.log("Error");console.log(err); return err})
        
      }
    }
    console.log('roomId')
    console.log(this.state.roomId)
    /*
    await putCharacter(this.state.roomId,this.state.fetchCharacterNameArray,this.state.fetchCharacterSizeArray).then(res => { 
      console.log(res.data)
      this.setState({roomId:res.data});return res.data;}).catch(err => {console.log("Error");console.log(err); return err})
    */
  };

  back(x){
    console.log("hihi")
    Router.push('/')
  }

  async confirm(){
    console.log("numberOfPeople");
    console.log(this.state.numberOfPeople);
    if(this.state.numberOfPeople>this.state.counter) alert(`Cannot choose number of characters less than the required number - ${this.state.numberOfPeople}`);
    else if(this.state.numberOfPeople<this.state.counter) alert( `Cannot choose number of characters more than the required number -  ${this.state.numberOfPeople}`);
    else {
      var x = await this.fetchData()
      var y =  this.putData();
      console.log("x")
      console.log(this.state.roomId)
      Router.push(`/room?id=${this.state.roomId}`)
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
        <p style={{marginRight:"2vh"}}>Player count: {this.state.numberOfPeople} </p>
        <p>Classes chosen: {this.state.counter}</p>
      </div>

    <div className="middleBar">
      <p className="middelP">Number of Players: </p>
      {this.state.sizeAvailable.map((n) =>
        <p className="numButton" onClick={()=>this.update(n)} 
        style = {{border: n == this.state.numberOfPeople ? "2px solid #05386B" : "transparent",
                  borderRadius: "5px", 
                  backgroundColor: n == this.state.numberOfPeople ? "#05386B" : "transparent",
                  color: n == this.state.numberOfPeople ? "#EDF5E1" : ""}}>{n}</p>
       )}
    </div>
      
      
      <div className="cardBox">
        {charatersList.map((n) =>
          <div className="cardStyle">
          
            {charatersImageMap.get(n)}
            <p className="MenuLogoTitle" style={{color:charatersColorMap.get(n)}}>{n}</p>
            <div style={{marginTop:"0.1vh",display:"flex",flexDirection:"row"}}>
              
            <button className = {styles.addSubtractButton} onClick={()=>this.changeSize(n,this.state[n]-1,false)}>-</button>
            <p style={{color:"white",margin:"2vh"}}> {this.state[n]}</p>
            <button className = {styles.addSubtractButton} onClick={()=>this.changeSize(n,this.state[n]+1,true)}>+</button>
            </div>
          </div>
        )}
      </div>
      <p>By default, there are 2 Citizens, 1 Prophet, and 1 Wolf</p>
      <div>
        <button className = {styles.naviButton} style = {{marginRight: "1vw"}} onClick={()=>this.back()}>back</button>
        <button className = {styles.naviButton} style = {{marginLeft: "1vw"}} onClick={()=>this.confirm()}>confirm</button>
      </div>
    </div>
    )
  }
}

export default Menu