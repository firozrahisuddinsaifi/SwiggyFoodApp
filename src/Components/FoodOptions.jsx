import { imageGridCards } from "../Utils/FoodData";
import FoodCard from "./FoodCard";





export default function FoodOptions(){


    return(<>

<div className="w-[80%] container mx-auto flex flex-wrap mt-20 gap-3 px-4 sm:px-6 md:px-8 lg:px-10">

{
    imageGridCards?.map((foodData) => (
        <FoodCard key={foodData.id} foodData={foodData} />
    ))

}
</div>

    </>)
}