import styles from './ItemPrint.module.css';
function ItemPrint({item}){
    return (<>
        <div className="row" >
        <p className="col-4">{item.Name}</p>
        <p className="col-4">{item.dueDate}</p>
        <button className={`${styles.buttonStyle} col-2 btn btn-danger`}>Delete</button>
        </div>
    </>);
}
export default ItemPrint;