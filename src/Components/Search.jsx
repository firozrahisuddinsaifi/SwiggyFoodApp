import { useEffect, useState } from "react"
import { useParams } from "react-router";


export default function SearchFood(){

const {id}=useParams();
    const[food,setFood]=useState("");


    const [restData,setRestData]=useState([]);
 
    
       useEffect(()=>{
    
                async function fetchData(){
        
        const proxyServer = 'https://cors-anywhere.herokuapp.com/'
        const swiggyAPI= `https://www.swiggy.com/dapi/menu/pl/search?lat=28.63270&lng=77.21980&restaurantId=${id}&isMenuUx4=true&query=${food}&submitAction=ENTER`
        const response = await fetch(proxyServer+swiggyAPI);
        const data = await response.json();
        const tempData = data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
        const filterData= tempData.filter((items)=> 'title' in items.card.card)
      
    console.log(data);
        setRestData(filterData);
    }
  
   fetchData()
    },[food, id]);

    return(<>


    <div className="w-[80%] mx-auto mt-20">
        <input className="w-full pl-10 py-4 text-2xl bg-gray-200 outline-0" type="text" placeholder="Search Here" onChange={(e)=>setFood(e.target.value)}></input>
        {
            restData
        }
    </div>
    </>)
}