


export default function Header(){

    return(<>

<header className="bg-[#ff5200]">     
  <div className="flex justify-between container mx-auto py-8">
    <img className="w-40 h-12 text-lg md:text-2xl" src="https://res.cloudinary.com/dutdah0l9/image/upload/v1720058694/Swiggy_logo_bml6he.png" alt="Swiggy Logo" />
    
    <div className="text-white text-base font-bold gap-5 items-center flex flex-wrap">
      <a target="_blank" href="https://www.swiggy.com/corporate/" className="mr-4">Swiggy Corporate</a>
      <a href="https://partner.swiggy.com/login#/swiggy" className="mr-4">Partner with us</a>
      <a className="border rounded-3xl border-white py-3 px-4 mr-4" href="#">Get the App</a>
      <a className="border rounded-3xl border-black bg-black py-3 px-6" href="#">Sign in</a>
    </div>
  </div>

  <div className="pt-16 pb-8 relative">
    <img className="absolute left-0 top-0 h-60 md:h-110 w-60 object-cover hidden md:block" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png" alt="Veggies" />
    <img className="absolute right-0 top-0 h-60 md:h-110 w-60 object-cover hidden md:block w-full" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png" alt="Sushi" />
    
    <div className="max-w-[90%] md:max-w-[60%] text-3xl md:text-5xl text-white text-center font-bold container mx-auto">
      Order food & groceries. Discover best restaurants. Swiggy it!
    </div>

    <div className="max-w-[90%] md:max-w-[65%] container mx-auto flex flex-col md:flex-row gap-5 mt-5">
      <input className="bg-white w-full md:w-[40%] text-base px-6 py-4 outline-none rounded-2xl" type="text" placeholder="Enter your delivery location" />
      <input className="bg-white w-full md:w-[55%] text-base px-6 py-4 outline-none rounded-2xl" type="text" placeholder="Search for restaurant, item or more" />
    </div>
  </div>

  <div className="max-w-[90%] md:max-w-[80%] container mx-auto flex  justify-between gap-5">
  <Link to="/restaurant"> 
      <img className="w-full" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/8/1/fa01e85b-3057-482d-9523-5289722b1df2_Food4BU.png" alt="Food Banner" />
</Link>

    <a href="https://www.swiggy.com/instamart?entryId=1234&entryName=mainTileEntry4&v=1" className="w-full md:w-[48%]">
      <img className="w-full" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/8/16/ca34e375-f1bd-4a2e-a3e7-0a20833be83b_IM4BU1.png" alt="Instamart Banner" />
    </a>

    <a href="https://www.swiggy.com/dineout" className="w-full md:w-[48%]">
      <img className="w-full" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/8/1/76c30e5a-8adb-4795-bf5b-fa64e9e9e1d3_DO4BU.png" alt="Dineout Banner" />
    </a>

    <a href="https://www.swiggy.com/genie" className="w-full md:w-[48%]">
      <img className="w-full" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/31/14033c0b-8907-420b-b72a-d26cfa68dc7b_Genie4BU.png" alt="Genie Banner" />
    </a>
  </div>
</header>


    </>)
}