import { useState } from "react";
import { useSelector } from "react-redux"
import { Link } from "react-router-dom";

const Posts = () => {
    const data = useSelector(state=>state.posts)
   /* let listItems;
    if (data?.list) {
        listItems = Object.values(data?.list)
    }*/
    console.log('posts', data.posts);
   

 return (
     <>
     {
         data.posts?.map(item=>(
             <li key={item.id}>
                 <h4> {item.acf.title}</h4>
                
            </li>
         ))
     }
         <h2></h2>
         
     </>
 )   
}

export default Posts