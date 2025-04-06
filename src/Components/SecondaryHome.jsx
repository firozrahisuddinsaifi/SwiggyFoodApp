import { Outlet } from "react-router";
import RestHeader from "./RestHeader";
import WhatsOnMind from "./WhatsOnMind";


export default function SecondaryHome(){

    return(<>
        <RestHeader/>
        <Outlet></Outlet>
    </>)
}