import { useState } from "react";
import { useSelector } from "react-redux"

const FormBlock = () => {
    const data = useSelector(state=>state.mainPage.signup_form)
 
    console.log('data',data);
   

 return (
     <section className="row" >
         <h2>{data?.title}</h2>
         <p>{data?.text}</p>
         
     </section>
 )   
}

export default FormBlock