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
    let newItem = {Name: newName, dueDate: newDueDate}
    setTodoItems([...todoItems, newItem]);
  }
  let handleDelete = (item)=>{
    console.log(item.Name);
    let newItems = todoItems.filter(olditem => item.Name !== olditem.Name);
    setTodoItems(newItems);
  }
  return (
    <div className="container todoBox">
      <Head />
      <AddItem  addItems={addItems}/>
      {todoItems.length===0 &&  <Welcome />}
      <DisplayItem todoItems={todoItems} onDeleteClick={handleDelete}/>
    </div>
  );
}

export default App;
