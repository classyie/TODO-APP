import { useState, useRef } from 'react';
import { MdAddShoppingCart } from "react-icons/md";
import styles from './AddItem.module.css';

function AddItem({addItems}){
    const inputValueElement = useRef();
    const dueDateElement = useRef();
    
    const handleOnSubmit = (event) => {
        event.preventDefault();
        const inputValue = inputValueElement.current.value;
        const dueDate = dueDateElement.current.value;
        addItems(inputValue, dueDate);
        inputValueElement.current.value = '';
        dueDateElement.current.value = '';
    }
    return(
        <form className={`${styles.items} row`} onSubmit={handleOnSubmit}>
            <input type="text" placeholder="Enter your Task" className="col-4" ref={inputValueElement} />
            <input type="date" className="col-4" ref={dueDateElement} />
            <button className="col-2 btn btn-success" ><MdAddShoppingCart /></button>
        </form>
    );
}

export default AddItem;