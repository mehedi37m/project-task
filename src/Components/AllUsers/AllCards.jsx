

const AllCards = ({user}) => {

    console.log(user)

    const {image,firstName,lastName,email,company,address} = user;
    return (
        <div>

            <div>
                <img src={image} alt="" />
                <h1>{firstName}</h1>
                <h1>{lastName}</h1>
                <h1>{email}</h1>
                <h1>{address.address}</h1>
                <h1>{company.name}</h1>
            </div>



            
        </div>
    );
};

export default AllCards;