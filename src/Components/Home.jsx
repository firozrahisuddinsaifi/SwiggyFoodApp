import DineOptions from "./DineOptions";
import FoodOptions from "./FoodOptions";
import Footer from "./Footer";
import GroceryOptions from "./GroceryOptions";
import Header from "./Header";


export default function Home(){

    return(<>

              <Header/>
              <FoodOptions/>
              <GroceryOptions />
              <DineOptions/>
              <Footer/>
    </>)
}