import styled from "styled-components";

export const HeroScreenStyled = styled.div `
padding-bottom: 100px;
h1 {
    font-size: 72px;
    font-family: 'Titillium-SemiBold';
    @media (min-width: 480px) {
        font-size: 38px;
    }
    @media (min-width: 768px) {
        font-size: 44px;
    }
    @media (min-width: 1280px) {
        font-size: 60px;
    }
    @media (min-width: 1440px) {
        font-size: 72px;
    }


}
p {
    font-size: 32px;
    @media (min-width: 480px) {
        font-size: 18px;
    }
    @media (min-width: 768px) {
        font-size: 20px;
    }
    @media (min-width: 1280px) {
        font-size: 24px;
    }
    @media (min-width: 1440px) {
        font-size: 32px;
    }
}
img {
    object-fit: cover;
    object-position: right;
}
`

