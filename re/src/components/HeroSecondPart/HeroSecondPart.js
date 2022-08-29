
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMain } from '../../redux/mainPage/mainPageActions';
import Button from '../Button/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HeroSecondPartStyled } from './HeroSecondPartStyled';




const HeroSecondPart = ()=> {
    const data = useSelector((state) => state.mainPage)
    const array = data.acf?.second_block_list
    let propertyNames;
    if (array) {
        propertyNames=Object.values(array); 
    }
    //console.log(propertyNames); 
  
    return(
        <HeroSecondPartStyled className='row'>
        <h2>{data.acf?.second_block_title}</h2>
        <div className='col-6'>
        <p>{data.acf?.second_block_text}</p>
        </div>
        <div className='col-6'>
        {propertyNames &&
        <ul>
                {
                    propertyNames.map(item=>(
                        <li className='row' key={item.icon.ID}>
                        <img className='col-3' src={item.icon.url} alt={item.icon.title}/>
                        <h6 className='col-9'>{item.text}</h6>
                        </li>
                    ))
                }
            </ul>
        } 
        </div>
        </HeroSecondPartStyled>
    )
}

export default HeroSecondPart;