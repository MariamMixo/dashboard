import React from 'react';
import styled from 'styled-components';
import Navbar from '../Navbar/Navbar';

const menuItems = ['Home', 'Machines', 'Stock', 'Calendar', 'Workers', 'Finance'];
const Home: React.FC = () => {
  return (
    <HomeContainer>
      <Navbar items={menuItems} />
      <TopSection>
        <TopDiv>Info</TopDiv>
        <TopDiv>Contact Us</TopDiv>
        <TopDiv>Sign In</TopDiv>
      </TopSection>
      <MedioSection>
        <div> n/a</div>
      </MedioSection>
      <LowerSection>
        <div>About Us</div>
      </LowerSection>
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: D9D9D9;
  align-items: left;
  width: 1920px;
  height: 1080px;
`;

const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100vh;
  height: 50vh;
  padding: 20px;
`;

const TopDiv = styled.div`
  width: 500px;
  height: 400px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 15px;
`;
const MedioSection = styled.div`
  width: 487px;
  height: 46px;
  border: 1px solid #ddd;
  border-radius: 15px;
  margin: 60px;
`;

const LowerSection = styled.div`
  width: 1477px;
  height: 590px;
  border: 1px solid #ddd;
  margin: 40px;
`;

export default Home;
