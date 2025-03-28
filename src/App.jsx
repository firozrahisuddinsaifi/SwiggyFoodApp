import Home from "./Components/Home"
import RestaurantMenu from "./Components/RestaurantMenu";
import Restaurants from "./Components/Restaurants"
import { BrowserRouter, Routes, Route } from "react-router";
import Search from "./Components/Search";

function App() {


  return (
    <>

    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/restaurants" element={<Restaurants/>}></Route>
      <Route path="/city/delhi/:id" element={<RestaurantMenu/>}></Route>
      <Route path="/city/delhi/:id/search" element={<Search/>}></Route>
      
      </Routes>
    </BrowserRouter> 
    </>
  )
}

export default App
