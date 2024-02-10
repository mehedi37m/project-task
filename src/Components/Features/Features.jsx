import { useEffect, useState } from "react";
import { CiDeliveryTruck } from "react-icons/ci";
import { FaBook, FaUsers } from "react-icons/fa";



const Features = () => {

    const [allUsers, setAllUsers] = useState([]);


useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => setAllUsers(data.users));
  }, []);

 

    return (
        <div className="my-10">
           

            <div className=" space-y-3 md:flex flex-1 items-center justify-around  justify-items-center">
            <div className=" bg-slate-500 h-64 text-center space-y-3 py-5 px-20 rounded-md text-white">
                    
                    <div className="flex justify-center text-8xl">
                    <CiDeliveryTruck></CiDeliveryTruck>
                    </div>
                    <h1 className=" text-4xl font-bold">30</h1>
                    <h1>Delivery</h1>
                </div>
                <div className=" bg-slate-500 h-64 text-center space-y-3 py-5 px-20 rounded-md text-white">
                    
                    <div className="flex justify-center text-8xl">
                    <FaBook></FaBook>
                    </div>
                    <h1 className=" text-4xl font-bold">50</h1>
                    <h1>Number of Parcel </h1>
                </div>
                
                <div className=" bg-slate-500 h-64 text-center space-y-3 py-5 px-20 rounded-md text-white">
                    <div className="flex justify-center text-8xl">
                    <FaUsers></FaUsers>
                    </div>
                    <h1 className=" text-4xl font-bold">{allUsers.length}</h1>
                    <h1>Number of Users</h1>
                </div>
            </div>
            
        </div>
    );
};

export default Features;