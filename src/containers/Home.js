import React, {Component} from 'react';

class Home extends Component {
   constructor(props){
       super(props)
       this.state={
           name:"FOO",
           surname:"BAR"
       }
   }
    render() {
        return (
            <div>
                <h1>
                    Hello world Home.js

                </h1>
                <p>
                    name:{this.state.name} <br/>
                    surname:{this.state.surname}
                </p>
                <List/>
            </div>
        )
    }
}

const List = (props) => {
    return (
        <ul>
            <li>
                hello test
            </li>
        </ul>
    )
}

export default Home;
