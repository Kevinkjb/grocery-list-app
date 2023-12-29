import { useState } from "react";
import { FaRegTrashCan } from "react-icons/fa6";

const Content = ({ item, handleDelete }) =>{
    const [toggle, setToggle] = useState(false)

    return(
        <>
            <li>
                <input 
                    type="checkbox"
                    onChange={() => setToggle(!toggle)}
                />

                <label style={toggle ? {textDecorationLine: "line-through", color: "gray"}:{textDecorationLine: "none"}}>
                    {item.itemList}
                </label>
                <FaRegTrashCan onClick={() => {handleDelete(item.id)}}/>
            </li>
        </>
    )
}

export default Content

