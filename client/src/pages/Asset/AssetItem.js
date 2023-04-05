import styled from "styled-components";
import { mobile } from "../../responsive";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 30vh;
  width: 2px;
  
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: "20vh" })}

`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
    color:black;
    margin-bottom: 20px;
    font-size: 20px
`;


const AssetItem = ({ item }) => {
    return (
        <Container>
            <Image src={item.images[0].image} />
            <Title>{item.name}</Title>
        </Container>
    );
};

export default AssetItem;
