import { ImageURL } from "../Utils/Images"



export default function RestInfo({restData}){



return(<>

    <div className="flex w-full justify-between mb-8 pb-2">
    {/** Food items price rating and food description */}
    <div className="w-[70%] ">
        <p className="text-xl text-gray-700 font-semibold mb-1">{restData?.name}</p>
        <p className="text-xl">{"₹"+ ("defaultPrice" in restData?restData.defaultPrice/100:restData.price/100)}</p>
        <span className="text-green-700">{restData?.ratings?.aggregatedRating?.rating}</span>
        <span>{"("+restData?.ratings?.aggregatedRating?.ratingCountV2+")"}</span>
        <p>{restData?.description}</p>
    </div>

    {/*** food items image and add button*/}
    <div className="w-[20%] relative rounded-2xl">
        <img className="w-full h-36 object-cover rounded-3xl" src={ImageURL.imageBaseURL+restData.imageId}></img>
        <button className="absolute bottom-4 left-18 border-white shadow-md px-6 py-2 bg-white text-green-700 rounded-xl">ADD </button>
    </div>

    </div>

    <hr className="border-gray-300 my-4 "></hr>
</>)
}