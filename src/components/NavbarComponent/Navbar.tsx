import {
  SectionWrapper,
  SectionLogo,
  LogoImageStyled,
  ContentNavbar,
  MenuItem,
  MenuList,
  IconImage,
  ItemName,
  LogoutButton,
  CollapseButton,
} from './styles';
import logo from '../../assets/logo/logo.png';
import panel from '../../assets/icons/panel.png';
import dispositivos from '../../assets/icons/device.png';
import facturacion from '../../assets/icons/billings.png';
import stock from '../../assets/icons/stock.png';
import maintenance from '../../assets/icons/tool.png';
import ajustes from '../../assets/icons/settings.png';
import collapse from '../../assets/icons/colapse.png';

export interface LogoImageProps {
  src: string;
  alt: string;
  toggle?: boolean;
}

export const LogoImage: React.FC<LogoImageProps> = ({ src, alt, toggle }) => {
  return <LogoImageStyled src={src} alt={alt} toggle={toggle} />;
}

export interface SectionLogoProps {
  toggle?: boolean;
  colorStart?: string;
  colorEnd?: string;
}

export interface ItemNameProps {
  toggle?: boolean; 
}

export interface IconImageProps {
  toggle?: boolean; 
}

export interface ContentNavbarProps {
  toggle?: boolean;
}
export interface LogoutButtonProps{
  toggle?: boolean;
}
export interface CollapseButtonProps{
  toggle?:boolean;
}
export interface NavbarProps {
  toggleMenu: boolean;
  onToggleMenu: () => void;
}
export interface MenuItemProps {
  toggle?: boolean; 
}

const menuList = [
  {
    name: 'Panel',
    img: panel,
    to: '/',
  },
  {
    name: 'Devices',
    img: dispositivos,
    to: '/devices',
  },
  {
    name: 'Sales',
    img: facturacion,
    to: '/sales',
  },
  {
    name: 'Stock',
    img: stock,
    to: '/stock',
  },
  {
    name: 'Maintenance',
    img: maintenance,
    to: '/maintenance',
  },
  {
    name: 'Settings',
    img: ajustes,
    to: '/ajustes',
  },
];

export const Navbar: React.FC<NavbarProps> = ({ toggleMenu, onToggleMenu }) => {
  return (
    <SectionWrapper>
      <SectionLogo colorStart="#BD9CFF" colorEnd="#FFAF63" toggle={toggleMenu}>
        <LogoImage src={logo} alt="Logo" toggle={toggleMenu} />
      </SectionLogo>
      <ContentNavbar toggle={toggleMenu}>
        <MenuList>
          {menuList.map((item, index) => (
            <MenuItem key={index} style={{ color: '#000' }} toggle={toggleMenu}>
              <IconImage src={item.img} alt="" toggle={toggleMenu} />
              <ItemName toggle={toggleMenu}>{item.name}</ItemName>
            </MenuItem>
          ))}
        </MenuList>
      </ContentNavbar>
      <CollapseButton onClick={onToggleMenu} toggle={!!toggleMenu}>
        <img src={collapse} alt="collapse-icon" />
      </CollapseButton>
      <LogoutButton toggle={toggleMenu}>Logout</LogoutButton>
    </SectionWrapper>
  );
 
};

/**
 * 
 * 
 *  const [toggleMenu, setToggleMenu] = useState(false);
  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <SectionWrapper>
    <SectionLogo colorStart="#BD9CFF" colorEnd="#FFAF63" toggle={toggleMenu}>
      <LogoImage src={logo} alt="Logo" toggle={toggleMenu} />
    </SectionLogo>
    <ContentNavbar toggle={toggleMenu}>
      <MenuList>
        {menuList.map((item, index) => (
          <MenuItem key={index} style={{ color: '#000' }}>
            <IconImage src={item.img} alt="" toggle={toggleMenu} />
            <ItemName toggle={toggleMenu}>{item.name}</ItemName>
          </MenuItem>
        ))}
      </MenuList>
    </ContentNavbar>
    <CollapseButton  onClick={() => handleToggleMenu()} toggle={toggleMenu}>
      <img src={collapse} alt="collapse-icon" />
    </CollapseButton>
    <LogoutButton toggle={toggleMenu}>Logout</LogoutButton>
  </SectionWrapper>
  );
export const Navbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };
  onClick={() => handleToggleMenu()} toggle={toggleMenu}
  const menu = [
    {
      name: 'Panel',
      img: panel,
      to: '/',
    },
    {
      name: 'Dispositivos',
      img: dispositivos,
      to: '/devices',
    },
    {
      name: 'Facturación',
      img: facturacion,
      to: '/sales',
    },
    {
      name: 'Stock',
      img: stock,
      to: '/stock',
    },
    {
      name: 'Maintenance',
      img: maintenance,
      to: '/maintenance',
    },
    {
      name: 'Ajustes',
      img: ajustes,
      to: '/ajustes',
    },
  ];
  return (
    <SectionWrapper style={{ width: isCollapsed ? '20%' : '100%' }}>
      <SectionLogo colorStart="#BD9CFF" colorEnd="#FFAF63">
        <LogoImage src={logo} alt="Logo" />
      </SectionLogo>
      <ContentNavbar>
        <MenuList>
          {menu.map((item, index) => (
            <MenuItem key={index} style={{ color: '#000', display: isCollapsed ? 'none' : 'block' }}>
              <IconImage src={item.img} alt="" />
              <ItemName>{item.name}</ItemName>
            </MenuItem>
          ))}
        </MenuList>
      </ContentNavbar>
      <CollapseButton onClick={toggleCollapse}>
        <img src={collapse} alt="collapse-icon" />
      </CollapseButton>
      <LogoutButton>Logout</LogoutButton>
    </SectionWrapper>
  );
};
 */

