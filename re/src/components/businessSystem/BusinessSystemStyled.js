import styled from 'styled-components'
import mask from '../../assets/image/mask.svg'

const BusinessSystemStyled = styled.section`
li {
    display: flex;
    justify-content: space-between;
    padding-bottom: 15px;
    margin-bottom: 15px;
    border-bottom: solid 1px black;
}
li:after {
    content:'';
    background-image:url(${mask});
    display: block;
    height: 25px;
    width: 15px;
    background-repeat: no-repeat;

}
h6, p {
    width: 70%;
}
p {
    display: none;
}
.close {
    p {
        display: block;
    }
}
`

export default BusinessSystemStyled