import ItemPrint from "./ItemPrint";
function DisplayItem({ todoItems }) {
  return (
    <>
      <ul>
        {todoItems.map((item) => {
            return (<ItemPrint item = {item} key={item.Name}/>)
        }
)}   
      </ul>
    </>
  );
}

export default DisplayItem;
