import { useSelector } from "react-redux"
import { ImageURL } from "../Utils/Images";



export default function Checkout(){

        const items = useSelector(state=>state.cartslice.items);

    return(<>

        <div className=" bg-[#e9ecee] h-full">

                  {
                    items.map((restData)=>{
                        console.log(restData);
                        return<>
                        {/* <div>{restData.name} {restData.defaultPrice/100}</div>  */}
                        <div className="w-[90%] container mx-auto flex justify-around gap-10 items-center">

                            <div className="bg-white w-[80%] h-auto mb-20 mt-20 flex justify-between p-5 gap-5 items-center">
                               
                               <div className="">
                                <div>
                                <h1 className="font-bold text-xl">Account</h1>
                                <p className="text-gray-500 font-semibold">To place your order now, log in to your existing account or sign up.</p>
                                </div>
                                <div className="mt-10 text-center flex gap-10">
                                   <div className="border-1 border-[#1ba672] w-50 text-[#1ba672] p-1"><p>Have an account?</p> <h3 className="font-bold">LOG IN</h3></div>
                                   <div className="border-1 border-[#1ba672] bg-[#1ba672] w-50 text-white p-1"><p>New to Swiggy?</p> <h3 className="font-bold">SIGN UP</h3></div>
                                </div>
                               </div>
                               <div>
                                <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_147,h_140/Image-login_btpq7r"></img>
                               </div>
                               </div>
                            <div className="bg-white w-[20%]  mb-20 mt-20">

                                <div className="w-10 h-10 p-2 flex gap-2">
                                    <img src={ImageURL.imageBaseURL+restData.imageId}></img>
                                    <h1>{restData.name}</h1>
                                </div>
                            </div>
                        </div>
                        
                        </>})
                 } 
        </div>
    </>)
}