import styled from "styled-components";



/*export const SectionWrapper = styled.section<{ size: 'normal' | 'expanded' }>`
    display: flex;
    flex-direction: column;
    text-align: left; 
    width: 961px;
    height: 930px;
    border-radius: 10px;
    background-color: #F4F4F4; 
    gap: 30px; 
    justify-content: space-between;
    padding: 2%;
    box-sizing: border-box;

    @media screen and (min-width: 1024px) and (min-height: 600px) {
        height: 483px;
    }
    @media screen and (min-width: 1024px) and (min-height: 768px) {
        height: 155%;
    }
    @media screen and (min-width: 1280px) {
        height: 118%; 
    }
    @media screen and (min-width: 1366px) {
        height: 112%;  
        width: 183%;
    }
    @media screen and (min-width: 1440px) {
        height: 135.4%; 
    }
    @media screen and (min-width: 1680px) {
        height: 150%; 
    }
    @media screen and (min-width: 1920px) {
       // height: 130%; 
       height: ${(props) => (props.size === 'expanded' ? '163%' : '130%')}
    }
    @media screen and (min-width: 1920px) and (min-height: 1200px) {
        height: 181%; 
    }
    /*@media screen and (min-width: 2880px) and (min-height: 1864px) {
        height: 285%; 
    }
`; */
export const SectionWrapper = styled.section`
    display: flex;
    flex-direction: column;
    text-align: left; 
    width: 961px;
    height: 930px;
    border-radius: 10px;
    background-color: #F4F4F4; 
    gap: 30px; 
    justify-content: space-between;
    padding: 2%;
    box-sizing: border-box;

    @media screen and (min-width: 1024px) and (min-height: 600px) {
        height: 483px;
    }
    @media screen and (min-width: 1024px) and (min-height: 768px) {
        height: 155%;
    }
    @media screen and (min-width: 1280px) {
        height: 118%; 
    }
    @media screen and (min-width: 1366px) {
        height: 112%;  
        width: 183%;
    }
    @media screen and (min-width: 1440px) {
        height: 135.4%; 
    }
    @media screen and (min-width: 1680px) {
        height: 128%; 
    }
    @media screen and (min-width: 1920px) {
        //height: 163%;
        height: 130%;
        
    }
`;
export const ContentWrapper = styled.section`
    display: flex;
    gap: 30px;
    width: 100%;
    height: 90%;
    background-color: #F4F4F4;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
`;

export const MaintenianceTitle = styled.div`
    font-size: 30px;
    font-weight: 500;
    margin: 0;
    @media screen and (min-width: 1024px) and (min-height: 600px) {
        font-size: 15px; 
    }
    @media screen and (min-width: 1024px) and (min-height: 768px) {
        font-size: 15px;
        margin: 0px 30px 0px 0px;
    }
    @media screen and (min-width: 1280px) {
        font-size: 20px;
    }
    @media screen and (min-width: 1680px) {
        font-size: 25px;
    }
    @media screen and (min-width: 1920px) {
        font-size: 25px;
        margin: -15px 0px;
    }
`;

export const ContentLeft = styled.div`
    width: 50%;
    height: 100%; 
    background-color: #EAEAEA;
    border-radius: 5px;

`;
export const ContentLeftTitle = styled.div``;

export const ContentRight = styled.div`
    width: 50%; 
    height: 100%; 
    background-color: #EAEAEA;
    border-radius: 5px;
`;

export const ContentRightTitle = styled.div`
    position: absolute;
    margin: 10px; 
    font-size: 24px;
    @media screen and (min-width: 1024px) and (min-height: 600px) {
        font-size: 10px; 
    }
    @media screen and (min-width: 1024px) and (min-height: 768px) {
        font-size: 15px;
    }
    @media screen and (min-width: 1280px) {
        font-size: 15px;
    }
    @media screen and (min-width: 1680px) {
        font-size: 20px;
    }
    @media screen and (min-width: 1920px) {
        font-size: 20px;
    }
`; 