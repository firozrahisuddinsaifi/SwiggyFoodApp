import { useState } from "react";
import { dineoutRestaurants } from "../Utils/DineoutData";
import { ImageURL } from "../Utils/Images";
import DineCard from "./DineCard";


export default function DineOptions(){
    const [slide,setSlide]=useState(0);

    function nextBtn(){
        const maxSlide = dineoutRestaurants.length - 4;
      
        if (slide >= maxSlide) return false;
        setSlide(slide+3);
        
    }
    function prevBtn(){
        if(slide==0)
            return false;
        setSlide(slide-3);
    }

    return(<>

        <div className="w-[80%] container mx-auto mt-20">

        <div className="flex justify-between items-center">
        <h1 className="font-bold text-[16px] sm:text-2xl">Discover best restaurants for Dineout</h1>
               <div className="flex">
               <span className={`text-5xl  mr-5  hidden md:block hover:cursor-pointer ${slide==0? "text-gray-300  hover:cursor-none":"text-gray-500"} `}onClick={prevBtn}>‹</span>
                <span className={`text-5xl  mr-5  hidden md:block hover:cursor-pointer ${slide>=6? "text-gray-300  hover:cursor-none":"text-gray-500"} `} onClick={nextBtn}> ›</span>
 </div>
               </div>
        <div className="flex flex-nowrap overflow-x-auto mt-5 gap-4 no-scrollbar">
 
        {
            dineoutRestaurants.map((restData)=><DineCard key={restData?.info?.id} restData={restData} slide={slide}/>)
        } 

        </div>



        </div>

        <div className="">

    <img className="mt-30 w-[100%] mb-40" src={ImageURL.imageBaseURL+"fl_lossy,f_auto,q_auto/portal/m/seo/App_download_banner.png"}></img>
</div>
    </>)
}