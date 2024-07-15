import styles from './AddItem.module.css';
function AddItem(){
    return(
        <div className={`${styles.items} row`}>
            <input type="text" placeholder="Enter your Task" className="col-4"/>
            <input type="date" className="col-4"/>
            <button className="col-2 btn btn-success">Add</button>
        </div>
    );
}

export default AddItem;