import { useEffect, useState } from "react";
import { useParams } from "react-router"

export default function RestaurantMenu(){


    let {id}= useParams();

    const [restData,setRestData]=useState(null);

    useEffect(()=>{

        async function fetchData(){
            const proxyServer = 'https://cors-anywhere.herokuapp.com/'
            const swiggyAPI = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.63270&lng=77.21980&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
            const response = await fetch(proxyServer+swiggyAPI)
            const data = await response.json();
             
            setRestData(data);
        }
        fetchData();
    },[]);

    console.log(restData)

    return(<>
    <h1>Hello Coder army {id}</h1>
    </>)    
}