import { SectionWrapper } from "./styles";


import { Navbar } from "../../components/NavbarComponent/Navbar";
import { useMenuStore } from "../../store/menuStore";
import { PanelLayout } from "../../layout/panel/PanelLayout";


export const DashboardPage = () => {
  const toggleMenu = useMenuStore((state) => state.toggleMenu);
  const setToggleMenu = useMenuStore((state) => state.setToggleMenu);

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };
  return (
    <SectionWrapper>
      <Navbar toggleMenu={toggleMenu} onToggleMenu={handleToggleMenu}/>
      <PanelLayout toggleMenu={toggleMenu}/>
    </SectionWrapper>
  )
}
/*export const DashboardPage = () => {
  export interface SectionWrapperProps {
  toggleMenu: boolean;
}
  const toggleMenu = useMenuStore((state) => state.toggleMenu);
  const selectedLayout = useMenuStore((state) => state.selectedLayout);
  const setToggleMenu = useMenuStore((state) => state.setToggleMenu);

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <SectionWrapper toggleMenu={toggleMenu}>
      <Navbar toggleMenu={toggleMenu} onToggleMenu={handleToggleMenu}/>
      {selectedLayout === '/' && <PanelLayout toggleMenu={toggleMenu} />}
      {selectedLayout === '/devices' && <DeviceLayout/>}
      {selectedLayout === '/sales' && <SalesLayout  />}
      {selectedLayout === '/stock' && <StockLayout  />}
      {selectedLayout === '/maintenance' && <MaintenianceLayout  />}
      {selectedLayout === '/ajustes' && <SettingsLayout  />}
    </SectionWrapper>
  );
}

*/
