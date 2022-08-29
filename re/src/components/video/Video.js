import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';


const Video = ()=> {
    
    const data = useSelector((state) => state.mainPage.video)
   
    console.log(data?.video );
    return(
        <>
        <h2>{data?.title}</h2>
        <div 
        dangerouslySetInnerHTML={{__html: data?.video}} />
        </>
       
      
    )
}

export default Video;