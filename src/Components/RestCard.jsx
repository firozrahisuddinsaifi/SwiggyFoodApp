import { Link } from "react-router"
import { ImageURL } from "../Utils/Images"


export default function RestCard({restInfo}){

 
    return(<>

{/**Routing is used to navigate to another screen and dynamic id is passed to get details of particular restraunt */}

<Link to={"/city/delhi/"+restInfo?.info?.id}>
<div className="max-w-[280px] transform transition hover:scale-95 duration-200">
        <img className="w-70 h-45 object-cover rounded-xl" src={ImageURL?.imageBaseURL+restInfo?.info?.cloudinaryImageId} ></img>
      
      {/**Restaurants details images rating and cuisines  */}
        <div className="w-[95%] mx-auto mt-2">
            <div className="font-bold">{restInfo?.info?.name}</div>
            <div className="flex gap-2 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 fill-green-600">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
            
            <span className="">{restInfo?.info?.avgRating}</span>
            <span className=" font-semibold"> {restInfo?.info?.sla?.slaString}</span>
        </div>

{/** join() is used to provide gap between items */}
        <div className="text-gray-600 h-6 text-sm overflow-hidden">{restInfo?.info?.cuisines?.join(" ")}</div>
        </div>
</div>
   </Link>


    </>)
}