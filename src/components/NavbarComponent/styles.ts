import styled from "styled-components";
import { SectionLogoProps,LogoImageProps, ItemNameProps, ContentNavbarProps, IconImageProps, LogoutButtonProps, CollapseButtonProps, MenuItemProps} from "./Navbar";


export const SectionWrapper = styled.section`
  height: 90vh;
  width: 25%;
  position: fixed;
`;
export const SectionLogo = styled.section<SectionLogoProps>`
  //width: ${(props) => props.toggle === true ? '23.6%' : '94%' };
  // width: 23.6%; //change
  width: 94%;
  height: 90%;
  top: 0;
  margin: 20px;
  border-radius: 10px; 
  background: linear-gradient(
      to right,
      ${(props) => props.colorStart || "#BD9CFF"},
      ${(props) => props.colorEnd || "#FFAF63"}
  );
  z-index: 1;
  position: relative;
  transition: all 0.5s ease-in-out;
 @media screen and (min-width: 1024px) and (min-height: 600px) {
   width: ${(props) => props.toggle === true ? '20%' : '94%' };
   height: 90%;
 }
 @media screen and (min-width: 1024px) and (min-height: 768px){
   width: ${(props) => props.toggle === true ? '20%' : '94%' };
   height: 91%;
 }
 @media screen and (min-width: 1280px) {
  width: ${(props) => props.toggle === true ? '21.5%' : '92%' };
   height: 89%;
 }
 @media  screen and (min-width: 1366px) {
  width: ${(props) => props.toggle === true ? '22%' : '92%' };
   height: 90%;
 }
 @media screen and (min-width: 1440px) {
  width: ${(props) => props.toggle === true ? '22.3%' : '92%' };
   height: 90%; 
 }
 @media screen and (min-width: 1680px) {
  width: ${(props) => props.toggle === true ? '23.6%' : '92%' };
  height: 90%;
 }
`;

export const LogoImageStyled = styled.img<LogoImageProps>`
  width: 66px;
  height: 24px;
  display: flex;
  padding: 14px 0px 0px 22px; 
  transition: all 0.5s ease-in-out;

  @media screen and (min-width: 1024px)  {
    width: ${(props) => props.toggle === true ? '42px' : '60px' };
    height: ${(props) => props.toggle === true ? '17px' : '22px' };
    padding: ${(props) => props.toggle === true ? '14px 10px 0px 5px' : '12px 0px 0px 11px;' };
  }
  @media screen and (min-width: 1280px)  {
    width: ${(props) => props.toggle === true ? '47px' : '60px' };
    height: ${(props) => props.toggle === true ? '19px' : '22px' };
    padding: ${(props) => props.toggle === true ? '14px 10px 0px 11px' : '11px 0px 0px 17px' };
  }
  @media screen and (min-width: 1366px)  {
    width: ${(props) => props.toggle === true ? '52px' : '60px' };
    height: ${(props) => props.toggle === true ? '20px' : '22px' };
    padding: ${(props) => props.toggle === true ? '14px 10px 0px 12px' : '11px 0px 0px 20px' };
  }
  @media screen and (min-width: 1680px) {
    width: 65px;
    height: 25px;
    padding: ${(props) => props.toggle === true ? '17px 0px 0px 17px' : '17px 0px 0px 30px' };
  }
  @media screen and (min-width: 1920px) {
    width: 82px;
    height: 32px;
    padding: ${(props) => props.toggle === true ? '23px 0px 0px 17px;' : '24px 0px 0px 33px' };
  }
  /*@media screen and (min-width: 2880px) and (min-height: 1864px) {
    width: 95px; 
    height: 35px;
    padding: ${(props) => props.toggle === true ? '11px 0px 0px 33px' : '13px 0px 0px 53px' };
  }*/
`;
export const ContentNavbar = styled.div<ContentNavbarProps>`
  width: ${(props) => props.toggle === true ? '200px' : '432px' };
  height: 956px;
  margin: 20px;
  background-color: #F4F4F4;
  gap: 20px;
  border-radius: 10px; 
  position: fixed;
  top: 15px;
  z-index: 2;
  transition: all 0.5s ease-in-out;

  @media screen and (min-width: 1024px) and (min-height: 600px) {
    width: ${(props) => props.toggle === true ? '5.1%' : '23.6%' };
    height: 86%;
    top: 49px; 
  }
  @media screen and (min-width: 1024px) and (min-height: 768px) {
    width: ${(props) => props.toggle === true ? '5.1%' : '23.6%' };
    height: 86%;
  }
  @media screen and (min-width: 1280px) {
    width: ${(props) => props.toggle === true ? '5.5%' : '23.1%' };
    height: 86%;
  }
  @media screen and (min-width: 1366px) {
    width: ${(props) => props.toggle === true ? '5.6%' : '23.1%' };
    height: 85%;
  }
  @media screen and (min-width: 1440px) {
    height: 87%; 
  }
  @media screen and (min-width: 1680px) {
    width: ${(props) => props.toggle === true ? '6%' : '23.1%' };
    top: 70px;
    height: 88%;
   //width: 23.1%;top: 70px;height: 88%;
  }
  @media screen and (min-width: 1920px) {
    width: ${(props) => props.toggle === true ? '6%' : '23.1%' };
    top: 82px;
    height: 88%;
  }

`; 

