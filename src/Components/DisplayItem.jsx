import ItemPrint from "./ItemPrint";
function DisplayItem({ todoItems, onDeleteClick }) {
  return (
    <>
      <ul>
        {todoItems.map((item) => {
            return (<ItemPrint item = {item} key={item.Name} onDeleteClick={onDeleteClick}/>)
        }
)}   
      </ul>
    </>
  );
}

export default DisplayItem;
