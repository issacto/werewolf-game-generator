import React from 'react'
import Router from 'next/router'
import {getAllReviews} from "../components/functions/fetch"

class Menu extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      counter:   [5,6,7,8],
      displayRoom : 1
    };
  }
  componentDidMount() {
    this.fetchData();
  }
  componentDidUpdate() {
    this.fetchData();
  }
  async fetchData(){
    getAllReviews().then(res => { 
      console.log("ådata")
      console.log(res.data)
      this.setState({displayRoom:res.data});return;}).catch(err => {console.log("Error");console.log(err); return err})
  };

  navigate(x){
    console.log("hihi")
    Router.push('/')

  }

  render() {
    return (
    <div>{this.state.displayRoom}
      <table>
      <tbody>
      <tr>
        {this.state.counter.map((n) =>
        <th>
          <div onClick={()=>this.navigate(n)}>{n}</div>
        </th> )}
      </tr>
      </tbody>
      </table>
    </div>
    )
  }
}

export default Menu