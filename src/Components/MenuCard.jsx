import { useState } from "react";
import RestInfo from "./RestInfo";




export default function MenuCard({menuItems,selected}){

const [isOpen,setIsOpen]=useState(true);


{/** instead of itemCards categories is present as key in API */}
    if('categories' in menuItems){
        return(<>
            <div className="w-full mt-4">
                <p className="text-2xl font-bold mb-4">{menuItems?.title}</p>
                <div>
                    {
                        menuItems?.categories?.map((items)=><MenuCard key={items?.title} menuItems={items}  />)
                    }
                </div>
            </div>
        </>)
    }

{/** Onclick is false then category must shrink */}
    if(!isOpen){
        return(<>
            <div  className="w-full">
            <div className="flex justify-between w-full">
            <p className="text-2xl font-bold mb-4">{menuItems?.title}</p>

            <button className="text-5xl mr-15" onClick={()=>setIsOpen(!isOpen)}>{isOpen?"⌃":"⌄"}</button>
            </div>
            </div>

        <div className="h-4 bg-gray-100"></div>
        </>)
    }

             {/** Only veg options must be visible*/}

    if(selected==="veg"){

        return(<>
        <div className="w-full">
        <div className="flex justify-between">
            <p className="text-2xl font-bold mb-4">{menuItems?.title}</p>

            <button className="text-5xl mr-15" onClick={()=>setIsOpen(!isOpen)}>{isOpen?"⌃":"⌄"}</button>
            </div>

            <div>        
                {
                    menuItems?.itemCards?.filter((food)=> "isVeg" in food.card.info)?.map((items)=><RestInfo key={items?.card?.info?.id} restData={items?.card?.info}  />)
                }
            </div>

        </div>


{/**  bottom border of category items*/}
        <div className="h-4 bg-gray-100"></div>
    

        </>)
    } 


            {/** Only nonveg options must be visible*/}
    if(selected==="nonveg"){

        return (<>
        
        <div className="w-full">
        <div className="flex justify-between">
            <p className="text-2xl font-bold mb-4">{menuItems?.title}</p>

            <button className="text-5xl mr-15" onClick={()=>setIsOpen(!isOpen)}>{isOpen?"⌃":"⌄"}</button>
            </div>

            <div>        
                {
                    menuItems?.itemCards?.filter((food)=>!("isVeg" in food.card.info))?.map((items)=><RestInfo key={items?.card?.info?.id} restData={items?.card?.info}  />)
                }
            </div>

        </div>


{/**  bottom border of category items*/}
        <div className="h-4 bg-gray-100"></div>
    

        </>)
        
    }

    return(<>
    
{/** Initial state all options must be visible*/}
        <div className="w-full">
        <div className="flex justify-between">
            <p className="text-2xl font-bold mb-4">{menuItems?.title}</p>

            <button className="text-5xl mr-15" onClick={()=>setIsOpen(!isOpen)}>{isOpen?"⌃":"⌄"}</button>
            </div>

            <div>        
                {
                    menuItems?.itemCards?.map((items)=><RestInfo key={items?.card?.info?.id} restData={items?.card?.info}  />)
                }
            </div>

        </div>


{/**  bottom border of category items*/}
        <div className="h-4 bg-gray-100"></div>
    

    
    </>)
}