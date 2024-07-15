import { useState } from 'react';
import styles from './AddItem.module.css';
function AddItem({addItems}){
    let [inputvalue, setInputValue] = useState("");
    let [dueDate, setDueDate] = useState("");
    let handleInputValue = (event) => {
        setInputValue(event.target.value);
        console.log(event.target.value);
    }
    let handleDueDate = (event) => {
        setDueDate(event.target.value);
    }
    const handleInput = (inputValue, dueDate) => {
        console.log(`Task: ${inputvalue}, Due Date: ${dueDate}`);
        addItems(inputValue, dueDate);
        setInputValue("");
        setDueDate("");
    }
    return(
        <div className={`${styles.items} row`}>
            <input type="text" placeholder="Enter your Task" className="col-4" onChange={handleInputValue} value={inputvalue}/>
            <input type="date" className="col-4" onChange={handleDueDate}  value={dueDate} />
            <button className="col-2 btn btn-success" onClick={() => handleInput(inputvalue, dueDate)}>Add</button>
        </div>
    );
}

export default AddItem;