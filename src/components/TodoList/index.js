import React, {Component} from 'react';
import TodoItems from '../TodoItems';

class TodoList extends Component{
    constructor(props){
        super(props);
        this.state = {
            tarefa: '',
            items: []
        }
        this.addItem = this.addItem.bind(this);
        this.log = this.log.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    addItem(e){
        let state = this.state;
        if(this._tarefaInput.value !== ''){
            let newItem = {
                text: this._tarefaInput.value,
                key: Date.now()
            };
            this.setState({items: [...state.items, newItem] });
        }

        this.setState({tarefa: ''});
        e.preventDefault();
    }

    log(){
        console.log(this.state.items);
    }

    deleteItem(key){
        let filtro = this.state.items.filter( (item) => {
            return(item.key !== key);
        })
        console.log(filtro);
        this.setState({items: filtro});
    }

    render(){
        return(
            <div>
                <h3>Adicionar tarefas</h3>
                <div className="div-box">
                    <form onSubmit={this.addItem}>
                        <input type="text" maxLength="25" name="tarefa" className="todo-input" value={this.state.tarefa} placeholder="Nova Tarefa"
                                onChange={(event)=> this.setState({tarefa: event.target.value}) }
                                ref={ (event) => this._tarefaInput = event }/>
                        <br/>
                        <button type="submit" className="todo-button">
                            Adicionar
                        </button>

                    </form>
                </div>
                
                <button className="log-button" onClick={this.log}> LOG (console)</button>

                <hr/> <br/>
                <TodoItems lista={this.state.items} delete={this.deleteItem}/>
            </div>
        );
    }
}

export default TodoList;