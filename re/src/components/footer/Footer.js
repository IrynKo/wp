import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getFooter } from "../../redux/footer/footerActions";

const Footer = () => {
    const data = useSelector(state => state.footer)
    const dispatch = useDispatch();
    useEffect( ()=>{
         dispatch(getFooter());
    },[])
    console.log('data',data);
   

 return (
     <section className="row" >
          <div className="col-5">
          <img  src={data.logo?.url} alt={data.logo?.title}/>
         <p>{data?.info_about_connav}</p>
         </div>
         <div className="col-5">
         <p dangerouslySetInnerHTML={{__html: data?.adress}} />
         </div>
         
     </section>
 )   
}

export default Footer