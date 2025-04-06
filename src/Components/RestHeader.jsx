import { useSelector } from "react-redux"
import { Link } from "react-router"


export default function RestHeader(){

    const count = useSelector(state=>state.cartslice.count)
    return(<>


            <div className="max-w-[100%] fixed z-10 top-0 left-0 container mx-auto py-4 px-8 bg-white text-3xl flex justify-between items-center shadow-md">
                <div>
                    <p className="text-[#ff2200] font-semibold">swiggy</p>
                </div>
                <div>
                <Link to={"/checkout"}>
                <p>cart {`(${count})`}</p>
                </Link>
                </div>
            </div>
    </>)
}