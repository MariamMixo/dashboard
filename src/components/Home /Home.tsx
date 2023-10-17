import styled from "styled-components"

type Props= {
  
}
const Home: React.FC<Props> = () => {
  return (
    <div>
      <Myh1>Home</Myh1>
    </div>
  )
}

const Myh1 = styled.h1`
  text-align: center;
  color: red;
`;
export default Home;
