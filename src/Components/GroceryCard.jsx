import { ImageURL } from "../Utils/Images";



export default function GroceryCard({GroceryData}){

    return(<>
    <div className="flex-none w-40">

        <a href={GroceryData?.action?.link}>
              <img className="w-40 h-50 object-cover" src={ImageURL?.imageBaseURL+GroceryData?.imageId}></img>
              </a>

              <p className="font-bold text-center ">{GroceryData?.action?.text}</p>
              </div>
    </>)
}