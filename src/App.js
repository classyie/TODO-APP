import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Head from './Components/Head';
import AddItem from './Components/AddItem';
import DisplayItem from './Components/DisplayItem';

function App() {
  const todoItems = [
    {
      Name: "Complete project report",
      dueDate: "2024-07-20"
    },
    {
      Name: "Schedule team meeting",
      dueDate: "2024-07-15"
    },
    {
      Name: "Submit timesheet",
      dueDate: "2024-07-18"
    }
  ]
  
  return (
    <div className="container todoBox">
      <Head />
      <AddItem />
      <DisplayItem  todoItems={todoItems}/>
    </div>
  );
}

export default App;
