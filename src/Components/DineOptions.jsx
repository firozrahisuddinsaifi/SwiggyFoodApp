// import { dineoutRestaurants } from "../Utils/DineoutData";
import { dineoutRestaurants } from "../Utils/DineoutData";
import DineCard from "./DineCard";


export default function DineOptions(){


    return(<>

        <div className="w-[80%] container mx-auto mt-20 mb-40">

        <div className="flex justify-between items-center">
        <h1 className="font-bold text-2xl">Discover best restaurants for Dineout</h1>
               <div>
                <span className=" text-5xl text-gray-500 mr-5">‹</span>
                <span className=" text-5xl text-gray-500"> ›</span>
               </div>
               </div>
        <div className="flex flex-nowrap overflow-x-auto mt-5 gap-4 no-scrollbar">
 
        {
            dineoutRestaurants.map((restData)=><DineCard key={restData?.info?.id} restData={restData}/>)
        } 

        </div>

        </div>
    </>)
}