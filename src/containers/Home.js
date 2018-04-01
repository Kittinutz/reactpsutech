import React, {Component} from 'react';
import {connect} from 'react-redux';
const WhenGrowup = [
    {id:1 , todos:"Sordier"},
    {id:2 , todos:"Docter"},
    {id:3 , todos:"teacher"},
    {id:4 , todos:"police"},
    ]
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
       console.log(this.props);
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
                <ul>
                    {
                        WhenGrowup.filter(value => value.id != 1).map(value => {
                            return <List id={value.id} todos={value.todos}/>
                        })
                    }

                </ul>
               name: <input type="text" name="name"  onChange={this.handleChange}/>
              surname:  <input type="text" name="surname"  onChange={this.handleChange}/>
            </div>
        )
    }
}

const List = (props) => {
  const {id,todos} = props;
    return (

            <li key={id}>
                {todos}
            </li>

    )
}

mapStateToProps = ( { WhenGrowup }) =>{
    return {
        WhenGrowup
    }
}

export default connect(mapStateToProps,null)(Home);
