import { useState } from "react"
import { ImageURL } from "../Utils/Images"



export default function RestInfo({restData}){


    const [isExpanded, setIsExpanded]=useState(false);

    function toggleVisibility(){
        setIsExpanded(!isExpanded);
    }


return(<>

<div className="flex w-full justify-between mb-8 pb-2 flex-wrap">
  {/** Food items price rating and food description */}
  <div className="w-full lg:w-[70%] mb-4 lg:mb-0 max-w-xl" >
    <p className="text-xl text-gray-700 font-semibold mb-1">{restData?.name}</p>
    <p className="text-xl">
      {"₹" + ("defaultPrice" in restData ? restData.defaultPrice / 100 : restData.price / 100)}
    </p>
    <span className="text-green-700">{restData?.ratings?.aggregatedRating?.rating}</span>
    <span>{"(" + restData?.ratings?.aggregatedRating?.ratingCountV2 + ")"}</span>
    <p  className={`transition-all duration-300 ease-in-out ${isExpanded ? "max-h-full" : "max-h-[45px]"} overflow-hidden text-gray-700`}>{restData?.description}</p>
         
          <button onClick={toggleVisibility} className="mt-2 text-gray-500 font-bold">{isExpanded ? "Show Less" : "Show More"}</button>
  </div>

  {/*** food items image and add button */}
  <div className=" md:w-[20%] relative rounded-2xl h-45">
    <img
      className="w-full h-36 object-cover rounded-3xl"
      src={ImageURL.imageBaseURL + restData.imageId}
      alt={restData?.name || "Food item"}
    />
    <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 border-white shadow-md px-6 py-2 bg-white text-green-700 rounded-xl">
      ADD
    </button>
  </div>
</div>


    <hr className="border-gray-300 my-4 "></hr>
</>)
}