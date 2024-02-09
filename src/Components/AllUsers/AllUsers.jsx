import { useEffect, useState } from "react";
import AllCards from "./AllCards";


const AllUsers = () => {
    const [allUsers, setAllUsers] = useState([]);
 
     useEffect(() =>{
        fetch('https://dummyjson.com/users')
        .then(res => res.json())
        .then(data => setAllUsers(data.users))
     },[])




     console.log(allUsers.users)
    return (
        <div>
          <div>
            search
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center">
            {
                allUsers.map(user=><AllCards key={user.id} user={user}></AllCards>)
            }
          </div>
        </div>
    );
};

export default AllUsers;