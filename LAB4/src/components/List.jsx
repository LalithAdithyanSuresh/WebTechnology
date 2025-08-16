import ListElement from "./ListElement";
import CategoryHeader from "./CategoryHeading";

function List({items,viewStock}){
    let rows = []
    let lastCategory = "";
    items.forEach(element => {
        if(!(viewStock && !element.inStock)){
        
            if(element.category != lastCategory){
                rows.push(<CategoryHeader category={element.category} key={element.category }  ></CategoryHeader>)
            }
            rows.push(<ListElement name={element.name} price={element.price} inStock={element.inStock}></ListElement>)
            
            lastCategory = element.category;
        }
    });

    return(
        <>
        {rows}
        </>
    )
}

export default List