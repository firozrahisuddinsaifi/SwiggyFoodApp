import { useState } from "react";
import { GroceryData } from "../Utils/GroceryData";
import GroceryCard from "./GroceryCard";



export default function GroceryOptions(){

    const [slide,setSlide]=useState(0);

    function nextBtn(){
        const maxSlide = GroceryData.length - 4;
        if (slide >= maxSlide) return;
        setSlide(slide+4);
        
    }
    function prevBtn(){
        if(slide==0)
            return false;
        setSlide(slide-4);
    }

    return(<>


       <div className="w-[80%] container mx-auto  mt-20  ">

                <div className="flex justify-between items-center">
               <h1 className="font-bold text-[16px] sm:text-2xl" >Shop Groceries on Instamart</h1>
               <div className="flex">
                <span className={`text-5xl  mr-5  hidden md:block hover:cursor-pointer ${slide==0? "text-gray-300  hover:cursor-none":"text-gray-500"} `}onClick={prevBtn}>‹</span>
                <span className={`text-5xl  mr-5  hidden md:block hover:cursor-pointer ${slide==20? "text-gray-300  hover:cursor-none":"text-gray-500"} `} onClick={nextBtn}> ›</span>
               </div>
               </div>

               <div className="container mx-auto flex flex-nowrap overflow-x-auto mt-5 gap-3 no-scrollbar">
                   {
                       GroceryData?.map((GroceryData)=><GroceryCard key={GroceryData.id} GroceryData={GroceryData} slide={slide}/>)
                       
                   }
               </div>

               </div>
    </>)
}