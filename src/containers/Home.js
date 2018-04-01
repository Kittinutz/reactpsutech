import React, {Component} from 'react';

class Home extends Component {
    render() {
        return (
            <div>
                <h1>
                    Hello world Home.js
                </h1>
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
