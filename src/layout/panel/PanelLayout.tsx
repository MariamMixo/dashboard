import React, { useState } from 'react';
import { SectionWrapper, SectionTitle, SectionContent } from './styles';

import { MessageLayout } from '../Message/MessageLayout';
import { Mainteniance } from '../../components/MaintenianceComponent/Mainteniance';
import { SalesLayout } from '../sales/SalesLayout';

interface PanelLayoutProps {
  toggleMenu: boolean;
}
type HeightType = '163%' | '130%' | string;
export const PanelLayout: React.FC<PanelLayoutProps> = ({ toggleMenu }) => {
  const [salesHeight, setSalesHeight] = useState<HeightType>('130%');
  const [maintenianceHeight, setMaintenianceHeight] = useState<HeightType>('130%');


  const handleMessageClose = () => {
    setSalesHeight('163%');
    setMaintenianceHeight('163%');
  };


  return (
    <SectionWrapper toggle={!!toggleMenu}>
      <SectionTitle>Control Panel</SectionTitle>
      <MessageLayout onClose={handleMessageClose} />
      <SectionContent>
        <SalesLayout height={salesHeight as "130%" | "163%"} />
        <Mainteniance height={maintenianceHeight} toggleMenu={toggleMenu} />
      </SectionContent>
    </SectionWrapper>
  );
};



/*mport { SectionWrapper, SectionTitle, SectionContent } from './styles';


import { SalesLayout } from '../sales/SalesLayout';
import { MessageLayout } from '../Message/MessageLayout';
import { Mainteniance } from '../../components/MaintenianceComponent/Mainteniance';


export interface PanelLayoutProps {
  toggleMenu: boolean;
  isMessageLayoutVisible: boolean;
  toggleMessageLayout: () => void;
}

export const PanelLayout: React.FC<PanelLayoutProps> = ({ toggleMenu }) => {
  const handleMessageClose = () => {   
  };

  return (
    <SectionWrapper toggle={!!toggleMenu}>
      <SectionTitle>Control Panel</SectionTitle>
      <MessageLayout onClose={handleMessageClose}  />
      <SectionContent>
        <SalesLayout />
        <Mainteniance/>/
      </SectionContent>
    </SectionWrapper>
  );
}

























/*export const PanelLayout: React.FC<PanelLayoutProps> = ({ toggleMenu, toggleMessageLayout }) => {
  const [contentSize, setContentSize] = useState<'normal' | 'expanded'>('normal');
  const [salesHeight, setSalesHeight] = useState<'100%' | '40%'>('100%');
  const [maintenianceHeight, setMaintenianceHeight] = useState<'100%' | '40%'>('100%');

  const handleIconClick = () => {
    setContentSize('normal');
    toggleMessageLayout();
    setSalesHeight('100%');
    setMaintenianceHeight('100%');
  };

  const handleExpandClick = () => {
    setContentSize('expanded');
    setSalesHeight('40%');
    setMaintenianceHeight('40%');
  };

  return (
    <SectionWrapper toggle={!!toggleMenu}>
      <SectionTitle>Control Panel</SectionTitle>
      <MessageLayout onClose={handleIconClick} onExpand={handleExpandClick} />
      <SectionContent size={contentSize}>
        <SalesLayout height={salesHeight} />
        <Mainteniance height={maintenianceHeight} />
      </SectionContent>
    </SectionWrapper>
  );
};

/*import { SectionWrapper, SectionTitle, SectionContent } from './styles';

import { SalesLayout } from '../sales/SalesLayout';
import { Mainteniance } from '../../components/MaintenianceComponent/Mainteniance';
import { useState } from 'react';
import { MessageLayout } from '../Message/MessageLayout';

export interface PanelLayoutProps {
  toggleMenu: boolean;
  isMessageLayoutVisible: boolean;
  toggleMessageLayout: () => void;
}
export const PanelLayout: React.FC<PanelLayoutProps> = ({ toggleMenu, toggleMessageLayout }) => {
  const [contentSize, setContentSize] = useState<'normal' | 'expanded'>('normal');

  const handleIconClick = () => {
    setContentSize('normal');
    toggleMessageLayout();
  };

  const handleExpandClick = () => {
    setContentSize('expanded');
  };

  return (
    <SectionWrapper toggle={!!toggleMenu}>
      <SectionTitle>Control Panel</SectionTitle>
      <MessageLayout onClose={handleIconClick} onExpand={handleExpandClick} />
      <SectionContent size={contentSize}>
        <SalesLayout />
        <Mainteniance />
      </SectionContent>
    </SectionWrapper>
  );
};
/*export const PanelLayout: React.FC<PanelLayoutProps> = ({ toggleMenu }) => {
  const [contentSize, setContentSize] = useState<'normal' | 'expanded'>('normal');

  const handleIconClick = () => {
    setContentSize('normal');
  };

  const handleExpandClick = () => {
    setContentSize('expanded');
  };

  return (
    <SectionWrapper toggle={!!toggleMenu}>
      <SectionTitle>Control Panel</SectionTitle>
      <MessageLayout onClose={handleIconClick} onExpand={handleExpandClick} />
      <SectionContent size={contentSize}>
        <SalesLayout />
        <Mainteniance />
      </SectionContent>
    </SectionWrapper>
  );
};

/*export const PanelLayout: React.FC<PanelLayoutProps> = ({ toggleMenu }) => {
  return (
    <SectionWrapper toggle={!!toggleMenu}>
      <SectionTitle>Control Panel</SectionTitle>
      <MessageLayout/>
      <SectionContent>
        <SalesLayout />
        <Mainteniance />
      </SectionContent>
    </SectionWrapper>
  );
};*/