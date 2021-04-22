import React from 'react'
import Router from 'next/router'

class Menu extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      counter:   [5,6,7,8]
    };
  }

  navigate(x){
    console.log("hihi")
    Router.push('/')

  }

  render() {
    return <div>
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
  }
}

export default Menu