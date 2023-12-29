
import { useState } from "react";
import Footer from "./Footer";
import Content from "./Content";
import AddItem from "./AddItem";

function App() {
  const [itemList, setItemList] = useState([])



const handleDelete = (id) =>{
  const listItems = itemList.filter(item => item.id !== id)
  setItemList(listItems)
}
  return (
    <div className="App">
        <AddItem
          sendForm={formItem => setItemList([...itemList, formItem])}
        />

        <ul>
          {itemList.length ? (
            itemList.map(item => (
              <Content
                key={item.id}
                item={item}
                handleDelete={handleDelete}
              />
            ))
          ) : <p>Your List is Empty</p>}
        </ul>
        <Footer
          length={itemList.length}
        />
    </div>
    
  );
}

export default App;
