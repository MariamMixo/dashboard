

import styled from "styled-components";
import message from "../../assets/icons/message.png";
import close from "../../assets/icons/close.png";
import { useState } from "react";

export interface MessageLayoutProps {
  onClose: () => void;
}

export const MessageLayout: React.FC<MessageLayoutProps> = ({ onClose }) => {
  const [isDescriptionVisible, setDescriptionVisible] = useState(true);
 
  const handleIconClick = () => {
    setDescriptionVisible(false);
    onClose();
  };

  return (
    isDescriptionVisible && (
      <Description >
        <InfoIcon>
          <img src={message} alt="" />
          <span>Informacion</span>
        </InfoIcon>
        <DescriptionText>
          Bienvenido a tu Mixo Dashboard! Esta es la pantalla del Panel de Control donde encontrarás acceso a componentes del salpicadero como facturación, alertas o stock.
          En el menú lateral puede encontrar la página con los detalles de cada componente.
        </DescriptionText>
        <IconClose onClick={handleIconClick}>
          <img src={close} alt="" />
        </IconClose>
      </Description>
    )
  );
};




const Description = styled.div`
  width: 671px;
  height: 135px;
  background-color: #c3def6;
  border-radius: 10px;
  position: relative;
  padding: 10px;
  margin: -24px 0 20px 0;
  //transition: opacity 0.5s ease-in-out;
  //opacity: 1;
`;

const InfoIcon = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 24px;
    height: 24px;
    margin-right: 8px;
  }

  span {
    font-size: 16px;
  }
`;

const DescriptionText = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 12px;
  text-align: left;
  line-height: 1.5;
  color: #333;
  margin-top: 10px; 
`;

const IconClose = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  margin: 10px;
  img {
    width: 14.92px;
    height: 15.27px;
  }
`;



/*import styled from "styled-components";
import message from "../../assets/icons/message.png";
import close from "../../assets/icons/close.png";
import { useState } from "react";

const MessageLayout = () => {
  const [isDiscriptionVisible, setDiscriptionVisible] = useState(true);

  const handleIconClick = () => {
    setDiscriptionVisible(false);
  };

  return (
    isDiscriptionVisible && (
      <Description>
        <InfoIcon>
          <img src={message} alt="" />
          <span>Informacion</span>
        </InfoIcon>
        <DescriptionText>
          Bienvenido a tu Mixo Dashboard! Esta es la pantalla del Panel de Control donde encontrarás acceso a componentes del salpicadero como facturación, alertas o stock.
          En el menú lateral puede encontrar la página con los detalles de cada componente.
        </DescriptionText>
        <IconClose onClick={handleIconClick}>
          <img src={close} alt="" />
        </IconClose>
      </Description>
    )
  );
};
*/
// En MessageLayout.tsx

/*import styled from 'styled-components';
import message from '../../assets/icons/message.png';
import close from '../../assets/icons/close.png';
import { useState } from 'react';

const MessageLayout = () => {
  const [isDescriptionVisible, setDescriptionVisible] = useState(true);

  const handleIconClick = () => {
    setDescriptionVisible(false);
  };

  return (
    isDescriptionVisible && (
      <Description>
        <DescriptionText>
          <InfoIcon>
            <img src={message} alt="" />
            <span>Información</span>
          </InfoIcon>
          <StyledParagraph>
            Bienvenido a tu Mixo Dashboard! Esta es la pantalla del Panel de Control donde
            encontrará acceso Componentes del salpicadero como facturación, alertas o stock.
            <br></br>En el menú lateral puede encontrar la página con los detalles de cada componente.
          </StyledParagraph>
          <IconClose onClick={handleIconClick}>
            <img src={close} alt="" />
          </IconClose>
        </DescriptionText>
      </Description>
    )
  );
};

const Description = styled.div`
  width: 671px;
  height: 135px;
  background-color: #c3def6;
  border-radius: 10px;
  position: relative;
  padding: 10px;
  margin: -24px 0 20px 0px;
`;

const DescriptionText = styled.div`
  font-family: 'Montserrat', sans-serif;
  text-align: left;
  padding: 10px;
  line-height: 1.5;
