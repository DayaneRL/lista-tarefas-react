import React, {Component} from 'react';
import TodoList from './components/TodoList';
import './style.css';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        return(
            
            <div className="container">
                <TodoList/>
            </div>
        );
    }
}

export default App;