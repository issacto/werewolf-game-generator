import React from 'react'
import Router from 'next/router'

class Menu extends React.Component {
    static getInitialProps ({ query }) {
        return { id: query.id,numberOfPeople: query.numberOfPeople}
    }
  
  constructor(props) {
    super(props)
    this.state = {
    };
  }

  next(){
    console.log("numberOfPeople")
      Router.push(`/room?id=${this.props.id}`)
    
  }
  

  render() {
    console.log("1234567890",this.props.numberOfPeople)
    return (
      <div>
    <div>{this.props.id}
    <br></br>
    {this.props.numberOfPeople}
    </div>
    <button onClick={()=>this.next()}>confirm</button>
    </div>
    
    )
  }
}

export default Menu