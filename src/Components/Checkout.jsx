import { useSelector } from "react-redux";
import { ImageURL } from "../Utils/Images";
import { useEffect, useState } from "react";

export default function Checkout() {
  const items = useSelector((state) => state.cartslice.items);


  const [total, setTotal] = useState(0);

  useEffect(() => {
    const totalAmount = items.reduce((acc, curr) => {
      ("defaultPrice" in curr ?acc+= curr.defaultPrice / 100 : acc+=curr.price / 100)
      return acc;
    }, 0);
    setTotal(totalAmount); // Store the total in state
  }, [items]); // Only recalculate when `items` change

  return (
    <div className="bg-[#e9ecee] h-full">
      <div className="w-[90%] container mx-auto flex justify-around gap-10 items-center">
        {/* Left Section (Account Info) */}
        <div className="bg-white w-[80%] h-auto mb-20 mt-20 flex justify-between p-5 gap-5 items-center">
          <div>
            <h1 className="font-bold text-xl">Account</h1>
            <p className="text-gray-500 font-semibold">
              To place your order now, log in to your existing account or sign up.
            </p>
            <div className="mt-10 text-center flex gap-10">
              <div className="border-1 border-[#1ba672] w-50 text-[#1ba672] p-1">
                <p>Have an account?</p>
                <h3 className="font-bold">LOG IN</h3>
              </div>
              <div className="border-1 border-[#1ba672] bg-[#1ba672] w-50 text-white p-1">
                <p>New to Swiggy?</p>
                <h3 className="font-bold">SIGN UP</h3>
              </div>
            </div>
          </div>
          <div>
            <img
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_147,h_140/Image-login_btpq7r"
              alt="Login"
            />
          </div>
        </div>

        {/* Right Section (Order Summary) */}
        <div className="bg-white w-[20%] mb-20 mt-20">
          <div className="w-full h-auto p-2 gap-2">
            {/* List of Items */}
            {items.map((restData) => (
              <div key={restData.id} className="flex justify-between gap-5">
                <img
                  className="w-10 h-10"
                  src={ImageURL.imageBaseURL + restData.imageId}
                  alt={restData.name}
                />
                <h1>{restData.name}</h1>
                <h2>{"₹" + ("defaultPrice" in restData ? restData.defaultPrice / 100 : restData.price / 100).toFixed(2)}</h2>              </div>
            ))}

            <hr className="mt-10" />

            {/* Total Section */}
            <div className="flex justify-between font-bold">
              <h2>Total</h2>
              <h3>₹ {total.toFixed(2)}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
