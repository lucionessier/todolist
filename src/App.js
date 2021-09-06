import './App.css';
// import TodoForm from "./components/TodoForm";
import TodoList from './components/TodoList';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <div className="todo-app">
      <TodoList/>
    </div>
    <Footer/>
    </>
  );
}

export default App;