export const MenuList = styled.section`
  display: flex;
  flex-direction: column;
  margin: 25px;
  height: 35%;
  gap: 6px;
  @media screen and (min-width: 1024px) {
    margin: 16px 0px 0px 7px;
  }
  @media screen and (min-width: 1280px) {
    margin: 31px 0px 0px 14px;
  }
  @media screen and (min-width: 1366px) {
    margin: 31px 0px 0px 23px;
  }
  @media screen and (min-width: 1440px) {
    margin: 31px 0px 0px 26px;
  }
  @media screen and (min-width: 1680px) {
    margin: 31px 0px 0px 32px;
  }
  @media screen and (min-width: 1920px) {
    margin: 31px 0px 0px 32px;
  }
  @media screen and (min-width: 2880px) and (min-height: 1864px) {
    margin: 31px 0px 0px 56px;
  }
`;

export const MenuItem = styled.div<MenuItemProps>`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  //width: 400px;
  height: 77px;
  
 
  &:hover {
    background-color: #FFFFFF;
    border-radius: 10px;
    //height: 400px;
  }
  @media screen and (min-width: 1024px) {

    &:hover {
      width: ${(props) => props.toggle === true ? '35px' : '200px' }; 
    }
  }

  @media screen and (min-width: 1280px) {
    &:hover {
      width: ${(props) => props.toggle === true ? '35px' : '250px' }; 
    } 
  }
  @media screen and (min-width: 1366px) {
    &:hover {
      width: ${(props) => props.toggle === true ? '35px' : '265px' }; 
    } 
  }
  @media screen and (min-width: 1440px) {
    &:hover {
      width: ${(props) => props.toggle === true ? '35px' : '280px' };  
    } 
  }
  @media screen and (min-width: 1680px) {
    &:hover {
      width: ${(props) => props.toggle === true ? '40px' : '335px' }; 
    } 
  }
  @media screen and (min-width: 1920px) {
    &:hover {
      width: ${(props) => props.toggle === true ? '40px' : '400px' }; 
    }
  }
`;

