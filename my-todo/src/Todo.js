import React from 'react';
import ReactDOM from 'react-dom';

class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: "", cateogory: ''}
        // this.onClick = this.onClick.bind(this)
    }
    // };
    onSubmit = e => { 
        e.preventDefault()
        console.log(this.state)
        // this.props.update(this.props.data); 
    }

    changeState = event => {
        this.setState({ data: event.target.value });
    };

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                
                <h2>To-do List</h2>
                <label>Task Name:
                <input type ="text" value={this.state.data} onChange={this.changeState} /><br/>
                </label>


               <label> Category:
                <select onChange={(e) => this.setState({ cateogory: e.target.value })} name="selectList" id="selectList">
                <option value="option 1"> Option 1</option>
                <option value="option 2"> Option 2</option>
                </select>
                </label>

                <br/>
                <button type ="submit">Add item </button>
                {/* {this.state.data}
                {this.state.cateogory} */}
                {/* <Moew  task={this.state}/> */}
            </form>

           
        );
    }
}

export default Todo;