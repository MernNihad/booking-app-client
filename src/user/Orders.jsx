import axios from 'axios';
import React from 'react'
import { useNavigate } from 'react-router-dom';

function Orders() {


    const [data, setData] = React.useState([]);

  const navigate = useNavigate()


    React.useEffect(() => {
        const fetchHotel = async () => {
          try {
            const hotelData = await axios.get(
              `http://localhost:8080/api/v1/orders/${localStorage.getItem("user-id")}`
            );
    
            setData(hotelData.data);
          } catch (error) {
            console.log(error);
          }
        };
        fetchHotel();
      }, []);


  return (
    <div>
        {
           data && data?.map((item)=>{
                return(
                    <div className="" style={{display:"flex",gap:"20px"}}>
                        <img src={item.productInfo[0].ImageLink} alt="" style={{width:"200px",height:"200px"}}/>
                        <p>{item.productInfo[0].name}</p>
                        <p>{item.productInfo[0].price}</p>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Orders