import React, { useEffect, useState } from 'react';
import BusinessSystem from '../components/businessSystem/BusinessSystem';
import ContactBlock from '../components/contact/ContactBlock';
import FormBlock from '../components/formBlock/FormBlock';
import HeroScreen from '../components/HeroScreen/HeroScreen';
import HeroSecondPart from '../components/HeroSecondPart/HeroSecondPart';
import NextLevel from '../components/nextLevel/NextLevel';
import Video from '../components/video/Video';

const HeroPage = ()=> {
    //const dispatch = useDispatch();
    
   // const [data, setData] = useState({})
   /* useEffect(()=>{
        dispatch(getMain())
      //const dataL=  dispatch(state);
        //axios.get('/wp-json/wp/v2/pages/24').then(res=>setData(res.data))
    },[])
    console.log(data );*/
    return(
        <div>
        <HeroScreen/>
        <HeroSecondPart/>
        <Video/>
        <BusinessSystem/>
        <NextLevel/>
        <FormBlock/>
        <ContactBlock/>
        </div>
    )
}

export default HeroPage