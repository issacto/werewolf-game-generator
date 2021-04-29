import React from 'react'
import Router from 'next/router'
import {getRoom} from "../components/functions/fetch"

class Menu extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      counter:   [5,6,7,8],
      displayRoom : 1,
      numberOfPeople:-1
    };
  }
  async fetchData(){
    await getRoom().then(res => { 
      console.log(res.data)
      this.setState({displayRoom:res.data});return res.data;}).catch(err => {console.log("Error");console.log(err); return err})
  };

  back(x){
    console.log("hihi")
    Router.push('/')
  }

  async confirm(){
    console.log("numberOfPeople");
    console.log(this.state.numberOfPeople);
    if(this.state.numberOfPeople==-1) return 1;
    else {
      var x = await this.fetchData()
      console.log("x")
      console.log(this.state.displayRoom)
      Router.push(`/confirm?id=${this.state.displayRoom}&numberOfPeople=${this.state.numberOfPeople}`)
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
    <div>{this.state.displayRoom}
      <table>
      <tbody>
      <tr>
        {this.state.counter.map((n) =>
        <th>
          <p onClick={()=>this.update(n)}>{n}</p>
        </th> )}
      </tr>
      </tbody>
      </table>
      <button onClick={()=>this.confirm()}>confirm</button>
      <button onClick={()=>this.back()}>back</button>
    </div>
    )
  }
}

export default Menu