import axios from 'axios';
import React, { useState } from 'react'
import { useParams } from 'react-router-dom';

function OrdersByUser() {

    const [data,setData] = useState([])

    const {id}= useParams();

    React.useEffect(() => {
        const fetchHotel = async () => {
          try {
            let response = await axios.get(`http://localhost:8080/api/v1/orders/${id}`)
    
            setData(response.data);
          } catch (error) {
            console.log(error);
          }
        };
        fetchHotel();
      }, []);

  return (
    <div>
         { data && data?.map((item)=>{
            return(
                <div className="" style={{display:"flex",gap:"20px"}}>
                        <img src={item.productInfo[0].ImageLink} alt="" style={{width:"200px",height:"200px"}}/>
                        <p>{item.productInfo[0].name}</p>
                        <p>{item.productInfo[0].price}</p>
                    </div>
            )
         }) }
    </div>
  )
}

export default OrdersByUser