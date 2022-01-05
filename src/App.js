import React, { Component } from 'react';

/// Modifica el componente para que se puedan agregar tareas, tachar y destacharlas y error de validacion en el input

class App extends Component {
  constructor() {
    super()
    this.state = {
      tasks: [
        { id: 1, name: "Sacar la ropa", done: false },
        { id: 2, name: "Hacer la cama", done: true },
        { id: 3, name: "Leer un rato", done: false }
      ],
      newTask: ''
    }
  }

  handleChange = (e) => {
    this.setState({ newTask: e.target.value });
  }

  handleSubmit = (e) => {
    if (this.state.newTask > 1) {
      const taskCopy = [...this.state.tasks];
      taskCopy.push({ id: this.state.tasks.length + 1, name: this.state.newTask, done: false });
      this.setState({ tasks: taskCopy, newTask: "" });
    }
    e.preventDefault();
  }

  handleClick = (index) => {
    const copy = [...this.state.tasks];
    copy[index].done = !this.state.tasks[index].done;
    this.setState({ tasks: copy })
  }

  render() {
    return (
      <div className="wrapper">
        <div className="list">
          <h3>Por hacer:</h3>
          <ul className="todo">
            {this.state.tasks.map((task, index) => <li key={task.id} className={task.done ? 'done' : ''} onClick={() => { this.handleClick(index) }}>{task.name}</li>)}
          </ul>
          <form onSubmit={this.handleSubmit}>
            <input type="text" id="new-task" className={this.state.newTask.length > 1 ? '' : 'error'} placeholder="Ingresa una tarea y oprime Enter" value={this.state.newTask} onChange={this.handleChange} />
          </form>
        </div>
      </div>
    )
  }
}

export default App;
