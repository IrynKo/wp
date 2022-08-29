import styled from  'styled-components';

const ButtonStyled = styled.button `
max-width: 230px;
max-height: 60px;
text-transform: uppercase;
border-radius: 10px;
@media (min-width: 480px) {
    font-size: 16px;
    padding: 6px 24px;
}
@media (min-width: 768px) {
    font-size: 16px;
    padding: 6px 26px;
}
@media (min-width: 1280px) {
    font-size: 18px;
    padding: 8px 32px;
}
@media (min-width: 1440px) {
    font-size: 18px;
    padding: 14px 40px;
}
a {
    text-decoration: none;
    color: white;
    @media (min-width: 480px) {
        font-size: 12px;
    }
    @media (min-width: 768px) {
        font-size: 12px;
    }
    @media (min-width: 1280px) {
        font-size: 14px;
    }
    @media (min-width: 1440px) {
        font-size: 16px;
    }

}
&.btn-main {
    background-color: #266554;
    border: none
}
&.btn-secondary {
    background: transparent;
    border: solid 1px #266554;
    a {
        color: #266554;
    }
}
`  
export default ButtonStyled;