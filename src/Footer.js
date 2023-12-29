const Footer = ({length, items}) =>{
    return(
        <>
            <p>{length} List {length === 1 ? "Item" : "Items"}</p>
        </>
    )
}

export default Footer