`;

const InfoIcon = styled.div`
  display: flex;
  align-items: center;
  margin: -10px 0px 4px 0px;
  img {
    width: 24px;
    height: 24px;
    margin-right: 8px;
  }

  span {
    font-size: 16px;
  }
`;

const StyledParagraph = styled.p`
  font-size: 12px;
  margin-top: auto;
`;

const IconClose = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  margin: 10px;

  img {
    width: 14.92px;
    height: 15.27px;
  }
`;

export default MessageLayout;

import styled from "styled-components";
import message from "../../assets/icons/message.png";
import close from "../../assets/icons/close.png"
import { useState } from "react";

const MessageLayout = () => {
    const [isDiscriptionVisible, setDiscriptionVisible] = useState(true);

    const handleIconClick = () => {
      setDiscriptionVisible(false);
    };
  return (
    isDiscriptionVisible && (
      <Description>
        <DescriptionText>
          <InfoIcon>
            <img src={message} alt="" />
            <span>Informacion</span>
          </InfoIcon>
          <p>
            Bienvenido a tu Mixo Dashboard! Esta es la pantalla del Panel de Control donde encontrarás acceso a
            componentes del salpicadero como facturación, alertas o stock.<br></br>
            En el menú lateral puede encontrar la página con los detalles de cada componente.
          </p>
          <IconClose onClick={handleIconClick}>
            <img src={close} alt="" />
          </IconClose>
        </DescriptionText>
      </Description>
    )
  );
};

export default MessageLayout;

const Description = styled.div`
  width: 671px;
  height: 135px;
  background-color: #c3def6;
  border-radius: 10px;
  position: relative;
  padding: 10px;
  margin: -24px 0 20px 0px;
  font-weight: 400;
`;

const DescriptionText = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-size: 12px;
  text-align: left;
  padding: 10px;
  line-height: 1.5;
`;

const InfoIcon = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 24px;
    height: 24px;
    margin-right: 8px;
  }

  span {
    font-size: 16px;
    font-weight: 500;
  }
`;

const IconClose = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  margin: 10px;
  img {
    width: 14.92px;
    height: 15.27px;
  }
`;


import styled from "styled-components";
import message from "../../assets/icons/message.png";
import close from "../../assets/icons/close.png";
import { useState } from "react";

export interface IconCloseProps {
  isClosed: boolean;
}

export interface MessageLayoutProps {
  onClose: () => void;
}

export const MessageLayout: React.FC<MessageLayoutProps> = ({ onClose }) => {
  const [isDescriptionVisible, setDescriptionVisible] = useState(true);
  const [isClosed, setIsClosed] = useState(false);
  const handleIconClick = () => {
    setDescriptionVisible(false);
    setIsClosed(true);
    onClose();
  };

  return (
    isDescriptionVisible && (
      <Description >
        <InfoIcon>
          <img src={message} alt="" />
          <span>Informacion</span>
        </InfoIcon>
        <DescriptionText>
          Bienvenido a tu Mixo Dashboard! Esta es la pantalla del Panel de Control donde encontrarás acceso a componentes del salpicadero como facturación, alertas o stock.
          En el menú lateral puede encontrar la página con los detalles de cada componente.
        </DescriptionText>
        <IconClose onClick={handleIconClick} isClosed={isClosed}>
          <img src={close} alt="" />
        </IconClose>
      </Description>
    )
  );
};




const Description = styled.div`
  width: 671px;
  height: 135px;
  background-color: #c3def6;
  border-radius: 10px;
  position: relative;
  padding: 10px;
  margin: -24px 0 20px 0;
  transition: opacity 0.5s ease-in-out;
  opacity: 1;
`;

const InfoIcon = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 24px;
    height: 24px;
    margin-right: 8px;
  }

  span {
    font-size: 16px;
  }
`;

const DescriptionText = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 12px;
  text-align: left;
  line-height: 1.5;
  color: #333;
  margin-top: 10px;
`;

const IconClose = styled.div<IconCloseProps>`
 transform: translate(${(props) => (props.isClosed ? '100%' : '0')});
  transition: transform 1s ease-in-out;
  position: absolute;
  top: 0;
  right: 0;
  margin: 10px;
  img {
    width: 14.92px;
    height: 15.27px;
  }
`;
*/
