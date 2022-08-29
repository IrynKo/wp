import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { getMain } from '../../redux/mainPage/mainPageActions';
import Button from '../Button/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HeroScreenStyled } from './HeroScreenStyled';



const HeroScreen = ()=> {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.mainPage)
   // const [data, setData] = useState({})
    useEffect(()=>{
        dispatch(getMain())
      //const dataL=  dispatch(state);
        //axios.get('/wp-json/wp/v2/pages/24').then(res=>setData(res.data))
    },[])
    //console.log('data.data',data.data );
    return(
        <HeroScreenStyled className='row'>
        <div className='col-6'>
        <h1>{data.acf?.hero_title}</h1>
        <p>{data.acf?.hero_text}</p>
        <div>
        <Button buttonStyle='btn-main' title="Get demo" url={data.acf?.demo_link}/>
        <Button buttonStyle='btn-secondary' title="Contuct us" url={data.acf?.contact_link}/>
        </div>
        </div>
        <img className='col-6' src={data.acf?.hero_image?.url} />  
        <div 
        dangerouslySetInnerHTML={{__html: data?.data}} />
        </HeroScreenStyled>
    )
}

export default HeroScreen;