export default function Footer(){

    
    return(


        <>
          

          <div className="w-full h-auto bg-gray-100">
  <div className="w-full container mx-auto py-10 px-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
    {/* First Column */}
    <div className="w-full flex flex-col items-start">
      <div className="w-40 h-12 flex-shrink-0">
        <img className="w-40 h-12" src="https://media-assets.swiggy.com/portal/testing/seo-home/Group.svg" alt="Swiggy Logo" />
      </div>
      <div className="text-[16px] w-60 h-12 flex-shrink-0">© 2025 Swiggy Limited</div>
    </div>

    {/* Second Column */}
    <div className="text-[16px] w-60 h-auto flex-shrink-0">
      <ul className="flex flex-col gap-2 text-gray-600 font-medium">
        <li className="font-bold text-xl text-black">Company</li>
        <li><a href="https://www.swiggy.com/about" target="_blank">About Us</a></li>
        <li><a href="https://www.swiggy.com/corporate/" target="_blank">Swiggy Corporate</a></li>
        <li><a href="https://www.swiggy.com/careers" target="_blank">Careers</a></li>
        <li><a href="https://www.swiggy.com/team" target="_blank">Team</a></li>
        <li><a href="https://www.swiggy.com/swiggy-super" target="_blank">Swiggy One</a></li>
        <li><a href="https://www.swiggy.com/instamart" target="_blank">Swiggy Instamart</a></li>
        <li><a href="https://www.dineout.co.in/" target="_blank">Swiggy Dineout</a></li>
        <li><a href="https://www.swiggy.com/swiggy-genie" target="_blank">Swiggy Genie</a></li>
        <li><a href="https://mini.store/" target="_blank">Minis</a></li>
      </ul>
    </div>

    {/* Third Column */}
    <div className="text-[16px] w-60 h-auto flex-shrink-0">
      <ul className="flex flex-col gap-2 text-gray-600 font-medium">
        <li className="font-bold text-xl text-black">Contact us</li>
        <li><a href="https://www.swiggy.com/support">Help & Support</a></li>
        <li><a href="https://partner-with-us.swiggy.com/onboard#/swiggy" target="_blank">Partner with us</a></li>
        <li><a href="https://ride.swiggy.com" target="_blank">Ride with us</a></li>
      </ul>
    </div>

    {/* Fourth Column */}
    <div className="text-[16px] w-60 h-auto flex-shrink-0">
      <ul className="flex flex-col gap-2 text-gray-600 font-medium">
        <li className="font-bold text-xl text-black">Available in:</li>
        <li><a href="/city/bangalore">Bangalore</a></li>
        <li><a href="/city/gurgaon">Gurgaon</a></li>
        <li><a href="/city/hyderabad">Hyderabad</a></li>
        <li><a href="/city/delhi">Delhi</a></li>
        <li><a href="/city/mumbai">Mumbai</a></li>
        <li><a href="/city/pune">Pune</a></li>
        <li className="border rounded-lg w-24 p-1"><button>685 cities</button></li>
      </ul>
    </div>

    {/* Fifth Column (Social Media Links) */}
    <div className="text-[16px] w-60 h-auto flex-shrink-0">
      {/* Add social media links or any content you need here */}
    </div>
  </div>

  <div className="w-[90%] container mx-auto border-t border-gray-400 mt-8"></div>

  <div className="w-full container mx-auto flex flex-col lg:flex-row mt-10 items-center gap-10 text-center">
    <div>
      <div className="font-bold text-2xl text-gray-600">For better experience, download the Swiggy app now</div>
    </div>

    <div>
      <div className="flex gap-4 justify-center">
        <a href="https://apps.apple.com/in/app/swiggy-food-instamart-dineout/id989540920?referrer=utm_source%3Dswiggy%26utm_medium%3Dhomepage">
          <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-AppStore_lg30tv" alt="App Store"></img>
        </a>

        <a href="https://play.google.com/store/apps/details?id=in.swiggy.android&referrer=utm_source%3Dswiggy%26utm_medium%3Dheader&pli=1">
          <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-GooglePlay_1_zixjxl" alt="Google Play"></img>
        </a>
      </div>
    </div>
  </div>
</div>

         

  

        </>
    )
}