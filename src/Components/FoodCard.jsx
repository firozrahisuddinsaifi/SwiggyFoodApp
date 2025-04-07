import { ImageURL } from "../Utils/Images";




export default function FoodCard({foodData}){


    return(<>

<a href={foodData?.action?.link}>
  <img
    className="w-full sm:w-36 sm:h-40 h-auto object-cover"
    src={ImageURL?.imageBaseURL + foodData?.imageId}
    alt="Food Image"
  />
</a>

    </>)
}