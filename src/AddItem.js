import { useState } from "react"

const AddItem = ({sendForm}) =>{

    const clearForm = {
        itemList: "",
    }
    const [formData, setFormData] = useState(clearForm)

    function publishForm(e){
        e.preventDefault()
        const listInfo = {
            id: Math.floor(Math.random() * 1000),
            itemList: formData.itemList
        }
        sendForm(listInfo)
        setFormData(clearForm)
    }
    const handleInputChanges = (e) =>{
        setFormData({itemList: e.target.value})
    }
    return(
        <>
            <input
                onChange={handleInputChanges}
                value={formData.itemList}
            />
            <button onClick={publishForm}>Add</button>
        </>
    )
}

export default AddItem