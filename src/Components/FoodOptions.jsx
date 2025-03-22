import { imageGridCards } from "../Utils/FoodData";
import FoodCard from "./FoodCard";





export default function FoodOptions(){


    return(<>

        <div className="w-[85%] container mx-auto flex flex-wrap mt-20 gap-3">

            {
                imageGridCards?.map((foodData)=><FoodCard key={foodData.id} foodData={foodData}/>)
                
            }
        </div>
    </>)
}