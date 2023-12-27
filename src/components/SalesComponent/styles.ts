import styled from "styled-components";

export const SectionWrapper = styled.section`
    display: flex;
    width: 23%; 
    height: 930px;
    background-color: #F4F4F4;
    border-radius: 10px; 
    padding: 2%;
    box-sizing: border-box;
    @media screen and (min-width: 1024px) and (min-height: 600px) {
        width: 45%;
        height: 486px;
    }
    @media screen and (min-width: 1024px) and (min-height: 768px) {
        height: 155%;
        width: 45%
    }
    @media screen and (min-width: 1280px) {
        width: 44%;
        height: 118%; 
    }
    @media screen and (min-width: 1366px) {
        width: 62%; 
        height: 112%;  
    }
    @media screen and (min-width: 1440px) {
        width: 63%;
        height: 135.4%; 
    }
    @media screen and (min-width: 1680px) {
        width: 65%;
        height: 158%; 
    }
    @media screen and (min-width: 1920px) {
        width: 68%;
        height: 162%; 
    }
    @media screen and (min-width: 1920px) and (min-height: 1200px) {
        height: 181%; 
    }
    /*@media screen and (min-width: 2880px) and (min-height: 1864px) {
        height: 285%; 
    }*/
`;
export const SalesTitle = styled.div`
    font-size: 30px;
    font-weight: 500;
    margin: 0;

    @media screen and (min-width: 1024px) and (min-height: 600px) {
        font-size: 24px; 
    }
    @media screen and (min-width: 1024px) and (min-height: 600px) {
    font-size: 20px; 
    }
    @media screen and (min-width: 1024px) and (min-height: 768px) {
        font-size: 24px;
        margin: 0px 30px 0px 0px;
    }
    @media screen and (min-width: 1280px) {
        font-size: 25px;
    }
    @media screen and (min-width: 1680px) {
        font-size: 30px;
    }
    @media screen and (min-width: 1680px) {
        font-size: 35px;
    }
`;

export const SalesWrapper = styled.div`
flex: 1;
`; 