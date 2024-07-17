import { useState } from 'react';
import { MdAddShoppingCart } from "react-icons/md";
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
    const handleOnSubmit = (event) => {
        event.preventDefault();
        handleInput(inputvalue, dueDate);
    }
    const handleInput = (inputValue, dueDate) => {
        console.log(`Task: ${inputvalue}, Due Date: ${dueDate}`);
        addItems(inputValue, dueDate);
        setInputValue("");
        setDueDate("");
    }
    return(
        <form className={`${styles.items} row`} onSubmit={handleOnSubmit}>
            <input type="text" placeholder="Enter your Task" className="col-4" onChange={handleInputValue} value={inputvalue}/>
            <input type="date" className="col-4" onChange={handleDueDate}  value={dueDate} />
            <button className="col-2 btn btn-success" ><MdAddShoppingCart /></button>
        </form>
    );
}

export default AddItem;