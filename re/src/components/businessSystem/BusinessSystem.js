import { useState } from "react";
import { useSelector } from "react-redux"
import BusinessSystemStyled from "./BusinessSystemStyled";

const BusinessSystem = () => {
    const [open, setOpen] = useState(false)
    const data = useSelector(state=>state.mainPage.bus_system)
    let listItems;
    if (data?.list) {
        listItems = Object.values(data?.list)
    }
    //console.log('bus_system',listItems);
    const openHandler = (e) => {
        let getP = e.target.closest('li').classList.toggle('close')
       // console.log(getP)
        setOpen(state=>!state)
    }
    //console.log(open)

 return (
     <BusinessSystemStyled className="row" >
         <div className="col-7">
         <h2>{data?.title}</h2>
         <ul >
            {
                listItems?.map(item=>(
                    <li onClick={openHandler}  key={item.title}>
                        <h6 >{item.title}</h6>
                        <p >{item.description}</p>
                    </li>
                ))
            }
         </ul>
         </div>
            <img className="col-5" src={data?.image?.url} alt={data?.image?.title}/>

     </BusinessSystemStyled>
 )   
}

export default BusinessSystem