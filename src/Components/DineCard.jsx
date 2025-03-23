import { ImageURL } from "../Utils/Images";


export default function DineCard({restData}){

   
    return(<>

        <div className="max-w-sm flex-none border rounded-2xl border-gray-200 py-1 px-1">
            <a href={restData?.cta?.link}>
            <div target="_blank" className="relative">
                <img className="w-80 h-50 object-cover rounded-2xl " src={ImageURL?.imageBaseURL+restData?.info?.mediaFiles[0]?.url}></img>
                <p className="absolute z-10 left-2 bottom-2 text-lg font-bold text-white">{restData?.info?.name}</p>
                <p className="absolute z-10 right-2 bottom-2 text-lg font-bold text-white">{restData?.info?.rating?.value}</p>

                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black to-transparent"></div>
                </div>

                <div className="flex justify-between ml-2 mr-2 mt-2">
                    <p className="text-gray-500 text-[13px] font-bold">{restData?.info?.cuisines.join(" ")}</p>
                    <p className="text-gray-500 text-[13px] font-bold">{restData?.info?.costForTwo}</p>
                </div>

                <div className="flex justify-between ml-2 mr-2 mt-1 gap-4">
                    <p className="text-gray-500 text-[13px] font-bold">{restData?.info?.locationInfo?.formattedAddress}</p>
                    <p className="text-gray-500 text-[13px] font-bold">{restData?.info?.locationInfo?.distanceString}</p>
                </div>

                <div className=" w-30 flex items-center gap-1 text-gray-500 text-[13px] bg-[#f0f0f5] rounded-2xl ml-5 mr-2 mt-3 text-center">
                    <img className="w-3 h-3 ml-2" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/dineout/rx-card/highlights/book.png"></img>
                    <p className="text-[rgba(2, 6, 12, 0.6)] text-[13px]">Table booking</p>
                </div>


                <div className="max-w-[95%] container mx-auto mt-3 no-scrollbar bg-[#1ba672] flex justify-around text-white py-2 px-2 rounded-lg  text-[14px] font-bold">
                    <div className="flex items-center gap-1">
                        <img className="w-5 h-5 object-cover" src={ImageURL?.imageBaseURL+restData?.info?.offerInfoV3?.offerLogo?.logo}></img>
                        <div>{restData?.info?.offerInfoV3?.vendorOffer?.title + " "+ restData?.info?.offerInfoV3?.vendorOffer?.subtitle}</div>
                    </div>
                    <div>{restData?.info?.offerInfoV3?.vendorOffer?.subtext}</div>
                </div>
                <div className="max-w-[95%] container mx-auto mt-3 mb-3 no-scrollbar bg-[#c8f9e5]  py-2 px-2 rounded-lg  ">
                 
                    <div className="text-[#1ba672] text-[14px] font-bold">{restData?.info?.customerOffer.infos[0].description}</div>
                </div>
                </a>


        </div>
    </>)
}