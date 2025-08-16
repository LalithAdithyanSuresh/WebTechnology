import List from "./list";
import { useState } from "react";
import styles from "../styles/ListContainer.module.css"
function ListContainer({item}){
    const [viewStock, setViewStock] = useState(false);


    return(
        <>
        <label style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px" }}>
            <input
                type="checkbox"
                checked={viewStock}
                onChange={e => setViewStock(e.target.checked)}
            />
            Show items in stock
        </label>

        <table className={styles.table}>
            <thead>
                <tr>
                    <td>Name</td>
                    <td>Price</td>
                </tr>
            </thead>
            <tbody>
                <List items={item} viewStock = {viewStock}></List>
            </tbody>
            
        </table>
        
        </>
    )
}

export default ListContainer;