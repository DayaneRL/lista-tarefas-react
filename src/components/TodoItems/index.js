import React, {Component} from 'react';

class TodoItems extends Component{
    constructor(props){
        super(props);
        this.state = {
          // status: 'Fazer'
        }
        this.delete = this.delete.bind(this);
        this.changeStatus = this.changeStatus.bind(this);
    }
    
    delete(key){
        this.props.delete(key);
    }

    changeStatus( element, key){
        if(element.value == key && element.className=="unchecked"){
            element.className="checked";
            element.innerHTML  = 'Feito';
        }else if(element.value == key && element.className=="checked"){
            element.className="unchecked";
            element.innerHTML  = 'Fazer';
        }
    }

    render(){
        return(
            <div>
                <div className="div-box">
                <h2> Tarefas </h2>
                <ul>
                    {this.props.lista.map((item)=>{
                        return(
                            <li key={item.key}>{item.text}
                                    <button className="todo-del" onClick={ () => this.delete(item.key)}>Excluir</button>
                                
                                <button className="unchecked" value={item.key}
                                            onClick={(e) => this.changeStatus( e.target, item.key)}>Fazer</button>
                                
                                </li>
                            
                        );
                    })}
                </ul>
                </div>
            </div>
        );
    }
}

export default TodoItems;