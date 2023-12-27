import styled from "styled-components";




/*export const SectiionWrapper = styled.section<{ size: 'normal' | 'expanded' }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 377px;
  height: 723px;
  background-color: #f4f4f4;
  border-radius: 10px;
  padding: 0 20px 0 20px;
  @media screen and (min-width: 1024px) and (min-height: 600px) {
    width: 25%;
    height: 483px;
  }
  @media screen and (min-width: 1024px) and (min-height: 768px) {
    width: 200px;
    height: 155%;
  }
  @media screen and (min-width: 1280px)  {
    width: 220px;
    height: 118%;
  }
  @media screen and (min-width: 1366px)  {
    width: 550px;
    height: 112%;
  }
  @media screen and (min-width: 1440px)  {
    width: 770px;
    height: 135.4%;
  }
  @media screen and (min-width: 1680px)  {
    width: 870px;
    height: 157%;
  }
  @media screen and (min-width: 1920px)  {
    width: 900px;
    //height: 130%;
    height: ${(props) => (props.size === 'expanded' ? '163%' : '130%')};
  }
`;*/
export const SectiionWrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 377px;
    height: 723px;
    background-color: #f4f4f4;
    border-radius: 10px;
    padding: 0 20px 0 20px;
    
    @media screen and (min-width: 1024px) and (min-height: 600px) {
        width: 25%;
        height: 483px;
    }
    @media screen and (min-width: 1024px) and (min-height: 768px) {
        width: 200px;
        height: 155%;
    }
    @media screen and (min-width: 1280px)  {
        width: 220px;
        height: 118%;
    }
    @media screen and (min-width: 1366px)  {
        width: 550px;
        height: 112%;
    }
    @media screen and (min-width: 1440px)  {
        width: 770px;
        height: 135.4%;
    }
    @media screen and (min-width: 1680px)  {
        width: 870px;
        height: 157%;
    }
    @media screen and (min-width: 1920px) {
        height: 130%;
    }
`;
export const SalesInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media screen and (min-width: 1024px) and (min-height: 600px) {
    width: 200px;
    height: 486px;
  }
 
`;
export const SalesTitle = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-size: 30px;
  font-weight: 500;
  @media screen and (min-width: 1024px) and (min-height: 600px) {
    font-size: 15px;
    margin: 15px 6px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 20px;
    margin: 24px -38px;
  }
  @media screen and (min-width: 1920px) {
    font-size: 25px;
    margin: 18px -62px;
  }
`;
export const SalesSection = styled.div``;
export const CalendarContainer = styled.div`
  margin: 15px 6px;
  @media screen and (min-width: 1024px) and (min-height: 768px) {
    margin: 15px 6px 35px;
  }
  @media screen and (min-width: 1280px)  {
    margin: 15px 6px 40px;
  }
  @media screen and (min-width: 1280px)  {
    font-size: 20px;
    margin: 15px -38px 70px;
  }
  @media screen and (min-width: 1920px) {
    margin: 32px -62px;
  }
  
`;
export const SalesContent = styled.div`
  
`;
export const Combined = styled.div`
  width: 316px;
  height: 156px;
  border-radius: 10px;
  background-color: ${(props) => props.color};
  text-align: center;
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;

  p {
    font-size: 20px;
    position: relative;
    bottom: 20px;
  }

  p:nth-child(2) {
    font-size: 36px;
    position: relative;
    top: 20px;
  }
  @media screen and (min-width: 1024px) and (min-height: 600px) {
    p {
      font-size: 15px; 
      bottom: 10px;
    }

    p:nth-child(2) {
      font-size: 20px; 
    }

    width: 190px;
    height: 100px;
    margin: 20px 5px;
  }
  @media screen and (min-width: 1024px) and (min-height: 768px) {
    width: 190px;
    height: 130px;
    margin: 20px 5px;
  }
  @media screen and (min-width: 1280px)  {
    width: 200px;
    height: 130px;
    margin: 20px 0px;
  }
  @media screen and (min-width: 1366px) {
    width: 220px;
    height: 130px;
    margin: 20px -10px;
  } 
  @media screen and (min-width: 1440px) {
    width: 280px;
    height: 145px;
    margin: 20px -40px;
    p {
      font-size: 20px; 
      bottom: 10px;
    }

    p:nth-child(2) {
      font-size: 25px; 
    }
  } 
  @media screen and (min-width: 1680px) {
    width: 310px;
    height: 150px;
    margin: 40px -52px;
  }
  @media screen and (min-width: 1920px) {
    width: 330px;
    height: 156px;
    margin: 15px -62px;
    p {
      font-size: 20px; 
      bottom: 15px;
    }

    p:nth-child(2) {
      font-size: 30px; 
    }
  }
