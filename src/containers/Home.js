import React, {Component} from 'react';

class Home extends Component {
   constructor(props){
       super(props)
       this.state={
           name:"Kittinut",
           surname:"Pramhan"
       }
   }
    handleChange = (e) =>{
        const {name,value} = e.target;
        console.log(name);
        this.setState({[name]:value})
      this.setState({[name]:value});

    }

    render() {
       console.log('state',this.state);
        return (
            <div>
                <h1>
                    Hello world Home.js

                </h1>
                <p>
                    name:{this.state.name} <br/>
                    surname:{this.state.surname}
                </p>
                <List foo={this.state.name} bar={this.state.surname}/>
               name: <input type="text" name="name"  onChange={this.handleChange}/>
              surname:  <input type="text" name="surname"  onChange={this.handleChange}/>
            </div>
        )
    }
}

const List = (props) => {
  const {foo,bar} = props;
    return (
        <ul>
            <li>
                hello test {foo +" "+ bar}
            </li>
        </ul>
    )
}

export default Home;
