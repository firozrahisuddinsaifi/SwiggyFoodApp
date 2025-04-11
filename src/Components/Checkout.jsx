import { useSelector } from "react-redux";
import { ImageURL } from "../Utils/Images";
import { useEffect, useState } from "react";

import Footer from "./Footer"
import RestHeader from "./RestHeader";

export default function Checkout() {
  const items = useSelector((state) => state.cartslice.items);

  const [total, setTotal] = useState(0);

  useEffect(() => {
    const totalAmount = items.reduce((acc, curr) => {
      ("defaultPrice" in curr? (acc += (curr.defaultPrice / 100) * curr.quantity)
        : (acc += (curr.price / 100) * curr.quantity));

      return acc;
    }, 0);
    setTotal(totalAmount); // Store the total in state
  }, [items]); // Only recalculate when `items` change

  return (
    <>   
        <div className="mb-20">
      <RestHeader/>
      </div>
     <div className="bg-[#e9ecee] min-h-screen">
   
    
      <div className="w-[90%] mx-auto flex flex-col lg:flex-row justify-around gap-10 items-center">
        {/* Left Section (Account Info) */}
        <div className="bg-white w-full lg:w-[50%] h-auto mb-20 mt-20 p-5 flex flex-col lg:flex-row justify-between gap-5 items-center">
          <div className="w-full lg:w-[60%]">
            <h1 className="font-bold text-xl">Account</h1>
            <p className="text-gray-500 font-semibold">
              To place your order now, log in to your existing account or sign up.
            </p>
            <div className="mt-10 text-center flex gap-10 flex-wrap justify-center">
              <div className="border-2 border-[#1ba672] w-[120px] text-[#1ba672] p-1 cursor-pointer">
                <p>Have an account?</p>
                <h3 className="font-bold text-center">LOG IN</h3>
              </div>
              <div className="border-2 border-[#1ba672] bg-[#1ba672] w-[120px] text-white p-1 cursor-pointer">
                <p>New to Swiggy?</p>
                <h3 className="font-bold text-center">SIGN UP</h3>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[40%] flex justify-center">
            <img
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_147,h_140/Image-login_btpq7r"
              alt="Login"
              className="w-full max-w-[150px]"
            />
          </div>
        </div>

        {/* Right Section Order Summary */}
        <div className="bg-white w-full lg:w-[60%] mb-20 mt-20 p-5">
          <div className="w-full h-auto">
            {/* List of Items */}
            {items.map((restData) => (
              <div key={restData.id} className="flex justify-between  mb-4">
                <img
                  className="w-10 h-10"
                  src={ImageURL.imageBaseURL + restData.imageId}
                  alt={restData.name}
                />
                <div className="flex justify-between gap-5">
                <h1 className="text-sm font-semibold ml-2 sm:text-base md:text-sm lg:text-lg">{restData.name}</h1>                  <h2 className="text-sm">
                    {("defaultPrice" in restData? restData.defaultPrice / 100
                      : restData.price / 100) +
                      " x " +
                      restData.quantity}
                  </h2>
                  <h2 className="text-sm font-semibold ml-2 sm:text-base md:text-sm lg:text-lg">
                    ₹{" "}
                    {(
                      ("defaultPrice" in restData
                        ? restData.defaultPrice / 100
                        : restData.price / 100) *
                      restData.quantity
                    ).toFixed(2)}
                  </h2>
                </div>
              </div>
            ))}

            <hr className="mt-10" />

            {/* Total Section */}
            <div className="flex justify-between font-bold text-lg mt-5 text-green-700 hover:cursor-pointer">
           
            <h2>Total</h2>
            <h2>To Pay</h2>
              <h3>₹ {total.toFixed(2)}</h3>
            </div>
          </div>
        </div>
      </div>

      <Footer/>
    </div>
    </>
  );
}
