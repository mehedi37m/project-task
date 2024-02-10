import { useContext} from 'react';
import pic from '../../assets/pic.jpg'
import { SearchContext } from '../Provider/SearchProvider';

const Banner = () => { 
  const {search, setSearch} = useContext(SearchContext)
    
  // console.log(search)

    return (
        <div>
            
            <div className="hero min-h-screen bg-base-200 leading-snug">
  <div className="hero-content flex-col lg:flex-row justify-between">
   <div className='w-2/4'>
   <img src={pic} className="h-96 rounded-lg shadow-2xl leading-snug" />
   </div>
    <div>
      <h1 className="text-5xl font-bold">Official News!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <div>
        <input value={search}  onChange={(e) => setSearch(e.target.value)}  type="search" name="" id="" placeholder='Search Name' className='py-3 px-2 rounded-lg '/><button className="btn btn-primary" onClick={() => setSearch('')} >Search</button>
      </div>
    </div>
  </div>
</div>

<div>
 {/* <h className="text-5xl"> {filteredData[0].firstName}</h> */}
</div>

        </div>
    );
};

export default Banner;