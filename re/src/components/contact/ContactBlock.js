import { useState } from "react";
import { useSelector } from "react-redux"

const ContactBlock = () => {
    const data = useSelector(state=>state.mainPage.contact_form)
 
    console.log('data',data);
   

 return (
     <section className="row" >
         <img className="col-5" src={data?.image?.url}/>
         <div className="col-5">
         <h4>{data?.title}</h4>
         <p dangerouslySetInnerHTML={{__html: data?.text}} />
         <img  src={data?.icon_linkedIn?.url}/>
         <img  src={data?.icon_facebook?.url}/>
         <a href={data?.link?.url} >{data?.link?.title}</a>
         </div>
         
     </section>
 )   
}

export default ContactBlock