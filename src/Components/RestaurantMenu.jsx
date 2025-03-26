import { useEffect, useState } from "react";
import { useParams } from "react-router"
import MenuCard from "./MenuCard";
import Footer from "./Footer";

export default function RestaurantMenu(){


    let {id}= useParams();

    const [restData,setRestData]=useState([]);
/** API call of individual restaurant using their id's getting dynamic data */
    useEffect(()=>{

        async function fetchData(){
            const proxyServer = 'https://cors-anywhere.herokuapp.com/'
            const swiggyAPI = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.63270&lng=77.21980&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
            const response = await fetch(proxyServer+swiggyAPI)
            const data = await response.json();

            const tempData = data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards

            /**
             * add filter functionality to get data with title key only in object 
             */
             const filterData = tempData.filter((items)=>'title' in items.card.card)
            setRestData(filterData);
        }
        fetchData();
    },[id]);



    return(<>
    
            <div className="w-[80%] mx-auto mt-20 mb-20">
            
                {
                    restData.map((menuItems)=><MenuCard key={menuItems?.card?.card?.title} menuItems={menuItems?.card?.card}/>)
                }

            </div>
            
            <Footer/>
    </>)    
}