import React,{useContext} from 'react';

const HOST_API = "http://localhost:8080/api"

const List = () => {

  const { dispat,state} = useContext(Store)

  return <div>
    <table>
      <thead>
        <tr>
          <td>ID</td>
          <td>Nombre</td>
          <td>¿Está Completo?</td>
        </tr>
      </thead>
      <tbody>
        {state.list.map((todo) => {
          return <tr key={todo.id}>
            <td>{todo.id}</td>
            <td>{todo.name}</td>
            <td>{todo.isComplete}</td>
            </tr>
        })}
      </tbody>
    </table>
  </div>
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