`;


export const Refreshments = styled.div`
  width: 316px;
  height: 156px;
  border-radius: 10px;
  background-color: ${(props) => props.color};
  text-align: center;
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;

  p {
    font-size: 20px;
    position: relative;
    bottom: 20px;
  }

  p:nth-child(2) {
    font-size: 36px;
    position: relative;
    top: 20px;
  }
  @media screen and (min-width: 1024px) and (min-height: 600px) {
    p {
      font-size: 15px; 
      bottom: 10px;
    }

    p:nth-child(2) {
      font-size: 20px; 
    }

    width: 190px;
    height: 100px;
    margin: 20px 5px;
  }
  @media screen and (min-width: 1024px) and (min-height: 768px) {
    width: 190px;
    height: 130px;
    margin: 20px 5px;
  }
  @media screen and (min-width: 1280px)  {
    width: 200px;
    height: 130px;
    margin: 20px 0px;
  }
  @media screen and (min-width: 1366px) {
    width: 220px;
    height: 130px;
    margin: 20px -10px;
  } 
  @media screen and (min-width: 1440px) {
    width: 280px;
    height: 145px;
    margin: 20px -40px;
    p {
      font-size: 20px; 
      bottom: 10px;
    }

    p:nth-child(2) {
      font-size: 25px; 
    }
  } 
  @media screen and (min-width: 1680px) {
    width: 310px;
    height: 150px;
    margin: 40px -52px;
  }
  @media screen and (min-width: 1920px) {
    width: 330px;
    height: 156px;
    margin: 40px -62px;
    p {
      font-size: 20px; 
      bottom: 15px;
    }

    p:nth-child(2) {
      font-size: 30px; 
    }
  }
`;


export const Water = styled.div`
  width: 316px;
  height: 156px;
  border-radius: 10px;
  background-color: ${(props) => props.color};
  text-align: center;
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;

  p {
    font-size: 20px;
    position: relative;
    bottom: 20px;
  }

  p:nth-child(2) {
    font-size: 36px;
    position: relative;
    top: 20px;
  }
  @media screen and (min-width: 1024px) and (min-height: 600px) {
    p {
      font-size: 15px; 
      bottom: 10px;
    }

    p:nth-child(2) {
      font-size: 20px; 
    }

    @media screen and (min-width: 1024px) and (min-height: 600px) {
    p {
      font-size: 15px; 
    }

    p:nth-child(2) {
      font-size: 20px; 
    }
    width: 190px;
    height: 100px;
    margin: 20px 5px;
  }
  }
  @media screen and (min-width: 1024px) and (min-height: 768px) {
    width: 190px;
    height: 130px;
    margin: 20px 5px;
  }
  @media screen and (min-width: 1280px)  {
    width: 200px;
    height: 130px;
    margin: 20px 0px;
  }
  @media screen and (min-width: 1366px) {
    width: 220px;
    height: 130px;
    margin: 20px -10px;
  }   
  @media screen and (min-width: 1440px) {
    width: 280px;
    height: 145px;
    margin: 20px -40px;
    p {
      font-size: 20px; 
      bottom: 10px;
    }

    p:nth-child(2) {
      font-size: 25px; 
    }
  }  
  @media screen and (min-width: 1680px) {
    width: 310px;
    height: 150px;
    margin: 40px -52px;
  }
  @media screen and (min-width: 1920px) {
    width: 330px;
    height: 156px;
    margin: 40px -62px;
    p {
      font-size: 20px; 
      bottom: 15px;
    }

    p:nth-child(2) {
      font-size: 30px; 
    }
  }
`;