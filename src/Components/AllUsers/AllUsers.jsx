import { useContext, useEffect, useState } from "react";
import AllCards from "./AllCards";
import { SearchContext } from "../Provider/SearchProvider";




const AllUsers = () => {
    const [allUsers, setAllUsers] = useState([]);
    const [sortBy, setSortBy] = useState("name");
    const [showAll, setShowAll] = useState(false);
    const {search, setSearch} = useContext(SearchContext)
    

    const handleSortChange = (event) => {
      setSortBy(event.target.value);
    };
 
     useEffect(() =>{
        fetch('https://dummyjson.com/users')
        .then(res => res.json())
        .then(data => setAllUsers(data.users))
     },[])


     const filteredData = allUsers.filter(item =>
      item.firstName.toLowerCase().includes(search.toLowerCase())
  );


     const sortUsers = (a, b) => {
      switch (sortBy) {
        case "name":
          return a.firstName.localeCompare(b.firstName);
        case "email":
          return a.email.localeCompare(b.email);
        case "companyName":
          return a.company.name.localeCompare(b.company.name);
        default:
          return 0;
      }
    };
    const sortedUsers = [...filteredData].sort(sortUsers);

    const handleShowAll = () => {
      setShowAll(true);
    };

    const seeUsers = showAll ? sortedUsers : sortedUsers.slice(0, 8);
     
    return (
        <div className="my-10">
          <div>
          <div className="mb-4 text-center">
        <label htmlFor="sortBy" className="font-bold text-xl mr-3 ">Sort By :</label>
        <select className="px-5 py-3 font-bold" id="sortBy" onChange={handleSortChange} value={sortBy}>
          <option value="name">Name</option>
          <option value="email">Email</option>
          <option value="companyName">Company Name</option>
        </select>
      </div>
          </div>
        
          <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-items-center gap-5">
            
          {sortedUsers.length === 0 ? (
          <div className="flex items-center justify-center">
            <p className="text-3xl text-red-800 font-semibold text-center ">
              No matching users found. Please enter a correct name.
            </p>
          </div>
        ) : (  
                seeUsers.map(user=><AllCards key={user.id} user={user}></AllCards>)
                )}
          </div>

          <div className="text-center">
          {!showAll && (
          <button
            className="py-3 px-5 bg-blue-700 text-center text-white font-semibold rounded-xl"
            onClick={handleShowAll}
          >
            Show All
          </button>
        )}
          </div>
        </div>
    );
};

export default AllUsers;