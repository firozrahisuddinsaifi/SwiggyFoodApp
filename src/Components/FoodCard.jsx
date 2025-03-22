import { ImageURL } from "../Utils/Images";




export default function FoodCard({foodData}){


    return(<>

 
        <a href={foodData?.action?.link}>
        <img className="w-36 h-40 object-cover" src={ImageURL?.imageBaseURL+foodData?.imageId}></img>
  
        </a>
    </>)
}