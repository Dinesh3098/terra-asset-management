import { gql } from "@apollo/client"

const GET_ALL_ASSET = gql`
query {
    getAllAsset {
        id
        name
        images {
          image
          key
        }
        tag
        createdBy {
          id
          fullName
          email
        }
    }
}`;

export {
    GET_ALL_ASSET
};