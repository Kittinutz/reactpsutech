import React, {Component} from 'react';
import {filtering} from "../actions/index";
import {connect} from 'react-redux';
// const WhenGrowup = [
//     {id:1 , todos:"Sordier"},
//     {id:2 , todos:"Docter"},
//     {id:3 , todos:"teacher"},
//     {id:4 , todos:"police"},
//     ]
class Home extends Component {
   constructor(props){
       super(props)
       this.state={
           id:"",
           surname:"Pramhan"
       }
   }
    handleChange = (e) =>{
        const {name,value} = e.target;
        console.log(name);
        this.setState({[name]:value})
      this.setState({[name]:value});

    }
    handleSubmit =(e)=>{
       e.preventDefault();
       this.props.filtering(this.state.id);
    }

    render() {
       const  {WhenGrowup} = this.props;
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
                        WhenGrowup.map(value => {
                            return <List key={value.id} id={value.id} todos={value.todos}/>
                        })
                    }

                </ul>
                <form  onSubmit={this.handleSubmit}>
                <input type="text" name="id" onChange={this.handleChange}/>
                <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

const List = (props) => {
  const {todos} = props;
    return (

            <li >
                {todos}
            </li>

    )
}

const mapStateToProps = ( { WhenGrowup }) =>{
    return {
        WhenGrowup
    }
}

export default connect(mapStateToProps,{filtering})(Home);
