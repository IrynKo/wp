import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMain } from '../../redux/mainPage/mainPageActions';
import ButtonStyled from './ButtonStyled';



const STYLES = ['btn-main', 'btn-secondary' ];
const Button = ({title, url, buttonStyle})=> {
    const data = useSelector((state) => state.mainPage)
   const checkButtonStyle= STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
   
    return(
        <ButtonStyled className={checkButtonStyle}>
       <a href={url}>{title}</a>
        </ButtonStyled>
    )
}

export default Button;