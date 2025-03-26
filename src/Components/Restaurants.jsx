import { useEffect, useState } from "react"
import RestCard from "./RestCard";
import Shimmer from "./Shimmer";


export default function Restaurants(){

const [restData,setRestData]=useState([]);

/** API call of restaurants  proxyserver to get access of data for testing purpose*/
    useEffect(()=>{

        async function fetchData(){
            const proxyServer = 'https://cors-anywhere.herokuapp.com/'
            const swiggyAPI= "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true";
            const response = await fetch(proxyServer+swiggyAPI)
            const data = await response.json();

/**Desired data is present at restaurant which is an array  */
            setRestData(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants); 
        }
        fetchData();
    },[]);

/** if data not fetched from API then this must be visible for better user experience */
    if(restData.length==0){
        return <Shimmer/>
    }
  
    return(<>
<div className="flex flex-wrap w-[70%] mx-auto mt-20 gap-5">
                {
                    restData?.map((restInfo)=>{
                        return <RestCard key={restInfo?.info?.id} restInfo={restInfo}></RestCard>
                    })
                }
            </div>


    </>)
}