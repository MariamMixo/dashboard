import styled from "styled-components";


export interface SectionWrapperProps {
    toggle?: boolean;
  }

export const SectionWrapper = styled.section<SectionWrapperProps>`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100vh;
    height: 100vh;
    text-align: left;
    margin-left: 25%;
    gap: 40px;
    flex: 1;  
    transition: all 0.5s ease-in-out;
    @media screen and (min-width: 1024px) and (min-height: 600px) {
        margin-left: ${(props) => props.toggle === true ? '11%' : '28%' };
        width: ${(props) => props.toggle === true ? '87%' : '70%' };    
    }
    @media screen and (min-width: 1024px) and (min-height: 768px) {
        margin-left: ${(props) => props.toggle === true ? '11%' : '28%' };
        width: ${(props) => props.toggle === true ? '94%' : '76%' };
    }
    @media screen and (min-width: 1280px) {
        margin-left: ${(props) => props.toggle === true ? '10%' : '28%' };
        width: ${(props) => props.toggle === true ? '94%' : '76%' };
    }
    @media screen and (min-width: 1360px) {
        margin-left: ${(props) => props.toggle === true ? '10%' : '27%' };
        width: ${(props) => props.toggle === true ? '93%' : '75%' };
    }
    @media screen and (min-width: 1440px) {
        margin-left: ${(props) => props.toggle === true ? '10%' : '27%' };
    }
    @media screen and (min-width: 1680px) {
        margin-left: ${(props) => props.toggle === true ? '11%' : '26%' };
        width: ${(props) => props.toggle === true ? '91%' : '76%' };
    }
`;

export const SectionContent = styled.section`
    display: flex;
    width: 100%;
    height: 90%;
    
    gap: 30px;
    @media screen and (min-width: 1024px) and (min-height: 600px) {
        width: 100%;
        height: 83%;
        margin: -33px 0px;
    }
    @media screen and (min-width: 1024px) and (min-height: 768px) {
        width: 93%;
        height: 400px;
    }
    @media screen and (min-width: 1280px) {
        width: 93%;
        height: 550px;
    }
    @media screen and (min-width: 1366px) {
        width: 95%;
    }
    @media screen and (min-width: 1440px) {
        width: 96%;
        height: 547px;
    }
    @media screen and (min-width: 1680px) {
        width: 96%;
        height: 575px;
        margin: -13px 0px;
    }
    @media screen and (min-width: 1920px) {
        width: 96%;
        height: 575px;
        margin: -13px 0px;
    }
`; 

export const SectionTitle = styled.div`
    margin: 30px 0px;
    font-size: 30px;
    font-weight: 500;

    @media screen and (min-width: 1024px) and (min-height: 600px) {
        font-size: 21px;
        margin: 30px 0px;
    }
    @media screen and (min-width: 1024px) and (min-height: 768px) {
        font-size: 21px;
        margin: 35px 0px;
    }
    @media screen and (min-width: 1280px) {
        font-size: 25px;
        margin: 34px 0px;
    }
    @media screen and (min-width: 1366px) {
        margin: 31px 0px;
    }
    @media screen and (min-width: 1440px) {
        font-size: 25px;
        margin: 32px 0px;
    }
    @media screen and (min-width: 1680px) {
        margin: 31px 0px 0px 0px;
        font-size: 27px;
    }
    @media screen and (min-width: 1920px) {
        font-size: 38px;
        margin: 31px 0px 2px 0px;
    }
`;