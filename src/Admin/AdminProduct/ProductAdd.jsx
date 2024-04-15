import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const ProductAdd = () => {
    const [data,setData] = useState('')

    
    React.useEffect(() => {
      const fetchHotel = async () => {
        try {
          let response = await axios.get('http://localhost:8080/api/v1/user/')
  
          setData(response.data);
        } catch (error) {
          console.log(error);
        }
      };
      fetchHotel();
    }, []);

   
  return (
    <div>
      <section>
    <div className='product'>
     
        {
          data && data?.map((item)=>{
            return(
              <div className="" style={{display:"flex",gap:"20px"}}>
              <img src={item.name} alt="" style={{width:"200px",height:"200px"}}/>
              <p>{item.email}</p>
              <p>{item.password}</p>
              <Link to={`/admin/order/${item._id}`}>order of user</Link>
          </div>
            )
          })
        }
      
    </div>
    </section>
    </div>
  )
}

export default ProductAdd
