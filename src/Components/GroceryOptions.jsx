import { GroceryData } from "../Utils/GroceryData";
import GroceryCard from "./GroceryCard";



export default function GroceryOptions(){

    return(<>


       <div className="w-[80%] container mx-auto  mt-20  ">

                <div className="flex justify-between items-center">
               <h1 className="font-bold text-[16px] sm:text-2xl" >Shop Groceries on Instamart</h1>
               <div className="flex">
                <span className=" text-5xl text-gray-500 mr-5  hidden md:block">‹</span>
                <span className=" text-5xl text-gray-500 hidden md:block"> ›</span>
               </div>
               </div>

               <div className=" container mx-auto flex flex-nowrap overflow-x-auto mt-5 gap-3 no-scrollbar">
                   {
                       GroceryData?.map((GroceryData)=><GroceryCard key={GroceryData.id} GroceryData={GroceryData}/>)
                       
                   }
               </div>

               </div>
    </>)
}