/*import {
  SectionWrapper,
  SectionLogo,
  LogoImageStyled,
  ContentNavbar,
  MenuItem,
  MenuList,
  IconImage,
  ItemName,
  LogoutButton,
  CollapseButton,
  TopSection,
  SidebarContent,
} from './styles';
import logo from '../../assets/logo/logo.png';
import panel from '../../assets/icons/panel.png';
import dispositivos from '../../assets/icons/device.png';
import facturacion from '../../assets/icons/billings.png';
import stock from '../../assets/icons/stock.png';
import maintenance from '../../assets/icons/tool.png';
import ajustes from '../../assets/icons/settings.png';
import collapse from '../../assets/icons/colapse.png';

import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ReactNode } from 'react';

export interface LogoImageProps {
  src: string;
  alt: string;
}

export const LogoImage: React.FC<LogoImageProps> = ({ src, alt }) => {
  return <LogoImageStyled src={src} alt={alt} />;
};

export interface SectionLogoProps {
  colorStart?: string;
  colorEnd?: string;
}
interface NavbarProps {
  children: ReactNode;
}
export interface LogoImageProps {
  src: string;
  alt: string;
  onClick?: () => void; 
}
export const Navbar = ({ children }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const menu = [
    {
      name: 'Panel',
      img: panel,
      to: '/',
    },
    {
      name: 'Dispositivos',
      img: dispositivos,
      to: '/devices',
    },
    {
      name: 'Facturación',
      img: facturacion,
      to: '/sales',
    },
    {
      name: 'Stock',
      img: stock,
      to: '/stock',
    },
    {
      name: 'Maintenance',
      img: maintenance,
      to: '/maintenance',
    },
    {
      name: 'Ajustes',
      img: ajustes,
      to: '/ajustes',
    },
  ];
  return (
    <SectionWrapper>
      <SidebarContent style={{ width: isOpen ? '200px' : '80px' }}>
        <TopSection>
          <SectionLogo style={{ display: isOpen ? 'block' : 'none' }}>
            <LogoImage src={logo} alt="Logo" onClick={toggle} />
          </SectionLogo>
        </TopSection>
        {menu.map((item, index) => (
          <NavLink to={item.to} key={index}>
            <IconImage src={item.img} alt="" />
            <ItemName style={{ display: isOpen ? 'block' : 'none' }}>{item.name}</ItemName>
          </NavLink>
        ))}
      </SidebarContent>
      <main>{children}</main>
    </SectionWrapper>
  );
};











/*import {
  SectionWrapper,
  SectionLogo,
  LogoImageStyled,
  ContentNavbar,
  MenuItem,
  MenuList,
  IconImage,
  ItemName,
  LogoutButton,
  CollapseButton,
} from './styles';
import logo from '../../assets/logo/logo.png';
import panel from '../../assets/icons/panel.png';
import dispositivos from '../../assets/icons/device.png';
import facturacion from '../../assets/icons/billings.png';
import stock from '../../assets/icons/stock.png';
import maintenance from '../../assets/icons/tool.png';
import ajustes from '../../assets/icons/settings.png';
import collapse from '../../assets/icons/colapse.png';

export interface LogoImageProps {
  src: string;
  alt: string;
}

export const LogoImage: React.FC<LogoImageProps> = ({ src, alt }) => {
  return <LogoImageStyled src={src} alt={alt} />;
};

export interface SectionLogoProps {
  colorStart?: string;
  colorEnd?: string;
}

export const Navbar = () => {
  const menu = [
    {
        label: "Panel",
        img: panel,
        to: "/"
    },
    {
        label: "Dispositivos",
        img: dispositivos,
        to: "/dispositivos",
    },
    {
        label: "Facturación",
        img: facturacion ,
        to: "/facturacion"
    },
    {
        label: "Stock",
        img: stock,
        to: "/stock",
    },
    {
      label: "Maintenance",
      img: maintenance,
      to: "/maintenance",
  },
  {
    label: "Ajustes",
    img: ajustes,
    to: "/ajustes",
}
];
  const menu = [
    { name: 'Panel', img: panel },
    { name: 'Dispositivos', img: dispositivos },
    { name: 'Facturación', img: facturacion },
    { name: 'Stock', img: stock },
    { name: 'Maintenance', img: maintenance },
    { name: 'Ajustes', img: ajustes },
  ];
  return (
    <SectionWrapper >
      <SectionLogo colorStart="#BD9CFF" colorEnd="#FFAF63">
        <LogoImage src={logo} alt="Logo" />
      </SectionLogo>
      <ContentNavbar  >
        <MenuList >
          {menu.map((item, index) => (
            <MenuItem  key={index} style={{ color: '#000' }}>
              <IconImage src={item.img} alt="" />
              <ItemName>{item.name}</ItemName>
            </MenuItem>
          ))}
        </MenuList>
      </ContentNavbar>
      <CollapseButton >
        <img src={collapse} alt="collapse-icon" />
      </CollapseButton>
      <LogoutButton>Logout</LogoutButton>
    </SectionWrapper>
  );
}*/
