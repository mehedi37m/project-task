import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleUser = () => {
  const { id } = useParams();
  console.log(id);

  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch(`https://dummyjson.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [id]);
  console.log(user);
  //  {firstName}  {email} {address.address} {company.name} {image}

  //  const { image,firstName,lastName,email,company,address} = user;
  return (
    <div>
      <div className="h-screen md:h-[80vh]">
        <div className=" p-20">
          <div className="card grid grid-cols-1 md:grid-cols-2 card-side  bg-base-100 shadow-xl mb-5">
            <div className="p-10 bg-slate-50 text-center">
              <h2 className=" font-bold mb-5 text-blue-900 text-3xl">
                {user.firstName} {user.lastName}
              </h2>

              <p className="text-2xl">
                <span className="text-blue-900 font-bold">Email</span> :{" "}
                {user.email}
              </p>

              <p className="text-blue-900 font-bold pt-4">
                Address : {user.address?.address}{" "}
                <span className="text-red-500"></span>
              </p>
              <p className="text-blue-900 font-bold ">
                Company Name : {user.company?.name}{" "}
                <span className="text-red-500"></span>{" "}
              </p>
            </div>

            <img
              className="h-96 w-full rounded-r-lg"
              src={user.image}
              alt="Movie"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleUser;
