import { ImageURL } from "../Utils/Images";



export default function GroceryCard({GroceryData,slide}){

   

    return(<>
    <div className="overflow-hidden flex-none w-40 duration-500 ease-in-out" style={{ transform: `translateX(-${slide*100}%)` }}>

        <a href={GroceryData?.action?.link}>
              <img className="w-40 h-50 object-cover" src={ImageURL?.imageBaseURL+GroceryData?.imageId}></img>
              </a>

              <p className="font-bold text-center">{GroceryData?.action?.text}</p>
              </div>
    </>)
}