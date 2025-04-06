import { ImageURL } from "../Utils/Images"
import { addItems,incrementItems,decrementItems } from "../Stored/CartSlice";
import { useDispatch, useSelector } from "react-redux";



export default function RestInfo({restData}){

    
    // const [count,setCount]=useState(0);

    const dispatch = useDispatch();
    const items = useSelector(state=>state.cartslice.items)
    const element = items.find(item=>item.id===restData.id)

    const count = element?element.quantity:0;
    console.log("count value ",count)

    function handleAddItems(){
        // setCount(1);
        dispatch(addItems(restData));
    }

    function handleIncrementItems(){
        // setCount(count+1);
        dispatch(incrementItems(restData))
    }

    function handleDecrementItems(){
        // setCount(count-1);
        dispatch(decrementItems(restData));
    }

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
    <div className="w-[20%] relative rounded-2xl h-45 ">
        <img className="w-full h-36 object-cover rounded-3xl" src={ImageURL.imageBaseURL+restData.imageId}></img>
       
       {
        count===0?(<button className="absolute bottom-4 left-18 border-white shadow-md px-6 py-2 bg-white text-green-700 rounded-xl hover:cursor-pointer" onClick={()=>handleAddItems()}>ADD </button>
        ):(<div className="flex absolute bottom-4 left-18 gap-2  px-6 py-2 bg-white text-green-700 rounded-xl border-white shadow-md ">
            <button className="hover:cursor-pointer" onClick={()=>handleDecrementItems()}>-</button>
            <span>{count}</span>
            <button className="hover:cursor-pointer" onClick={()=>handleIncrementItems()}>+</button>
        </div>)
       }

    </div>

    </div>

    <hr className="border-gray-300 my-4 "></hr>
</>)
}