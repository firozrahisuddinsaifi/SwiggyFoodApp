import { useSelector } from "react-redux"
import { Link } from "react-router"


export default function RestHeader(){

    const count = useSelector(state=>state.cartslice.count)
    return(<>


            <div className="max-w-[100%] fixed z-10 top-0 left-0 container mx-auto py-4 px-8 bg-white text-3xl flex justify-between items-center shadow-md">

                <div>
                    <img className="w-40 h-12" src="https://www.swiggy.com/corporate/wp-content/uploads/2024/10/swiggy-logo.webp"></img>
                </div>

                <div>
                <ul className="flex gap-20 text-xl font-semibold text-gray-700">
                <li><a href={"https://www.swiggy.com/corporate/"}>Swiggy Corporate </a></li>
               <li><a href={"https://www.swiggy.com/search"}>Search </a></li>
               <li><a href={"https://www.swiggy.com/offers-near-me"}>Offers</a></li>
               <li><a href={"https://www.swiggy.com/support"}>Helps</a></li>
               <li><Link to={"/checkout"}>Cart {`(${count})`}</Link></li>
               </ul>
                </div>
           
           
                {/* <div>
                    <p className="text-[#ff2200] font-semibold">swiggy</p>
                </div>
                <div>
                <Link to={"/checkout"}>
                <p>cart {`(${count})`}</p>
                </Link>
                </div> */}
            </div>
    </>)
}