export const IconImage = styled.img<IconImageProps>`
  width: 30px;
  height: 30px;
  padding: 5px 0px 5px 7px;
  transition: all 0.5s ease-in-out;
  @media screen and (min-width: 1024px) {
    width: 20px;
    height: 20px;
  }
  @media screen and (min-width: 1280px) {
    width: 25px;
    height: 25px;
  }
  @media screen and (min-width: 1680px) {
    width: 27px;
    height: 27px;
  }
  @media screen and (min-width: 1920px) {
    width: 30px;
    height: 30px;
  }
  @media screen and (min-width: 2880px) and (min-height: 1864px) {
    width: 40px;
    height: 40px;
  }
`;
export const ItemName = styled.div<ItemNameProps>`
  margin: 0;
  font-size: 20px;
  font-weight: 400;
  opacity: ${(props) => props.toggle === true ? '0' : '1' };
  transition: ${(props) => props.toggle === true ? '0.3s' : '0.5s' };;
  //transition: all 0.5s ease-in-out 0.3s;

  @media screen and (min-width: 1024px) {
    font-size: 15px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 17px;
  }
  @media screen and (min-width: 1680px) {
    font-size: 22px;
  }
  @media screen and (min-width: 1920px) {
    font-size: 25px;
  }
`;
export  const LogoutButton = styled.button<LogoutButtonProps>`
  width: 69px;
  height: 31px;

  font-size: 8.5px;
  position: absolute;
  bottom: 5px; 
  left: 40px; 
  background-color: #FFFFFF; 
  color: #000; 
  border: none;
  border-radius: 5px;
  cursor: pointer;
  z-index: 3;
  transition: all 0.5s ease-in-out;

  @media screen and (min-width: 1024px) {
    width: 39px;
    height: 20px;
    
    //width: ${(props) => props.toggle === true ? '39px' : '69px' };
    //height: ${(props) => props.toggle === true ? '20px' : '31px' };
    left: ${(props) => props.toggle === true ? '26px' : '40px' };
    //font-size: ${(props) => props.toggle === true ? '8px' : '11px' };
    bottom: -15px;
  }
  @media screen and (min-width: 1280px) {
    width: ${(props) => props.toggle === true ? '55px' : '69px' };
    height: ${(props) => props.toggle === true ? '29px' : '31px' };
    left: ${(props) => props.toggle === true ? '27px' : '40px' };
    bottom: 5px;
    font-size: 8.5px; 
  }
  @media screen and (min-width: 1366px) {
    left: ${(props) => props.toggle === true ? '30px' : '45px' };
    
    bottom: 5px;
  }
  @media screen and (min-width: 1440px) {
    left: ${(props) => props.toggle === true ? '33px' : '45px' };
    bottom: 1px;
  }
  @media screen and (min-width: 1680px) {
    
    width: ${(props) => props.toggle === true ? '68px' : '95px' };
    height: ${(props) => props.toggle === true ? '35px' : '40px' };
    left: ${(props) => props.toggle === true ? '36px' : '50px' };
    bottom: -36px;
  }
  @media screen and (min-width: 1920px) {
    width: 85px;
    height: 31px;
    font-size: 9px; 
  }
`;



export const CollapseButton = styled.button<CollapseButtonProps>`
  width: 36px;
  height: 79px;
  position: fixed;
  top: 50%; 
  left: 22.7%;
  transform: translateY(-50%); 
  transition: all 0.5s ease-in-out;
  background-color: #D9D9D9; 
  color: #FFFFFF; 
  border: none;
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 4;

  @media screen and (min-width: 1024px) {
    left: ${(props) => props.toggle === true ? '7.5%' : '23.8%' };
    transform: ${(props) => props.toggle === true ? 'rotate(180deg)' : 'none' };
    background-color: ${(props) => props.toggle === true ? '#F4F4F4' : '#D9D9D9' };
    top: 50%;
    width: 25px;
    height: 55px;
  }
  @media screen and (min-width: 1280px) {
    left: ${(props) => props.toggle === true ? '7.6%' : '23.3%' };
  }
  @media screen and (min-width: 1440px) {
    left: ${(props) => props.toggle === true ? '7.5%' : '23.3%' };
    top: 50%;
  }
  @media screen and (min-width: 1360px) {
    left: ${(props) => props.toggle === true ? '7.5%' : '23.3%' };
    top: 50%;
  }
  @media screen and (min-width: 1680px) {
    left: ${(props) => props.toggle === true ? '7.6%' : '22.7%' };
    transform: ${(props) => props.toggle === true ? 'rotate(180deg)' : 'none' };
    background-color: ${(props) => props.toggle === true ? '#F4F4F4' : '#D9D9D9' };
    width: 35px;
    height: 74px;
    top: 50%; 
  }
  @media screen and (min-width: 1920px) {
    left: ${(props) => props.toggle === true ? '7.4%' : '22.7%' };
    transform: ${(props) => props.toggle === true ? 'rotate(180deg)' : 'none' };
    background-color: ${(props) => props.toggle === true ? '#F4F4F4' : '#D9D9D9' };
    width: 35px;
    height: 74px;
    top: 50%; 
  }
  /*@media screen and (min-width: 2880px) and (min-height: 1864px) {
    left: ${(props) => props.toggle === true ? '6.9%' : '22.8%' };
    transform: ${(props) => props.toggle === true ? 'rotate(180deg)' : 'none' };
    background-color: ${(props) => props.toggle === true ? '#F4F4F4' : '#D9D9D9' };
  }*/
`;

export const CollapseIcon = styled.div`
  width: 17px;
  height: 10px;
  z-index: 5;
`;
