import './App.css'
import ListContainer from './components/ListContainer'

function App() {
  const food = [
    {category:"fruits",name:"Apple",price:10,inStock:true},
    {category:"fruits",name:"Banana",price:20,inStock:true},
    {category:"fruits",name:"Orange",price:30,inStock:false},
    {category:"vegetables",name:"Pumpkin",price:56,inStock:true},
    {category:"vegetables",name:"Peas",price:5,inStock:false},
    {category:"vegetables",name:"Spinach",price:10,inStock:true}
  ]
  return (
    <>
      <ListContainer className="ListContainer" item={food}></ListContainer>
    </>
  )
}

export default App
