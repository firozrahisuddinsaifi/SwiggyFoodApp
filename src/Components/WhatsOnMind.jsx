 import { useEffect, useState } from "react";

import { ImageURL } from "../Utils/Images";


 export default function WhatsOnMind(){

     const [restData,setRestData]=useState([]);
    
     /** API call of restaurants  proxyserver to get access of data for testing purpose*/
     useEffect(()=>{

        async function fetchData(){
            const proxyServer = 'https://cors-anywhere.herokuapp.com/'
            const swiggyAPI= "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true";
            const response = await fetch(proxyServer+swiggyAPI)
            const data = await response.json();

            console.log(data);

/**Desired data is present at restaurant which is an array  */
            setRestData(data?.data?.cards[0]?.card?.card); 
        }
        fetchData();
    },[]);


           
         return(<>


                 <div className="w-[70%] mx-auto flex justify-between items-center">
                 <h1 className="font-bold text-[16px] sm:text-2xl">{restData?.header?.title}</h1>
              
                <div className="flex">
                 <span className=" text-5xl text-gray-500 mr-5 hidden md:block">‹</span>
                 <span className=" text-5xl text-gray-500 hidden md:block"> ›</span>
                </div> 
                </div>
             
                 <div className="w-[70%] container mx-auto flex flex-nowrap overflow-x-auto no-scrollbar">
               
                     {
                         restData?.imageGridCards?.info?.map((curr)=>{
                             return<>
                                 <div className="flex-none w-40">
                                 <a href={curr?.action?.link}>
                                     <img className="w-40 h-50 object-cover" src={ImageURL?.imageBaseURL+curr?.imageId}></img>
                                     </a>
                                 </div>
                             </>
                         })
                     }    
                 </div>
         </>)
 }




