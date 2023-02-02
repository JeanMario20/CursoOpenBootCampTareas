import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting';
import GreetingF from './components/pure/greetingF';
import TaskListComponent from './components/containers/task_list';
import ContactoListComponent from './components/containers/Contacto_list';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/*Componente propio de Greeting.jsx */}
        {/* <Greeting name="jean"></Greeting> */}

        {/*Componente de ejemplo funcional*/}
        {/* <GreetingF name ="Martin"></GreetingF> */}
        
        {/*componentes de ListaDO DE tareas*/}
        {/* <TaskListComponent></TaskListComponent> */}

        <ContactoListComponent></ContactoListComponent>


      </header>
    </div>
  );
}


export default App;
