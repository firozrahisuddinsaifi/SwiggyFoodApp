import Home from "./Components/Home"
import RestaurantMenu from "./Components/RestaurantMenu";
import Restaurants from "./Components/Restaurants"
import { BrowserRouter, Routes, Route, HashRouter } from "react-router";
import Search from "./Components/Search";
import SecondaryHome from "./Components/SecondaryHome";
import { store } from "./Stored/stores";
import {Provider} from "react-redux"
import Checkout from "./Components/Checkout";

function App() {


  return (
    <>
  <Provider store={store}>
    <HashRouter>
      <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route element={<SecondaryHome/>}>
      <Route path="/restaurants" element={<Restaurants/>}></Route>
      <Route path="/city/delhi/:id" element={<RestaurantMenu/>}></Route>
      <Route path="/city/delhi/:id/search" element={<Search/>}></Route>
      </Route>
      <Route path="/checkout" element={<Checkout/>}></Route>
      </Routes>
    </HashRouter> 
    </Provider>
    </>
  )
}

export default App
