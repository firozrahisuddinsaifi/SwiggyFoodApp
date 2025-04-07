import { useEffect, useRef, useState } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router"


export default function RestHeader(){

    const count = useSelector(state=>state.cartslice.count)
    const [isMenuOpen,setIsMenuOpen]=useState(false);
   
   
    const menuRef = useRef(null);

    function toggleMenu(){
        setIsMenuOpen(!isMenuOpen);
        console.log("clicked")
    }

      
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false); 
      }
    };

    
    document.addEventListener("mousedown", handleClickOutside);

    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
    return(<>

         

            <div className="max-w-[100%] fixed z-10 top-0 left-0 container mx-auto py-4 px-8 bg-white text-3xl flex justify-between items-center shadow-md">


  <div>
    <img className="w-40 h-12" src="https://www.swiggy.com/corporate/wp-content/uploads/2024/10/swiggy-logo.webp" alt="Swiggy Logo" />
  </div>


  <div className="hidden lg:flex">
    <ul className="flex gap-8 text-xl font-semibold text-gray-700">
      <li><a href={"https://www.swiggy.com/corporate/"}>Swiggy Corporate</a></li>
      <li><a href={"https://www.swiggy.com/search"}>Search</a></li>
      <li><a href={"https://www.swiggy.com/offers-near-me"}>Offers</a></li>
      <li><a href={"https://www.swiggy.com/support"}>Help</a></li>
      <li><Link to={"/checkout"}>Cart {`(${count})`}</Link></li>
    </ul>
  </div>


  <div className="lg:hidden flex items-center gap-4">
    <span className="text-xl text-gray-700 cursor-pointer" onClick={toggleMenu}>{isMenuOpen?"×":"☰"}</span>
  </div>


  {
    isMenuOpen &&(
        <div ref={menuRef} className="lg:hidden absolute top-16 left-0 right-0 bg-white shadow-md py-4 px-8">
    <ul className="flex flex-col gap-4 text-xl font-semibold text-gray-700">
      <li><a href={"https://www.swiggy.com/corporate/"}>Swiggy Corporate</a></li>
      <li><a href={"https://www.swiggy.com/search"}>Search</a></li>
      <li><a href={"https://www.swiggy.com/offers-near-me"}>Offers</a></li>
      <li><a href={"https://www.swiggy.com/support"}>Help</a></li>
      <li><Link to={"/checkout"}>Cart {`(${count})`}</Link></li>
    </ul>
  </div>
    )
  }
</div>




    </>)
}