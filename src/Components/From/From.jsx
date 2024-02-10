
import Swal from "sweetalert2";
import Lottie from "lottie-react";
import add from '../../assets/add.json'




const From = () => {
 

  

const handleAddItems = () => {
    
    if (data.insertedId) {
        Swal.fire({
          title: "success",
          text: "user added successfully",
          icon: "success",
          confirmButtonText: "Cool",
        });
    }
}



  return (
    <div className="grid justify-items-center mb-10">
      
      <div
       className=" w-full max-w-sm shadow-2xl bg-base-100">
      <div>
        <Lottie style={{height:'200px'}} animationData={add} loop={true} />
        </div>
        <form onSubmit={handleAddItems} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">First Name</span>
            </label>
            <input name="name"
              type="text"
              placeholder="Food name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Last Name</span>
            </label>
            <input name="name"
              type="text"
              placeholder="Food name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Image</span>
            </label>
            <input name="image_url"
              type="text"
              placeholder="Image"
              className="input input-bordered"
              required
            />
          </div>
         
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input name="email"
              type="text"
              placeholder="Email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Address</span>
            </label>
            <input name="address"
              type="text"
              placeholder="Address"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Company Name</span>
            </label>
            <input name="company-name"
              type="text"
              placeholder="Company Name"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control mt-6">
            <button  className="btn btn-primary">Add Product</button>
          </div>
        </form>

       
      </div>
    </div>
  );
};

export default From;
