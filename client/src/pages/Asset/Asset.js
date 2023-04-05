import styled from "styled-components";
import { mobile } from "../../responsive";
import AssetItem from "./AssetItem";
import { GET_ALL_ASSET } from "../../queries/AssetQueries";
import { useQuery } from "@apollo/react-hooks";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  margin-top: 100px;
  ${mobile({ padding: "0px", flexDirection: "column" })}

`;


const Asset = () => {
    const { data } = useQuery(GET_ALL_ASSET);
    const getAllAsset = data?.getAllAsset;
    console.log("getAllAsset", getAllAsset)
    return (
        <Container>
            {getAllAsset ?
                getAllAsset?.map((item) => (
                    <AssetItem item={item} key={item.id} />
                ))
                : <>Loading....</>}
        </Container>
    );
};

export default Asset;