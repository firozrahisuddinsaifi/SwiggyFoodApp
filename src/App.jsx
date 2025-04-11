import Home from "./Components/Home"
import RestaurantMenu from "./Components/RestaurantMenu";
import Restaurants from "./Components/Restaurants"
import { BrowserRouter, Routes, Route, HashRouter } from "react-router";
import Search from "./Components/Search";

function App() {


  return (
    <>

    <HashRouter>
      <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/restaurants" element={<Restaurants/>}></Route>
      <Route path="/city/delhi/:id" element={<RestaurantMenu/>}></Route>
      <Route path="/city/delhi/:id/search" element={<Search/>}></Route>
      
      </Routes>
    </HashRouter> 
    </>
  )
}

export default App
