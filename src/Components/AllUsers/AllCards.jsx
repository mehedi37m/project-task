import { Link } from "react-router-dom";

const AllCards = ({ user }) => {
  console.log(user);

  const { id, image, firstName, lastName, email, company, address } = user;
  return (
    <div>
      <Link to={`/users/${id}`}>
        <div className="card w-80 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={image} alt="avatar" className="rounded-xl w-24" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">
              {firstName} {lastName}
            </h2>
            <p>{email}</p>
            <p>{address?.address}</p>
            <p>{company.name}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default AllCards;
