import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
function App() {
  let foodItem = ["Sabji", "Green Vegetable", "Roti", "Salad", "Milk", "Ghee"];
  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy Food</h1>
        <ErrorMessage items={foodItem} />
        <FoodInput></FoodInput>
        <FoodItems items={foodItem}></FoodItems>
      </Container>
    </>
  );
}

export default App;
