import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Head from './Components/Head';
import AddItem from './Components/AddItem';
import DisplayItem from './Components/DisplayItem';
import Welcome from './Components/Welcome';
import { useState } from 'react';

function App() {
  
  let [todoItems, setTodoItems] = useState([]);
  let addItems = (newName, newDueDate) => { 
    let newItem = {Name: newName, DueDate: newDueDate}
    setTodoItems([...todoItems, newItem]);
  }
  return (
    <div className="container todoBox">
      <Head />
      <AddItem  addItems={addItems}/>
      {todoItems.length===0 &&  <Welcome />}
      <DisplayItem todoItems={todoItems} />
    </div>
  );
}

export default App;
