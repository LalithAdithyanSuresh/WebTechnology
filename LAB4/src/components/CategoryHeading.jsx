import styles from "../styles/ListContainer.module.css"

function CategoryHeader({category}){
    return(
        <tr>
            <td colSpan={2} className={styles.categoryRow}>
                {category}
                
            </td>
        </tr>
    )
}
export default CategoryHeader