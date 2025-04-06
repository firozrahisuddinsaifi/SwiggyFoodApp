import { useEffect, useState } from "react";
import { Link, useParams } from "react-router"
import MenuCard from "./MenuCard";
import Footer from "./Footer";
import RestMenuShimmer from "./RestMenuShimmer";

export default function RestaurantMenu(){


    let {id}= useParams();

    const [restData,setRestData]=useState([]);
    const [selected,setSelected]=useState(null);
/** API call of individual restaurant using their id's getting dynamic data */
    useEffect(()=>{

        async function fetchData(){
            const proxyServer = 'https://cors-anywhere.herokuapp.com/'
            const swiggyAPI = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.63270&lng=77.21980&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
            const response = await fetch(proxyServer+swiggyAPI)
            const data = await response.json();

            const tempData = data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards

            /**
             * add filter functionality to get data with title key only in object 
             */
             const filterData = tempData.filter(items=>'title' in items.card.card)
            setRestData(filterData);
        }
        fetchData();
    },[id]);

if(restData.length===0)
    return <RestMenuShimmer/>
    return(<>
    <div >

    <div className="w-[80%] mx-auto mt-30 mb-20">
    <Link to={`/city/delhi/${id}/search`}>
            <p className="w-full text-center text-2xl py-4 bg-gray-200 rounded-2xl">Search For Dishes</p>
</Link>
    </div>
<div className="max-w-[80%] mb-20 mt-20 mx-auto"> 
<button className={`border rounded-2xl py-2 px-8 text-2xl mr-4 ${selected==="veg"? "text-green-700":"text-gray-500"} `} onClick={()=>setSelected(selected=="veg"?null:"veg")}>Veg</button>
<button className={`border rounded-2xl py-2 px-8 text-2xl mr-4 ${selected==="nonveg"? "text-red-900":"text-gray-500"}`} onClick={()=>setSelected(selected=="nonveg"?null:"nonveg")}>Non Veg</button>

</div>
            <div className="w-[80%] mx-auto mt-20 mb-20">
            
                {
                    restData?.map((menuItems)=><MenuCard key={menuItems?.card?.card?.title} menuItems={menuItems?.card?.card} selected={selected}/>)
                }

            </div>
            
            </div>
            <Footer/>
    </>)    
}